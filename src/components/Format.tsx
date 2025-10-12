import React from 'react';

export const Format: React.FC = () => (
  <section id="format">
    <h2>Формат работы</h2>
    <div className="format-container">
      <div className="format-card">
        <i>⏱️</i>
        <h3>Формат сессий</h3>
        <ul>
          <li>Онлайн/офлайн</li>
          <li>Длительность: 60-90 минут</li>
          <li>Единичные или пакетные сессии по запросу</li>
        </ul>
      </div>
      <div className="format-card">
        <i>📋</i>
        <h3>Пример пакетной сессии</h3>
        <ul>
          <li>Диагностика (Точка А)</li>
          <li>Дорожная карта достижения цели</li>
          <li>Внедрение и сопровождение</li>
        </ul>
      </div>
      <div className="format-card">
        <i>💻</i>
        <h3>Результат для клиента</h3>
        <ul>
          <li>Осознание текущей ситуации (Точка А)</li>
          <li>Четкое видение желаемого (Точка Б)</li>
          <li>План действий и траектория развития</li>
          <li>Первые результаты уже в процессе</li>
          <li>Обретение внутренней мотивации</li>
        </ul>
      </div>
    </div>
  </section>
)
