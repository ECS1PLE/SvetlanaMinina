import { FC } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

interface ReviewCardProps {
  rating: number;
  text: string;
  name: string;
  position: string;
}

const ReviewCard: FC<ReviewCardProps> = ({ rating, text, name, position }) => {
  return (
    <div
      className="card-base card-hover p-6"
      style={{
        background: "linear-gradient(135deg,#FFFBEA,#FFF7ED)",
        border: "1px solid #FED7AA",
      }}
    >
      <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            style={{
              width: 20,
              height: 20,
              color: i < rating ? "#FBBF24" : "#E5E7EB",
            }}
          />
        ))}
      </div>
      <p className="muted" style={{ fontStyle: "italic", marginBottom: 12 }}>
        "{text}"
      </p>
      <div>
        <p className="title-strong">{name}</p>
        <p style={{ color: "#EA580C", fontSize: 13 }}>{position}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
