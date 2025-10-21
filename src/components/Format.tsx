import React from "react";
import { FormatCard } from "./UI/FormatCard";
import { LucideClock, LucideLaptop, LucideNotebook } from "lucide-react";

export const Format: React.FC = () => (
  <section id="format">
    <h2>Формат работы</h2>
    <div className="format-container">
      <FormatCard
        icon=<LucideClock />
        title="Формат сессий"
        bgColor="#ea580c"
        iconColor="white"
        size={64}
        iconSize={32}
        items={[
          "Онлайн/офлайн",
          "Длительность: 60-90 минут",
          "Единичные или пакетные сессии по запросу",
        ]}
      >
        <img src="/src/images/certificate1.jpg" className="certificate-class" />
      </FormatCard>
      <FormatCard
        icon=<LucideNotebook />
        title="Пример пакетной сессии"
        bgColor="#ea580c"
        iconColor="white"
        size={64}
        iconSize={32}
        items={[
          "Диагностика (Точка А)",
          "Дорожная карта достижения цели",
          "Внедрение и сопровождение",
        ]}
      >
        <img
          src="/src/images/certificate2.jpg"
          className="certificate-class"
          style={{ marginTop: "20px" }}
        />
      </FormatCard>
      <FormatCard
        icon=<LucideLaptop />
        title="Результат для клиента"
        bgColor="#ea580c"
        iconColor="white"
        size={64}
        iconSize={32}
        items={[
          "Осознание текущей ситуации (Точка А)",
          "Четкое видение желаемого (Точка Б)",
          "План действий и траектория развития",
          "Первые результаты уже в процессе",
          "Обретение внутренней мотивации",
        ]}
      />
    </div>
  </section>
);
