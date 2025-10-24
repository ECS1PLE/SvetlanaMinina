import { FC } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  variant?: "default" | "blue" | "orange";
}

const SectionTitle: FC<SectionTitleProps> = ({
  title,
  subtitle,
  variant = "default",
}) => {
  const bg =
    variant === "blue"
      ? "#DBEAFE"
      : variant === "orange"
      ? "#FFEDD5"
      : "#F3F4F6";
  const color =
    variant === "blue"
      ? "#1E3A8A"
      : variant === "orange"
      ? "#C2410C"
      : "#374151";

  return (
    <div className="text-center" style={{ marginBottom: 32 }}>
      {subtitle && (
        <span
          style={{
            display: "inline-block",
            padding: "6px 12px",
            borderRadius: 999,
            background: bg,
            color: color,
            fontSize: 13,
            marginBottom: 12,
          }}
        >
          {subtitle}
        </span>
      )}
      <h2
        style={{
          fontSize: 24,
          fontWeight: 700,
          color: "#111827",
          marginBottom: 12,
        }}
      >
        {title}
      </h2>
      <div style={{ height: 6 }} />
    </div>
  );
};

export default SectionTitle;
