import { FC } from "react";
import { UserIcon } from "@heroicons/react/24/outline";

const profileImage = new URL("../../images/minina_1.jpg", import.meta.url).href;

const AboutMeCard: FC = () => {
  return (
    <div
      className="card-base card-hover bg-gradient-yellow rounded-lg p-6"
      style={{ maxWidth: 420, margin: "48px auto 0" }}
    >
      <div className="col items-center text-center">
        <img
          src={profileImage}
          alt="Светлана Минина"
          className="rounded-full mb-3 shadow-md"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* <UserIcon
          style={{ height: 48, width: 48, color: "#F97316", marginBottom: 12 }}
        />
        <p style={{ color: "#EA580C", fontWeight: 600 }}>Светлана Минина</p> */}
      </div>
    </div>
  );
};

export default AboutMeCard;
