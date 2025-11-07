import { FC, ReactNode } from "react";

interface CTAButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
}

const CTAButton: FC<CTAButtonProps> = ({
  children,
  href,
  variant = "primary",
  className = "",
}) => {
  const cls = variant === "primary" ? "btn btn-primary" : "btn btn-secondary";
  return (
    <a
      href={href}
      className={`${cls} ${className}`}
      style={{ textDecoration: "none" }}
    >
      <span>{children}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: 16, width: 16 }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </a>
  );
};

export default CTAButton;
