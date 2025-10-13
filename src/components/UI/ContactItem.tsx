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
  <div className="contact-item">
    <BlockWithIcon icon={icon} />
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p
        style={{
          color: "color: rgb(31 41 55 / var(--tw-text-opacity, 1))",
          fontWeight: "600",
        }}
      >
        {label}
      </p>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: "176px" }}
        >
          {value}
        </a>
      ) : (
        <span>{value}</span>
      )}
    </div>
  </div>
);
