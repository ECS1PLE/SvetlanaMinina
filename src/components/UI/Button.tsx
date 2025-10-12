interface Button {
  href: string;
  children: React.ReactNode;
}

const UIButton: React.FC<Button> = ({ children, href }) => {
  return (
    <a href={href} className="btn">
      {children}
    </a>
  );
};

export default UIButton;
