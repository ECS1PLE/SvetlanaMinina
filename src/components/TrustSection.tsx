import { FC } from "react";
import TrustCard from "./TrustCard";

const TrustSection: FC = () => {
  return (
    <section style={{ padding: "48px 16px" }}>
      <div className="container" style={{ maxWidth: 1100 }}>
        <h2
          className="title-strong text-center"
          style={{ fontSize: 24, marginBottom: 12 }}
        >
          Почему можно доверять мне?
        </h2>
        <p className="muted text-center" style={{ marginBottom: 24 }}>
          Более 13 лет опыта в управлении крупными компаниями и консалтинге.
        </p>

        <div className="grid cols-2" style={{ marginTop: 16 }}>
          <TrustCard
            title="Образование и сертификации"
            items={[
              "Сертифицированный коуч ICF",
              "Командный коуч Эриксоновского университета",
              "Куратор Академии карьеры",
              "Профереподготовка по управлению организацией",
            ]}
            variant="warm"
          />
          <TrustCard
            title="Почему я?"
            items={[
              "Практикующий консультант, а не теоретик",
              "Работаю только с уникальными системами",
              "Не предлагаю шаблонных решений",
              "Фокусируюсь на измеримых результатах",
            ]}
            variant="light"
          />
          <TrustCard
            title="Опыт и достижения"
            items={[
              "15+ лет работы в федеральной сети и госсекторе",
              "13+ лет строю и управляю командами",
              "10+ команд создала с нуля",
              "20+ руководителей вырастила с рядовых позиций",
              "5+ масштабных проектов реализовано",
            ]}
            variant="warm"
          />
          <TrustCard
            title="Моя философия"
            items={[
              `"Любые изменения начинаются с желания и готовности двигаться вперёд, но работают только тогда, когда за ними следуют реальные действия."`,
            ]}
            variant="warm"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
