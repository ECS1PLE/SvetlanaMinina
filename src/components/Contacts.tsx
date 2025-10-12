import React from "react";
import { ContactItem } from "./UI/ContactItem";
import UIButton from "./UI/Button";

export const Contacts: React.FC = () => (
  <section id="contacts">
    <h2>Связаться со мной</h2>
    <p
      style={{
        textAlign: "center",
        maxWidth: 600,
        margin: "0 auto 32px",
        color: "#607d8b",
      }}
    >
      Готова обсудить вашу задачу и предложить решение
    </p>
    <div className="contact-container">
      <div className="contact-info">
        <ContactItem
          icon="📞"
          label="Телефон"
          value="+7 (911) 891-97-37"
          href="tel:+79118919737"
        />
        <ContactItem
          icon="✉️"
          label="Email"
          value="solnce2085@mail.ru"
          href="mailto:solnce2085@mail.ru"
        />
        <ContactItem
          icon="💬"
          label="Telegram"
          value="https://t.me/Minina_CV"
          href="https://t.me/Minina_CV"
        />
        <ContactItem
          icon="📢"
          label="Telegram канал"
          value="https://t.me/Minina_SV"
          href="https://t.me/Minina_SV"
        />
      </div>
      <div className="contact-form">
        <p>
          Оставьте заявку, и я свяжусь с вами в течение 24 часов для обсуждения
          вашей задачи и возможных форматов сотрудничества.
        </p>
        <UIButton href="https://t.me/Minina_CV">
          Записаться на консультацию →
        </UIButton>
        <div className="small">Или напишите напрямую в Telegram</div>
      </div>
    </div>
  </section>
);
