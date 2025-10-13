interface Icon {
  icon: React.ReactNode;
}

const BlockWithIcon: React.FC<Icon> = ({ icon }) => {
  return (
    <div
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
