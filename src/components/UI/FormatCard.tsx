import React from "react";

interface FormatCardProps {
  icon: string;
  title: string;
  items: string[];
}

export const FormatCard: React.FC<FormatCardProps> = ({
  icon,
  title,
  items,
}) => (
  <div className="format-card">
    <i>{icon}</i>
    <h3>{title}</h3>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);
