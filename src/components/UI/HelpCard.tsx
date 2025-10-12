import React from "react";

interface HelpCardProps {
  icon: string;
  title: string;
  desc: string;
}

export const HelpCard: React.FC<HelpCardProps> = ({ icon, title, desc }) => (
  <div className="help-card">
    <i>{icon}</i>
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
);
