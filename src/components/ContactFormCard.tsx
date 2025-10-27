import { FC } from "react";
import InputField from "./InputField";

const ContactFormCard: FC = () => (
  <div className="card-base p-6">
    <p className="muted" style={{ marginBottom: 12 }}>
      Оставьте заявку, и я свяжусь с вами в течение 24 часов.
    </p>
    <form className="col" style={{ gap: 12 }}>
      <InputField label="Имя" type="text" placeholder="Ваше имя" />
      <InputField label="Email" type="email" placeholder="Ваш email" />
      <InputField label="Телефон" type="tel" placeholder="+7 (___) ___-__-__" />
      <div>
        <label className="small" style={{ display: "block", marginBottom: 6 }}>
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
        style={{
          width: "100%",
          height: "48px",
          border: "0",
          justifyContent: "center",
        }}
      >
        Отправить заявку →
      </button>
    </form>
  </div>
);

export default ContactFormCard;
