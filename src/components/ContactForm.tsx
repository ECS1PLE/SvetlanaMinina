import { FC } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleLeftIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const ContactForm: FC = () => {
  return (
    <section
      className="hero"
      id="contact-section"
      style={{ paddingTop: 48, paddingBottom: 48 }}
    >
      <div className="container">
        <h2
          className="text-center title-strong"
          style={{ fontSize: 24, marginBottom: 8 }}
        >
          Связаться со мной
        </h2>
        <p className="text-center muted" style={{ marginBottom: 24 }}>
          Готова обсудить вашу задачу и предложить решение
        </p>

        <div className="grid cols-2">
          <div className="card-base p-6">
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                {
                  icon: PhoneIcon,
                  label: "Телефон",
                  value: "+7 (911) 891-97-37",
                },
                {
                  icon: EnvelopeIcon,
                  label: "Email",
                  value: "solnce2085@mail.ru",
                },
                {
                  icon: ChatBubbleLeftIcon,
                  label: "Telegram",
                  value: "@Minina_CV",
                },
                {
                  icon: SparklesIcon,
                  label: "Telegram канал",
                  value: "Управленческий иммунитет ⚡",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      gap: 12,
                      alignItems: "flex-start",
                    }}
                  >
                    <Icon
                      style={{
                        height: 24,
                        width: 24,
                        color: "#F97316",
                        marginTop: 4,
                      }}
                    />
                    <div>
                      <p style={{ fontWeight: 600 }}>{item.label}</p>
                      <p className="muted">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="card-base p-6">
            <p className="muted" style={{ marginBottom: 12 }}>
              Оставьте заявку, и я свяжусь с вами в течение 24 часов.
            </p>
            <form className="col" style={{ gap: 12 }}>
              {[
                { label: "Имя", type: "text", placeholder: "Ваше имя" },
                { label: "Email", type: "email", placeholder: "Ваш email" },
                {
                  label: "Телефон",
                  type: "tel",
                  placeholder: "+7 (___) ___-__-__",
                },
              ].map((field, idx) => (
                <div key={idx}>
                  <label
                    className="small"
                    style={{ display: "block", marginBottom: 6 }}
                  >
                    {field.label}
                  </label>
                  <input
                    className="input"
                    type={field.type}
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div>
                <label
                  className="small"
                  style={{ display: "block", marginBottom: 6 }}
                >
                  Тип запроса
                </label>
                <select className="input">
                  <option>Индивидуальная работа</option>
                  <option>Для бизнеса</option>
                  <option>Стратегическая сессия</option>
                  <option>Консультация</option>
                </select>
              </div>

              <button
                type="submit"
                className="btn btn-secondary"
                style={{ width: "100%" }}
              >
                Отправить заявку →
              </button>
            </form>
          </div>
        </div>

        <div
          className="card-base card-hover rounded-lg p-6"
          style={{
            marginTop: 24,
            background: "linear-gradient(135deg,#FFFBEA, #FFF7ED)",
            border: "1px solid #FED7AA",
          }}
        >
          <div style={{ display: "flex", gap: 16 }}>
            <div style={{ background: "#FFEDD5", padding: 8, borderRadius: 8 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: 24, width: 24, color: "#EA580C" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.664-.707.707M21 12h-1M4 12H3m3.343 5.657-.707-.707m2.828-2.828.707.707m4.242-4.242a9 9 0 1112.728 0l-.708.708a9 9 0 01-12.728 0z"
                />
              </svg>
            </div>

            <div>
              <h3 className="title-strong" style={{ marginBottom: 8 }}>
                «5 вопросов, после которых вы перестанете быть главным
                исполнителем»
              </h3>
              <p className="muted" style={{ marginBottom: 8 }}>
                Вы устали «тушить пожары» вместо того, чтобы развивать бизнес?
                Этот гид поможет...
              </p>
              <p className="muted" style={{ fontWeight: 600, marginBottom: 8 }}>
                В подарок вы получите:
              </p>

              <ul className="muted" style={{ marginBottom: 12 }}>
                <li>• Чек-лист «Готов ли ваш сотрудник к делегированию?»</li>
                <li>
                  • Аудиозапись «Как провести первую сессию с командой без
                  микроменеджмента»
                </li>
              </ul>

              <div style={{ display: "flex", gap: 8 }}>
                <input className="input" placeholder="Ваш email" />
                <button className="btn btn-secondary">Получить гид</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
