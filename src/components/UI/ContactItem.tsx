import React from "react";

interface ContactItemProps {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

export const ContactItem: React.FC<ContactItemProps> = ({
  icon,
  label,
  value,
  href,
}) => (
  <div className="contact-item">
    <i>{icon}</i>
    <div>
      <strong>{label}</strong>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {value}
        </a>
      ) : (
        <span>{value}</span>
      )}
    </div>
  </div>
);
