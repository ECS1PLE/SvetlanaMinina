import React from "react";
import UIButton from "./UI/Button";

export const Hero: React.FC = () => (
  <section className="hero">
    <h1>
      Системное управление для <span>руководителей</span>
    </h1>
    <p>
      Практикующий консультант по вопросам карьеры и управления с 13+ летним
      опытом. Помогаю руководителям и собственникам бизнеса выстраивать
      эффективные системы управления.
    </p>
    <UIButton href="https://t.me/Minina_CV">
      Записаться на консультацию →
    </UIButton>
  </section>
);
