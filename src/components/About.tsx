import React from "react";
import { AboutCard } from "./UI/AbotCard";
import { User } from "lucide-react";

const minina = new URL("../images/minina_1.jpg", import.meta.url).href;

export const About: React.FC = () => (
  <section id="about">
    <h2>Обо мне</h2>

    <div className="about-container">
      <div className="about-photo">
        <img src={minina} alt="Светлана Минина" />
      </div>

      <div className="about-content">
        <AboutCard
          icon={<User size={48} />}
          style={{ marginRight: "auto", color: "rgb(180 83 9)" }}
          title="Здравствуйте!"
          subtitle="Я — Светлана Минина"
          text="Эксперт с 13-летним опытом управления в сфере HR и продаж."
          className="about-card"
        />

        <AboutCard
          title="Мой опыт:"
          list={[
            "15+ лет работы в федеральной сети и госсекторе",
            "Прошла путь от специалиста до ТОП-менеджера",
            "13+ лет строю и управляю командами",
            "10+ команд создала с нуля",
            "20+ руководителей вырастила с рядовых позиций",
            "5+ масштабных проектов (запуск филиала, трансформация сети, создание кластера)",
          ]}
          className="about-text"
        />

        <AboutCard
          title="Мои компетенции:"
          list={[
            "Стратегический руководитель",
            "Сертифицированный коуч ICF",
            "Командный коуч Эриксоновского университета",
            "Куратор Академии карьеры",
          ]}
          quote="Приверженец того, что любые изменения начинаются с желания и готовности двигаться вперёд, но работают только тогда, когда за ними следуют реальные действия."
          className="about-text"
        />
      </div>
    </div>
  </section>
);
