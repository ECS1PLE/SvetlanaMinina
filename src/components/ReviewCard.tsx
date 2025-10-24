import { FC } from "react";

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
          <svg
            key={i}
            viewBox="0 0 20 20"
            style={{
              height: 20,
              width: 20,
              color: i < rating ? "#FBBF24" : "#E5E7EB",
            }}
            fill="currentColor"
          >
            <path d="M9.049 2.917c1.927-.306 3.864.166 5.282 1.215l-1.214 1.214a4 4 0 00-5.356-5.356l-1.214 1.214a4 4 0 001.214 5.356A4 4 0 0010 12.586V14a3 3 0 005.356 2.586M15 17h6v2a1 1 0 001 1H4a1 1 0 001-1v-2h6m1-13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" />
          </svg>
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
