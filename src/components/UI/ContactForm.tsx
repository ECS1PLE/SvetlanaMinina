import { FC } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleLeftIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import ContactMethodsCard from "../ContactMethodCards";
import ContactFormCard from "./ContactFormCard";
import LeadMagnetCard from "./LeadMagnetCard";

const ContactSection: FC = () => {
  const methods = [
    {
      icon: PhoneIcon,
      label: "Телефон",
      value: "+7 (911) 891-97-37",
      href: "+7 (911) 891-97-37",
    },
    {
      icon: EnvelopeIcon,
      label: "Email",
      value: "solnce2085@mail.ru",
      href: "solnce2085@mail.ru",
    },
    {
      icon: ChatBubbleLeftIcon,
      label: "Telegram",
      value: "@Minina_CV",
      href: "https://t.me/Minina_CV",
    },
    {
      icon: SparklesIcon,
      label: "Telegram канал",
      value: "Управленческий иммунитет ⚡",
      href: "https://t.me/Minina_SV",
    },
  ];

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
          <ContactMethodsCard methods={methods} />
          <ContactFormCard />
        </div>

        <LeadMagnetCard />
      </div>
    </section>
  );
};

export default ContactSection;
