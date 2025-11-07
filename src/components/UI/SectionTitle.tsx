import { FC } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  subtitleVariant?: "warm" | "blue";
}

const SectionTitle: FC<SectionTitleProps> = ({
  title,
  subtitle,
  subtitleVariant,
}) => {
  const bg =
    subtitleVariant === "blue" ? "rgb(219 234 254)" : "rgb(254 243 199)";
  const color =
    subtitleVariant === "blue" ? "rgb(30 64 175)" : "rgb(146 64 14)";

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
            fontSize: 16,
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
