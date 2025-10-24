import { FC } from "react";
import { UserIcon } from "@heroicons/react/24/outline";

const AboutMeCard: FC = () => {
  return (
    <div
      className="card-base card-hover bg-gradient-yellow rounded-lg p-6"
      style={{ maxWidth: 420, margin: "48px auto 0" }}
    >
      <div className="col items-center">
        <UserIcon
          style={{ height: 48, width: 48, color: "#F97316", marginBottom: 12 }}
        />
        <p style={{ color: "#EA580C", fontWeight: 600 }}>Светлана Минина</p>
      </div>
    </div>
  );
};

export default AboutMeCard;
