import React from "react";
import BlockWithIcon from "./UI/BlockWithIcon";
import { Target } from "lucide-react";

export const Footer: React.FC = () => (
  <footer>
    <div
      className="logo"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        marginBottom: 12,
      }}
    >
      <BlockWithIcon
        icon={<Target size={16} />}
        size={32}
        iconSize={16}
        bgColor="rgb(255 255 255 / 0.2)"
        iconColor="white"
      />
      <span>Светлана Минина</span>
    </div>
    <p>
      Эксперт по системному управлению для руководителей и собственников бизнеса
    </p>
    <p>© 2024 Светлана Минина. Все права защищены.</p>
  </footer>
);
