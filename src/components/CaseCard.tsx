import { FC, ReactNode } from "react";

interface CaseCardProps {
  icon: ReactNode;
  client: string;
  result: { highlight: string; subtext?: string };
  challenge: string;
  solution: string;
  variant?: "light" | "warm";
  highlightColor?: string; // новый проп
}

const CaseCard: FC<CaseCardProps> = ({
  icon,
  client,
  result,
  challenge,
  solution,
  variant = "light",
  highlightColor = "#2563EB", // по умолчанию синий
}) => {
  const cardClass = variant === "warm" ? "card-orange" : "card-blue";
  const iconBg =
    variant === "warm"
      ? { background: "#FFEDD5", color: "#EA580C" }
      : { background: "#DBEAFE", color: "#2563EB" };

  return (
    <div className={`card-base card-hover p-6 rounded-lg ${cardClass}`}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          marginBottom: 16,
          flexDirection: "column",
        }}
      >
        <div className="icon-box medium" style={{ ...iconBg, marginRight: 16 }}>
          {icon}
        </div>
        <div style={{ marginBottom: 16 }}>
          <h3 className="title-strong">{client}</h3>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 4 }}>
            <p
              style={{
                color: highlightColor, // цвет теперь настраиваемый
                fontWeight: 600,
                margin: 0,
                fontSize: 24,
                lineHeight: 0.5,
              }}
            >
              {result.highlight}
            </p>
            {result.subtext && (
              <p
                style={{
                  color: "#000",
                  margin: 0,
                  fontSize: 12,
                  lineHeight: 1,
                }}
              >
                {result.subtext}
              </p>
            )}
          </div>
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
