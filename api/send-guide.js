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

async function chooseDocumentPath() {
  const docsDir = resolveDocumentsDir();

  if (!fsSync.existsSync(docsDir)) {
    throw new Error(`Documents directory not found: ${docsDir}`);
  }

  const requested = process.env.GUIDE_FILENAME;
  if (requested) {
    if (requested.includes("..") || path.isAbsolute(requested)) {
      throw new Error("GUIDE_FILENAME содержит недопустимые символы");
    }
    const candidate = path.join(docsDir, requested);
    if (!fsSync.existsSync(candidate) || !fsSync.statSync(candidate).isFile()) {
      throw new Error(`Requested guide not found: ${requested}`);
    }
    return candidate;
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

  return path.join(docsDir, onlyFiles[0]);
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

    const docPath = await chooseDocumentPath();
    const docName = path.basename(docPath);

    const stat = fsSync.statSync(docPath);
    const maxBytes = Number(process.env.GUIDE_MAX_BYTES || 10 * 1024 * 1024);
    if (stat.size > maxBytes) {
      return res
        .status(500)
        .json({ error: "Guide file is too large to send as attachment" });
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

    const info = await transporter.sendMail({
      from: FROM_EMAIL || SMTP_USER,
      to: email,
      subject:
        "Ваш гайд — 5 вопросов, после которых вы перестанете быть главным исполнителем",
      text: "Здравствуйте!\n\nВо вложении вы найдете запрошенный гайд. Если не пришло — проверьте папку «Спам» или напишите нам.\n\nС уважением.",
      attachments: [
        {
          filename: docName,
          path: docPath,
        },
      ],
    });

    return res.status(200).json({
      ok: true,
      message: "Гайд отправлен",
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
