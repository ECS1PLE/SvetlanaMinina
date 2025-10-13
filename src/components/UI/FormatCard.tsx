import React from "react";
import BlockWithIcon from "./BlockWithIcon";
import { CircleCheck } from "lucide-react";

interface FormatCardProps {
  icon: string | React.ReactNode;
  title: string;
  items: string[];
  size?: number;
  iconSize?: number;
  iconColor?: string;
  bgColor?: string;
}

export const FormatCard: React.FC<FormatCardProps> = ({
  icon,
  title,
  items,
  size = 64,
  iconSize = 32,
  iconColor,
  bgColor,
}) => (
  <div className="format-card">
    <BlockWithIcon
      icon={icon}
      size={size}
      iconSize={iconSize}
      iconColor={iconColor}
      bgColor={bgColor}
    />
    <h3>{title}</h3>
    <div>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 8,
            marginBottom: 6,
            lineHeight: 1.4,
          }}
        >
          <div
            style={{
              flex: "0 0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 16,
              marginTop: 2.5,
            }}
          >
            <CircleCheck size={16} color="rgb(217 119 6)" />
          </div>
          <span style={{ fontSize: "14px", flex: "1 1 auto" }}>{item}</span>
        </div>
      ))}
    </div>
  </div>
);
