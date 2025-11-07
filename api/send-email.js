// pages/api/send-email.js (или соответствующий route.js, если app-router)
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  try {
    const {
      fullName,
      contactMethod,
      phone,
      telegramHandle,
      email,
      agree,
      requestType,
    } = req.body || {};

    if (!fullName || fullName.trim().length < 2)
      return res.status(400).json({ error: "Invalid or missing fullName" });
    if (!phone || phone.trim().length < 5)
      return res.status(400).json({ error: "Invalid or missing phone" });
    if (agree !== true && agree !== "true")
      return res.status(400).json({ error: "Consent required" });

    const requestTypeMap = {
      individual: "Индивидуальная работа",
      business: "Для бизнеса",
      strategy: "Стратегическая сессия",
      consultation: "Консультация",
    };
    const requestTypeLabel = requestTypeMap[requestType] || requestType || "—";

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
      console.error("Missing SMTP environment variables");
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

    const escapeHtml = (unsafe = "") =>
      String(unsafe)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

    const html = `
      <h2>Новая заявка с сайта</h2>
      <p><strong>ФИО:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Телефон:</strong> ${escapeHtml(phone)}</p>
      ${email ? `<p><strong>E-mail:</strong> ${escapeHtml(email)}</p>` : ""}
      ${
        telegramHandle
          ? `<p><strong>Telegram:</strong> ${escapeHtml(telegramHandle)}</p>`
          : ""
      }
      <p><strong>Тип запроса:</strong> ${escapeHtml(requestTypeLabel)}</p>
      <hr/>
      <p>Дата: ${new Date().toLocaleString()}</p>
    `;

    await transporter.sendMail({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `Новая заявка: ${fullName}`,
      html,
    });

    return res.status(200).json({ message: "Письмо успешно отправлено" });
  } catch (err) {
    console.error("send-email error:", err);
    return res.status(500).json({ error: "Ошибка при отправке письма" });
  }
}
