import React, { useEffect, useRef } from "react";
import {
  Award,
  Compass,
  GraduationCap,
  Users,
  BookOpen,
  Trophy,
} from "lucide-react";
import BlockWithIcon from "./UI/BlockWithIcon";
import "../../src/path.css";

interface PathItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
  tag: string;
}

const items: PathItem[] = [
  {
    icon: <Award />,
    title: "2 диплома",
    desc: "Бухгалтер, менеджер по туризму",
    tag: "Образование",
  },
  {
    icon: <Compass />,
    title: "Профессиональные курсы",
    desc: "Сила продаж, публичные выступления, Мастер управления",
    tag: "Развитие",
  },
  {
    icon: <GraduationCap />,
    title: "Кураторство и клубы",
    desc: 'Куратор на курсе, участие в клубе "Компас лидера"',
    tag: "Непрерывное обучение",
  },
  {
    icon: <Users />,
    title: "1–2 книги в месяц",
    desc: "Глубокое погружение в профессиональную литературу",
    tag: "Постоянное чтение",
  },
  {
    icon: <BookOpen />,
    title: "Комплексное развитие",
    desc: "Коучинг, менторинг, терапия с психологом, развитие с наставником",
    tag: "Личностный рост",
  },
  {
    icon: <Trophy />,
    title: "Собственная система",
    desc: "Разработала систему построения и развития команды",
    tag: "Экспертность",
  },
];

export const Path: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const elements = container.querySelectorAll<HTMLElement>(".timeline-item");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.intersectionRatio >= 0.5) {
            el.classList.add("visible");
          } else {
            el.classList.remove("visible");
          }
        });
      },
      { threshold: [0, 0.5, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="path" className="path-section">
      <h2 className="section-title">Мой путь</h2>

      <div className="path-title">
        <p className="lead">
          "Мой путь — это пазл, собранный из решений, встреч и уроков. Картина
          ещё не закончена, но её очертания уже радуют."
        </p>
        <p className="lead">
          Мой принцип: непрерывное развитие через обучение у сильнейших
          специалистов и глубокое погружение в профессиональную литературу.
        </p>
      </div>

      <div className="timeline" ref={ref}>
        {items.map((item, i) => (
          <div
            key={i}
            className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
            style={{ ["--i" as any]: i } as React.CSSProperties}
          >
            <div className="item-content">
              <BlockWithIcon
                bgColor="#ea580c"
                iconColor="white"
                icon={item.icon}
                className={`${i % 2 === 0 ? "margin-left-auto" : "right"}`}
              />
              <div className="text-block">
                <h3 className="item-title">{item.title}</h3>
                <p className="item-desc">{item.desc}</p>
                <span className="tag">{item.tag}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Path;
