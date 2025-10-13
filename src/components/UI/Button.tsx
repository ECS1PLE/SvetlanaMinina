interface Button {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const UIButton: React.FC<Button> = ({ children, href, style }) => {
  return (
    <a href={href} className="btn" style={style}>
      {children}
    </a>
  );
};

export default UIButton;
