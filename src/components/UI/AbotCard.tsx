import React from "react";

interface AboutCardProps {
  icon?: string;
  title: string;
  text?: string;
  list?: string[];
  quote?: string;
  className?: string;
  subtitle?: string;
}

export const AboutCard: React.FC<AboutCardProps> = ({
  icon,
  title,
  text,
  list,
  quote,
  className,
  subtitle,
}) => (
  <div className={className}>
    {icon && <i>{icon}</i>}
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
