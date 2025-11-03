import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import handler from "./send-email.js";
import sendGuideHandler from "./send-guide.js";

dotenv.config();

const app = express();

if (process.env.ENABLE_CORS !== "false") {
  app.use(cors());
}

app.use(express.json());

app.post("/api/send-email", async (req, res) => {
  try {
    await handler(req, res);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Ошибка сервера" });
  }
});

app.post("/api/send-guide", async (req, res) => {
  try {
    await sendGuideHandler(req, res);
  } catch (err) {
    console.error("Error in /api/send-guide:", err);
    res.status(500).json({ error: "Ошибка сервера" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(
    `✅ Сервер запущен на http://localhost:${PORT} — endpoints: POST /api/send-email, POST /api/send-guide`
  );
});
