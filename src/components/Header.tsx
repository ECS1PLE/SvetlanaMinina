import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <div><span>🎯</span></div>
        <span>Светлана Минина</span>
      </div>
      <nav>
        <ul>
          <li><a href="#about">Обо мне</a></li>
          <li><a href="#path">Мой путь</a></li>
          <li><a href="#help">Как я помогаю</a></li>
          <li><a href="#format">Формат работы</a></li>
          <li><a href="#reviews">Отзывы</a></li>
          <li><a href="#contacts">Контакты</a></li>
        </ul>
      </nav>
    </header>
  )
}
