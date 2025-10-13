import React from "react";
import { ContactItem } from "./UI/ContactItem";
import UIButton from "./UI/Button";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { Target } from "lucide-react";

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
          icon={<Phone />}
          label="Телефон"
          value="+7 (911) 891-97-37"
          href="tel:+79118919737"
        />
        <ContactItem
          icon={<Mail />}
          label="Email"
          value="solnce2085@mail.ru"
          href="mailto:solnce2085@mail.ru"
        />
        <ContactItem
          icon={<MessageSquare />}
          label="Telegram"
          value="https://t.me/Minina_CV"
          href="https://t.me/Minina_CV"
        />
        <ContactItem
          icon={<Target />}
          label="Telegram канал"
          value="https://t.me/Minina_SV"
          href="https://t.me/Minina_SV"
        />
      </div>
      <div
        className="contact-form"
        style={{ display: "flex", flexDirection: "column", gap: "14px" }}
      >
        <p style={{ fontSize: "15px" }}>
          Оставьте заявку, и я свяжусь с вами в течение 24 часов для обсуждения
          вашей задачи и возможных форматов сотрудничества.
        </p>
        <UIButton
          href="https://t.me/Minina_CV"
          style={{
            width: "100% !important",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Записаться на консультацию →
        </UIButton>
        <div
          className="small"
          style={{ textAlign: "center", fontSize: "14px" }}
        >
          Или напишите напрямую в Telegram
        </div>
      </div>
    </div>
  </section>
);
