// server/index.js
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, ".env") });

console.log("ENV loaded:", {
  SMTP_HOST: process.env.SMTP_HOST,
  SMTP_PORT: process.env.SMTP_PORT,
  SMTP_USER: process.env.SMTP_USER,
  SMTP_PASS: process.env.SMTP_PASS ? "***hidden***" : undefined,
  FROM_EMAIL: process.env.FROM_EMAIL,
  TO_EMAIL: process.env.TO_EMAIL,
});

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
if (process.env.ENABLE_CORS === "true") app.use(cors());

app.get("/", (req, res) => res.send("backend ok"));

function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

app.post("/api/send-email", async (req, res) => {
  try {
    const { fullName, contactMethod, phone, telegramHandle, email, agree } =
      req.body || {};

    if (!fullName || fullName.trim().length < 2)
      return res.status(400).json({ error: "Invalid or missing fullName" });
    if (!phone || phone.trim().length < 5)
      return res.status(400).json({ error: "Invalid or missing phone" });
    if (
      contactMethod === "telegram" &&
      (!telegramHandle || telegramHandle.trim().length < 2)
    )
      return res.status(400).json({ error: "Telegram handle required" });
    if (agree !== true && agree !== "true")
      return res.status(400).json({ error: "Consent required" });
    я;
    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, FROM_EMAIL, TO_EMAIL } =
      process.env;

    if (
      !SMTP_HOST ||
      !SMTP_PORT ||
      !SMTP_USER ||
      !SMTP_PASS ||
      !FROM_EMAIL ||
      !TO_EMAIL
    ) {
      console.error("❌ Missing SMTP environment variables");
      return res.status(500).json({ error: "Server misconfiguration" });
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

    const html = `
      <h2>Новая заявка с сайта</h2>
      <p><strong>ФИО:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Способ связи:</strong> ${escapeHtml(contactMethod)}</p>
      <p><strong>Телефон:</strong> ${escapeHtml(phone)}</p>
      ${
        contactMethod === "telegram"
          ? `<p><strong>Telegram:</strong> ${escapeHtml(telegramHandle)}</p>`
          : ""
      }
      ${email ? `<p><strong>E-mail:</strong> ${escapeHtml(email)}</p>` : ""}
      <hr/>
      <p>Дата: ${new Date().toLocaleString()}</p>
    `;

    await transporter.sendMail({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `Новая заявка: ${fullName}`,
      html,
    });

    console.log(`✅ Email sent successfully from ${FROM_EMAIL} to ${TO_EMAIL}`);
    return res.status(200).json({ message: "Письмо успешно отправлено" });
  } catch (err) {
    console.error("❌ send-email error:", err);
    return res.status(500).json({ error: "Ошибка при отправке письма" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Backend listening on http://localhost:${PORT}`);
});
