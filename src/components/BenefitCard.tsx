import { FC, ReactNode } from "react";

interface BenefitCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  variant?: "light" | "warm";
}

const BenefitCard: FC<BenefitCardProps> = ({
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
    <div className={`card-base card-hover rounded-lg p-5 ${cardClass}`}>
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

export default BenefitCard;
