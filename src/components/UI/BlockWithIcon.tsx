import React from "react";

interface IconProps {
  icon: React.ReactNode;
  className?: string;
}

const BlockWithIcon: React.FC<IconProps> = ({ icon, className }) => {
  return (
    <div
      className={className}
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "0.5rem",
        backgroundColor: "rgb(254 243 199)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "rgb(180 83 9 / var(--tw-text-opacity, 1))",
      }}
    >
      {icon}
    </div>
  );
};

export default BlockWithIcon;
