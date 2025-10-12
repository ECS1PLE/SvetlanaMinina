import React, { useEffect, useRef } from "react";

const items = [
  {
    icon: "🎓",
    title: "2 диплома",
    desc: "Бухгалтер, менеджер по туризму",
    tag: "Образование",
  },
  {
    icon: "🏅",
    title: "Профессиональные курсы",
    desc: "Сила продаж, публичные выступления, Мастер управления",
    tag: "Развитие",
  },
  {
    icon: "🏛️",
    title: "Кураторство и клубы",
    desc: 'Куратор на курсе, участие в клубе "Компас лидера"',
    tag: "Непрерывное обучение",
  },
  {
    icon: "📚",
    title: "1–2 книги в месяц",
    desc: "Глубокое погружение в профессиональную литературу",
    tag: "Постоянное чтение",
  },
  {
    icon: "🧠",
    title: "Комплексное развитие",
    desc: "Коучинг, менторинг, терапия с психологом, развитие с наставником",
    tag: "Личностный рост",
  },
  {
    icon: "💼",
    title: "Собственная система",
    desc: "Разработала систему построения и развития команды",
    tag: "Экспертность",
  },
];

export const Path: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const items = ref.current?.querySelectorAll(".timeline-item");
    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="path">
      <h2>Мой путь</h2>
      <div className="path-title">
        <p style={{ textAlign: "center" }}>
          "Мой путь — это пазл, собранный из решений, встреч и уроков. Картина
          ещё не закончена, но её очертания уже радуют."
        </p>
        <p style={{ textAlign: "center" }}>
          Мой принцип: непрерывное развитие через обучение у сильнейших
          специалистов и глубокое погружение в профессиональную литературу.
        </p>
      </div>

      <div className="timeline" ref={ref}>
        {items.map((item, i) => (
          <div
            key={i}
            className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
          >
            <div className="item-content">
              <i>{item.icon}</i>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="tag">{item.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
