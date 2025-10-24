import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { name: "Главная", href: "#home" },
    { name: "Для руководителей", href: "#leaders" },
    { name: "Для бизнеса", href: "#business" },
    { name: "Мои кейсы", href: "#cases" },
    { name: "Обо мне", href: "#about" },
    { name: "Контакты", href: "#contact" },
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">
          <div
            style={{
              width: 32,
              height: 32,
              background: "#F97316",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ height: 14, width: 14, color: "#fff" }}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm9 4a1 1 0 11-2 0 1 1 0 012 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span style={{ fontWeight: 700 }}>Светлана Минина</span>
        </div>

        <nav className="nav">
          {navItems.map((item) => (
            <a key={item.name} href={item.href}>
              {item.name}
            </a>
          ))}
        </nav>

        <button
          className="mobile-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: 20, width: 20 }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div
          style={{ background: "#fff", borderTop: "1px solid var(--border)" }}
        >
          <div
            className="container"
            style={{
              padding: "12px 0",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                style={{ color: "var(--muted)" }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
