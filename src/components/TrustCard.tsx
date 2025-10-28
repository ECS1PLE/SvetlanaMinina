import { FC, CSSProperties } from "react";

interface TrustCardProps {
  title: string;
  items?: string[];
  variant?: "light" | "warm";
  type?: "default" | "philosophy";
  height?: string | number;
  backgroundColor?: string;
}

const normalizeHeight = (h?: string | number) => {
  if (h === undefined || h === null) return undefined;
  if (typeof h === "number") return `${h}px`;
  if (/^\d+$/.test(h)) return `${h}px`;
  return h;
};

const TrustCard: FC<TrustCardProps> = ({
  title,
  items = [],
  variant = "light",
  type = "default",
  height,
  backgroundColor,
}) => {
  const cardClass = variant === "warm" ? "card-orange" : "card-blue";
  const titleColor = variant === "warm" ? "#C2410C" : "#1E3A8A";
  const resolved = normalizeHeight(height);

  const style: CSSProperties = {
    height: resolved,
    minHeight: resolved,
    backgroundColor,
    display: "inline-block",
    width: "100%",
    boxSizing: "border-box",
    marginBottom: 16,
    breakInside: "avoid",
  };

  return (
    <div
      className={`card-base card-hover TrustBlockAdapt p-6 ${cardClass}`}
      style={style}
    >
      <h3
        style={{
          fontWeight: 700,
          marginBottom: 12,
          color: titleColor,
          fontSize: 20.5,
          marginTop: 0,
        }}
      >
        {title}
      </h3>

      {type === "philosophy" ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {items.map((it, idx) => (
            <p
              key={idx}
              className="muted"
              style={{
                fontSize: 15,
                fontWeight: "bold",
                margin: 0,
              }}
            >
              {it}
            </p>
          ))}
        </div>
      ) : (
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
              className="muted"
              style={{
                display: "flex",
                alignItems: "flex-start",
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              <span style={{ marginRight: 8 }}>•</span>
              <span>{it}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TrustCard;
