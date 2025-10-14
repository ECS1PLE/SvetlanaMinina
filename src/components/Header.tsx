// Header.tsx
import React, { useEffect, useRef, useState } from "react";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      // optional: trap focus (simple)
      if (e.key === "Tab" && open) {
        // keep focus inside menu: if shift+tab from first link, move to close button etc.
        // For complex focus-trap use a small library; here is a minimal attempt omitted for brevity.
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // when opening, focus first nav link for keyboard users
  useEffect(() => {
    if (open && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, [open]);

  return (
    <header className="header">
      <div className="logo">
        <div
          style={{
            backgroundColor: "var(--primary)",
            width: "30px",
            height: "30px",
            borderRadius: "3px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            style={{ color: "#fff" }}
          >
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="6"></circle>
            <circle cx="12" cy="12" r="2"></circle>
          </svg>
        </div>
        <span>Светлана Минина</span>
      </div>

      <nav>
        <ul>
          <li>
            <a href="#about" ref={firstLinkRef}>
              Обо мне
            </a>
          </li>
          <li>
            <a href="#path">Мой путь</a>
          </li>
          <li>
            <a href="#help">Как я помогаю</a>
          </li>
          <li>
            <a href="#format">Формат работы</a>
          </li>
          <li>
            <a href="#reviews">Отзывы</a>
          </li>
          <li>
            <a href="#contacts">Контакты</a>
          </li>
        </ul>
      </nav>

      {/* hamburger button */}
      <button
        className="burger-btn"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        onClick={() => setOpen((s) => !s)}
      >
        <span className={`burger ${open ? "open" : ""}`} />
      </button>

      {/* mobile menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="mobile-backdrop" onClick={() => setOpen(false)} />
        <div className="mobile-panel" aria-hidden={!open}>
          <div className="mobile-panel__top">
            <div className="logo" style={{ gap: 10 }}>
              <div
                style={{
                  backgroundColor: "var(--primary)",
                  width: "28px",
                  height: "28px",
                  borderRadius: "3px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ color: "#fff" }}
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <span>Светлана Минина</span>
            </div>

            <button
              className="burger-close"
              onClick={() => setOpen(false)}
              aria-label="Закрыть меню"
            >
              ✕
            </button>
          </div>

          <nav className="mobile-nav">
            <ul>
              <li>
                <a href="#about" onClick={() => setOpen(false)}>
                  Обо мне
                </a>
              </li>
              <li>
                <a href="#path" onClick={() => setOpen(false)}>
                  Мой путь
                </a>
              </li>
              <li>
                <a href="#help" onClick={() => setOpen(false)}>
                  Как я помогаю
                </a>
              </li>
              <li>
                <a href="#format" onClick={() => setOpen(false)}>
                  Формат работы
                </a>
              </li>
              <li>
                <a href="#reviews" onClick={() => setOpen(false)}>
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#contacts" onClick={() => setOpen(false)}>
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
