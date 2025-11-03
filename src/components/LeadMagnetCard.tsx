import { Lightbulb } from "lucide-react";
import { FC, useState } from "react";

const LeadMagnetCard: FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const res = await fetch("/api/send-guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const contentType = res.headers.get("content-type") || "";
      let data: any = null;

      if (contentType.includes("application/json")) {
        // если JSON — парсим
        data = await res.json();
      } else {
        // если не JSON — читаем как текст (полезно для отладки)
        const text = await res.text();
        // логим полный текст ответа в консоль для разработки
        console.warn(
          "Non-JSON response from /api/send-guide:",
          res.status,
          text
        );
        // пробрасываем как ошибку, чтобы показать пользователю
        throw new Error(text || `Unexpected response status ${res.status}`);
      }

      if (!res.ok) {
        // сервер вернул JSON с ошибкой
        throw new Error(data.error || JSON.stringify(data));
      }

      setSuccess(true);
      setEmail("");
    } catch (err: any) {
      console.error("send-guide client error:", err);
      setError(err.message || "Ошибка при отправке");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="card-base card-hover rounded-lg p-6"
      style={{
        marginTop: 24,
        background: "linear-gradient(135deg,#FFFBEA, #FFF7ED)",
        border: "1px solid #FED7AA",
      }}
    >
      <div style={{ display: "flex", gap: 16 }}>
        <div
          style={{
            background: "rgb(217 119 6)",
            padding: 8,
            borderRadius: 8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "48px",
            height: "48px",
            marginTop: "10px",
          }}
        >
          <Lightbulb style={{ color: "white" }} />
        </div>

        <div style={{ flex: 1 }}>
          <h3 className="title-strong" style={{ marginBottom: 8 }}>
            «5 вопросов, после которых вы перестанете быть главным исполнителем»
          </h3>
          <p className="muted" style={{ marginBottom: 8 }}>
            Вы устали «тушить пожары» вместо того, чтобы развивать бизнес? Этот
            гайд поможет...
          </p>
          <p className="muted" style={{ fontWeight: 600, marginBottom: 8 }}>
            В подарок вы получите:
          </p>
          <ul className="muted" style={{ marginBottom: 12, paddingLeft: 16 }}>
            <li>Чек-лист «Готов ли ваш сотрудник к делегированию?»</li>
            <li>Cкрипт первой сессии с командой без микроменеджмента</li>
          </ul>

          {/* форма */}
          <form
            onSubmit={handleSubmit}
            className="LeadManagedFormAdapt"
            style={{ display: "flex", gap: 8, flexWrap: "wrap" }}
          >
            <input
              className="input"
              type="email"
              placeholder="Ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ flex: 1, minWidth: 220 }}
            />
            <button
              type="submit"
              className="btn btn-secondary"
              style={{ border: 0 }}
              disabled={loading}
            >
              {loading ? "Отправляем..." : "Получить гайд"}
            </button>
          </form>

          {success && (
            <p style={{ color: "green", marginTop: 8 }}>
              ✅ Гайд отправлен! Проверьте почту (и папку Спам)
            </p>
          )}
          {error && <p style={{ color: "red", marginTop: 8 }}>⚠️ {error}</p>}
        </div>
      </div>
    </div>
  );
};

export default LeadMagnetCard;
