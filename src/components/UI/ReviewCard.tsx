import React from "react";

interface ReviewCardProps {
  text: string;
  author: string;
  position: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  text,
  author,
  position,
}) => (
  <div className="review-card">
    <p style={{ fontStyle: "italic", color: "#607d8b" }}>{`"${text}"`}</p>
    <div className="author">{author}</div>
    <div className="position" style={{ color: "var(--primary)" }}>
      {position}
    </div>
  </div>
);
