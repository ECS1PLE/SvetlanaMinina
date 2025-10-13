import React from "react";
import BlockWithIcon from "./BlockWithIcon";

interface HelpCardProps {
  icon: string | React.ReactNode;
  title: string;
  desc: string;
  bgColor?: string;
  iconColor?: string;
}

export const HelpCard: React.FC<HelpCardProps> = ({
  icon,
  title,
  desc,
  bgColor,
  iconColor,
}) => (
  <div className="help-card">
    <BlockWithIcon
      icon={icon}
      bgColor={bgColor}
      iconColor={iconColor}
      size={48}
    />
    <div className="help-card-content">
      <h3>{title}</h3>
      <p style={{ maxWidth: 300 }}>{desc}</p>
    </div>
  </div>
);
