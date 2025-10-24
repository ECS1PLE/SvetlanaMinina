import { FC, ReactNode } from "react";

interface CaseCardProps {
  icon: ReactNode;
  client: string;
  result: string;
  challenge: string;
  solution: string;
  variant?: "light" | "warm";
}

const CaseCard: FC<CaseCardProps> = ({
  icon,
  client,
  result,
  challenge,
  solution,
  variant = "light",
}) => {
  const cardClass = variant === "warm" ? "card-orange" : "card-blue";
  const iconBg =
    variant === "warm"
      ? { background: "#FFEDD5", color: "#EA580C" }
      : { background: "#DBEAFE", color: "#2563EB" };

  return (
    <div className={`card-base card-hover p-6 rounded-lg ${cardClass}`}>
      <div
        style={{ display: "flex", alignItems: "flex-start", marginBottom: 16 }}
      >
        <div className="icon-box medium" style={{ ...iconBg, marginRight: 16 }}>
          {icon}
        </div>
        <div>
          <h3 className="title-strong">{client}</h3>
          <p style={{ color: "#2563EB", fontWeight: 600 }}>{result}</p>
        </div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <h4 className="small" style={{ fontWeight: 600, marginBottom: 6 }}>
          Вызов:
        </h4>
        <p className="xs muted">{challenge}</p>
      </div>

      <div>
        <h4 className="small" style={{ fontWeight: 600, marginBottom: 6 }}>
          Решение:
        </h4>
        <p className="xs muted">{solution}</p>
      </div>
    </div>
  );
};

export default CaseCard;
