import { FC, ReactNode } from "react";

interface ProblemCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  variant?: "light" | "warm";
}

const ProblemCard: FC<ProblemCardProps> = ({
  icon,
  title,
  description,
  variant = "light",
}) => {
  const cardClass = variant === "warm" ? "card-orange" : "card-blue";
  const iconBg =
    variant === "warm"
      ? { background: "#FFEDD5", color: "#EA580C" }
      : { background: "#DBEAFE", color: "#2563EB" };

  return (
    <div className={`card-base card-hover p-5 rounded-lg ${cardClass}`}>
      <div className="icon-box small" style={{ ...iconBg, marginBottom: 12 }}>
        {icon}
      </div>
      <h3 className="title-strong" style={{ marginBottom: 8 }}>
        {title}
      </h3>
      <p className="muted small">{description}</p>
    </div>
  );
};

export default ProblemCard;
