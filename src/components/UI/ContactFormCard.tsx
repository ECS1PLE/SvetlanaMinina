// components/ContactFormCard.tsx
import React, { FC, useState } from "react";
import InputField from "./InputField";

const ContactFormCard: FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [telegramHandle, setTelegramHandle] = useState("");
  const [requestType, setRequestType] = useState("individual"); // значение селекта
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    // простая фронт-валидация
    if (fullName.trim().length < 2) return setMessage("Введите имя.");
    if (phone.trim().length < 5)
      return setMessage("Введите корректный телефон.");
    if (!agree) return setMessage("Необходимо ваше согласие.");

    setLoading(true);
    try {
      const body = {
        fullName,
        email,
        phone,
        telegramHandle,
        requestType, // <-- отправляем тип запроса
        agree,
      };

      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (!res.ok) {
        setMessage(data?.error || "Ошибка при отправке");
      } else {
        setMessage(data?.message || "Отправлено");
        setFullName("");
        setEmail("");
        setPhone("");
        setTelegramHandle("");
        setRequestType("individual");
        setAgree(false);
      }
    } catch (err) {
      console.error(err);
      setMessage("Сетевая ошибка");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card-base p-6">
      <p className="muted" style={{ marginBottom: 12 }}>
        Оставьте заявку, и я свяжусь с вами в течение 24 часов.
      </p>

      <form className="col" style={{ gap: 12 }} onSubmit={handleSubmit}>
        <InputField
          label="Имя"
          type="text"
          placeholder="Ваше имя"
          value={fullName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFullName(e.target.value)
          }
        />

        <InputField
          label="Email"
          type="email"
          placeholder="Ваш email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />

        <InputField
          label="Телефон"
          type="tel"
          placeholder="+7 (___) ___-__-__"
          value={phone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPhone(e.target.value)
          }
        />

        <div>
          <label
            className="small"
            style={{ display: "block", marginBottom: 6 }}
          >
            Тип запроса
          </label>
          <select
            className="input"
            value={requestType}
            onChange={(e) => setRequestType(e.target.value)}
          >
            <option value="individual">Индивидуальная работа</option>
            <option value="business">Для бизнеса</option>
            <option value="strategy">Стратегическая сессия</option>
            <option value="consultation">Консультация</option>
          </select>
        </div>

        <InputField
          label="Telegram (если нужно)"
          type="text"
          placeholder="@yourhandle"
          value={telegramHandle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTelegramHandle(e.target.value)
          }
        />

        <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <span className="small">Согласен(на) на обработку данных</span>
        </label>

        <button
          type="submit"
          className="btn btn-secondary"
          style={{
            width: "100%",
            height: "48px",
            border: "0",
            justifyContent: "center",
          }}
          disabled={loading}
        >
          {loading ? "Отправка..." : "Отправить заявку →"}
        </button>
      </form>
    </div>
  );
};

export default ContactFormCard;
