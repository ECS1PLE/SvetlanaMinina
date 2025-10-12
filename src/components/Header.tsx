import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <div
          style={{
            backgroundColor: "#e66d00",
            width: "30px",
            height: "30px",
            borderRadius: "3px",
            display: "flex",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-target w-6 h-6 text-white"
            aria-hidden="true"
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              marginLeft: "auto",
              marginRight: "auto",
              color: "white",
            }}
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
            <a href="#about">Обо мне</a>
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
    </header>
  );
};
