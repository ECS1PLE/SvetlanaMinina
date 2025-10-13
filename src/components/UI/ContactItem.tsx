import React from "react";
import BlockWithIcon from "./BlockWithIcon";

interface ContactItemProps {
  icon: React.ReactNode;
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
  <div className="contact-item" style={{ display: "flex", gap: "8px" }}>
    <BlockWithIcon icon={icon} />
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p
        style={{
          color: "rgb(31 41 55 / var(--tw-text-opacity, 1))",
          fontWeight: 600,
        }}
      >
        {label}
      </p>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: "176px",
            color: "rgb(75 85 99)",
            textDecoration: "none",
          }}
        >
          {value}
        </a>
      ) : (
        <span style={{ color: "rgb(75 85 99)" }}>{value}</span>
      )}
    </div>
  </div>
);
