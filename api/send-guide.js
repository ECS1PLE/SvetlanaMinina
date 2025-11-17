import fs from "fs/promises";
import fsSync from "fs";
import path from "path";
import nodemailer from "nodemailer";

function isEmail(email) {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function resolveDocumentsDir() {
  return path.join(process.cwd(), "src", "documents");
}

async function chooseDocumentPaths() {
  const docsDir = resolveDocumentsDir();

  if (!fsSync.existsSync(docsDir)) {
    throw new Error(`Documents directory not found: ${docsDir}`);
  }

  const requested = process.env.GUIDE_FILENAMES;

  if (requested) {
    const filenames = requested.split(",").map((file) => file.trim());
    const filePaths = [];

    for (let file of filenames) {
      if (file.includes("..") || path.isAbsolute(file)) {
        throw new Error("GUIDE_FILENAMES содержит недопустимые символы");
      }

      const candidate = path.join(docsDir, file);
      if (
        !fsSync.existsSync(candidate) ||
        !fsSync.statSync(candidate).isFile()
      ) {
        throw new Error(`Requested guide not found: ${file}`);
      }

      filePaths.push(candidate);
    }

    return filePaths;
  }

  const files = await fs.readdir(docsDir);
  const onlyFiles = files
    .map((f) => ({ f, full: path.join(docsDir, f) }))
    .filter((x) => fsSync.statSync(x.full).isFile())
    .map((x) => x.f)
    .sort();

  if (onlyFiles.length === 0) {
    throw new Error(`No files found in documents directory: ${docsDir}`);
  }

  return [path.join(docsDir, onlyFiles[0]), path.join(docsDir, onlyFiles[1])];
}

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  try {
    const { email } = req.body || {};

    if (!isEmail(email)) {
      return res.status(400).json({ error: "Invalid or missing email" });
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, FROM_EMAIL } =
      process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      console.error("Missing SMTP env variables");
      return res
        .status(500)
        .json({ error: "Server misconfiguration: missing SMTP settings" });
    }

    const docPaths = await chooseDocumentPaths();
    const docNames = docPaths.map((docPath) => path.basename(docPath));

    const maxBytes = Number(process.env.GUIDE_MAX_BYTES || 10 * 1024 * 1024);
    for (const docPath of docPaths) {
      const stat = fsSync.statSync(docPath);
      if (stat.size > maxBytes) {
        return res.status(500).json({
          error: `File ${path.basename(
            docPath
          )} is too large to send as attachment`,
        });
      }
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const attachments = docPaths.map((docPath, index) => ({
      filename: docNames[index],
      path: docPath,
    }));

    const info = await transporter.sendMail({
      from: FROM_EMAIL || SMTP_USER,
      to: email,
      subject:
        "Ваш гайд — 5 вопросов, после которых вы перестанете быть главным исполнителем",
      text: "Здравствуйте!\n\nВо вложении вы найдете запрашиваемые гайды. Если не пришло — проверьте папку «Спам» или напишите нам.\n\nС уважением.",
      attachments,
    });

    return res.status(200).json({
      ok: true,
      message: "Гайды отправлены",
      messageId: info && info.messageId,
    });
  } catch (err) {
    console.error("send-guide error:", err && err.stack ? err.stack : err);
    return res.status(500).json({
      error: "Ошибка при отправке файла",
      detail: String(err.message || err),
    });
  }
}
