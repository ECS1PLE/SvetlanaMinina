import { FC } from "react";
import IconBlock from "./IconBlock";

interface Method {
  icon: any;
  label: string;
  value: string;
  href: string;
}

const ContactMethodItem: FC<{ method: Method }> = ({ method }) => {
  const Icon = method.icon;

  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
      <IconBlock>
        <Icon style={{ height: 24, width: 24, color: "rgb(180 83 9)" }} />
      </IconBlock>
      <div className="FormContacs">
        <p style={{ fontWeight: 600, margin: 0 }}>{method.label}</p>
        <a
          href={method.href}
          target="_blank"
          rel="noopener noreferrer"
          className="muted"
          style={{
            margin: 0,
            color: "rgb(75 85 99)",
            textDecoration: "none",
          }}
        >
          {method.value}
        </a>
      </div>
    </div>
  );
};

export default ContactMethodItem;
