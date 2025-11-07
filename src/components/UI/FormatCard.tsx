import {
  FC,
  ReactNode,
  CSSProperties,
  cloneElement,
  isValidElement,
} from "react";

interface FormatCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  variant?: "light" | "warm";
  iconStyle?: CSSProperties;
  iconBoxStyle?: CSSProperties;
  iconColor?: string;
}

const FormatCard: FC<FormatCardProps> = ({
  icon,
  title,
  description,
  variant = "light",
  iconStyle,
  iconBoxStyle,
  iconColor = "white",
}) => {
  const cardClass = variant === "warm" ? "card-orange" : "card-white";
  const defaultIconBg =
    variant === "warm"
      ? { background: "#FFEDD5", color: "#EA580C" }
      : { background: "#DBEAFE", color: "#2563EB" };

  const mergedIconBoxStyle: CSSProperties = {
    ...defaultIconBg,
    width: 48,
    height: 48,
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    ...iconBoxStyle,
  };

  const bg = (mergedIconBoxStyle as any).background;
  if (typeof bg === "string" && bg.trim().startsWith("linear-gradient")) {
    (mergedIconBoxStyle as any).backgroundImage = bg;
    delete (mergedIconBoxStyle as any).background;
  }

  const mergedIconStyle: CSSProperties = {
    ...(iconStyle || {}),
    ...(iconColor ? { color: iconColor } : {}),
  };

  const renderedIcon = isValidElement(icon)
    ? cloneElement(icon, {
        style: { ...(icon.props as any)?.style, ...mergedIconStyle },
      })
    : icon;

  return (
    <div
      className={`column card-base card-hover p-5 rounded-lg ${cardClass} center`}
      style={{ textAlign: "center" }}
    >
      <div className="icon-box small" style={mergedIconBoxStyle}>
        {renderedIcon}
      </div>
      <h3 className="title-strong" style={{ marginBottom: 8 }}>
        {title}
      </h3>
      <p className="xs muted">{description}</p>
    </div>
  );
};

export default FormatCard;
