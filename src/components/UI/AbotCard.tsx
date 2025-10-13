import React from "react";

interface AboutCardProps {
  icon?: React.ReactNode | string;
  title: string;
  text?: string;
  list?: string[];
  quote?: string;
  className?: string;
  subtitle?: string;
  style?: React.CSSProperties;
}

export const AboutCard: React.FC<AboutCardProps> = ({
  icon,
  title,
  text,
  list,
  quote,
  className,
  subtitle,
  style,
}) => (
  <div className={className}>
    {icon && <div style={style}>{icon}</div>}
    <h3>{title}</h3>
    <h3>{subtitle}</h3>
    {text && <p>{text}</p>}
    {list && (
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    )}
    {quote && <div className="quote">“{quote}”</div>}
  </div>
);
