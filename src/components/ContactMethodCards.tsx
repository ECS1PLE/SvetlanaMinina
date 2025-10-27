import { FC } from "react";
import ContactMethodItem from "./ContactMethodItem";

interface Method {
  icon: any;
  label: string;
  value: string;
  href: string;
}

const ContactMethodsCard: FC<{ methods: Method[] }> = ({ methods }) => (
  <div className="card-base p-6">
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {methods.map((m, i) => (
        <ContactMethodItem key={i} method={m} />
      ))}
    </div>
  </div>
);

export default ContactMethodsCard;
