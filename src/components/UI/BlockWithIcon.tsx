import React from "react";

interface IconProps {
  icon: React.ReactNode;
  className?: string;
  bgColor?: string;
  iconColor?: string;
  size?: number;
  iconSize?: number;
}

const BlockWithIcon: React.FC<IconProps> = ({
  icon,
  className,
  bgColor = "rgb(254 243 199)",
  iconColor = "rgb(180 83 9 / var(--tw-text-opacity, 1))",
  size = 48,
  iconSize = 24,
}) => {
  return (
    <div
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "0.5rem",
        backgroundColor: bgColor,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: iconColor,
      }}
    >
      {React.isValidElement(icon) ? (
        React.cloneElement(icon, { size: iconSize })
      ) : (
        <span style={{ fontSize: iconSize }}>{icon}</span>
      )}
    </div>
  );
};

export default BlockWithIcon;
