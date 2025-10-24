import { FC } from "react";

interface TrustCardProps {
  title: string;
  items?: string[];
  variant?: "light" | "warm";
}

const TrustCard: FC<TrustCardProps> = ({
  title,
  items = [],
  variant = "light",
}) => {
  const cardClass = variant === "warm" ? "card-orange" : "card-blue";
  const titleColor = variant === "warm" ? "#C2410C" : "#1E3A8A";

  return (
    <div className={`card-base card-hover p-6 ${cardClass}`}>
      <h3 style={{ fontWeight: 700, marginBottom: 12, color: titleColor }}>
        {title}
      </h3>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        {items.map((it, idx) => (
          <li
            key={idx}
            className="muted small"
            style={{ display: "flex", alignItems: "flex-start" }}
          >
            <span style={{ marginRight: 8 }}>•</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrustCard;
