import React from "react";
import { HelpCard } from "./UI/HelpCard";
import UIButton from "./UI/Button";
import {
  LucideShield,
  LucideTarget,
  LucideTrendingUp,
  LucideUsers,
  LucideZap,
} from "lucide-react";

const services = [
  {
    icon: <LucideTarget />,
    title: "Определение карьерного пути",
    desc: "Соответствует вашим ценностям, сильным сторонам и целям",
  },
  {
    icon: <LucideShield />,
    title: "Оценка управленческих компетенций",
    desc: "Понимание сильных сторон и зон развития",
  },
  {
    icon: <LucideUsers />,
    title: "Построение эффективной команды",
    desc: "Каждый знает своё место и вносит вклад в общий результат",
  },
  {
    icon: <LucideTrendingUp />,
    title: "Внедрение управленческих процессов",
    desc: "Меньше тушить пожары, больше продвигать бизнес",
  },
  {
    icon: <LucideZap />,
    title: "Командные коуч-сессии",
    desc: "Снятие напряжения, восстановление доверия, продуктивное сотрудничество",
  },
];

export const Help: React.FC = () => (
  <section id="help">
    <h2>Как я могу вам помочь</h2>
    <p
      style={{
        textAlign: "center",
        maxWidth: 600,
        margin: "0 auto 40px",
        color: "black",
      }}
    >
      Я — практикующий консультант по вопросам карьеры и управления с более чем
      13-летним опытом. Моя роль заключается в том, чтобы помогать людям и
      командам прояснять ситуацию, выстраивать эффективное взаимодействие и
      добиваться измеримых результатов.
    </p>
    <div className="help-container">
      {services.map((s, i) => (
        <HelpCard
          key={i}
          icon={s.icon}
          title={s.title}
          desc={s.desc}
          bgColor="#ea580c"
          iconColor="white"
        />
      ))}
    </div>
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <UIButton>Записаться на консультацию →</UIButton>
    </div>
  </section>
);
