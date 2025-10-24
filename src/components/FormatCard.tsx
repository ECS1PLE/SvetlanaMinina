import { FC, ReactNode } from "react";

interface FormatCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  variant?: "light" | "warm";
}

const FormatCard: FC<FormatCardProps> = ({
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
    <div
      className={`column card-base card-hover p-5 rounded-lg ${cardClass} center`}
      style={{ textAlign: "center" }}
    >
      <div className="icon-box small" style={{ ...iconBg, marginBottom: 12 }}>
        {icon}
      </div>
      <h3 className="title-strong" style={{ marginBottom: 8 }}>
        {title}
      </h3>
      <p className="xs muted">{description}</p>
    </div>
  );
};

export default FormatCard;
