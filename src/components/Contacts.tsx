import React from 'react';

export const Contacts: React.FC = () => (
  <section id="contacts">
    <h2>Связаться со мной</h2>
    <p style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 32px', color: '#607d8b' }}>
      Готова обсудить вашу задачу и предложить решение
    </p>
    <div className="contact-container">
      <div className="contact-info">
        <div className="contact-item"><i>📞</i><div><strong>Телефон</strong><span>+7 (911) 891-97-37</span></div></div>
        <div className="contact-item"><i>✉️</i><div><strong>Email</strong><span>solnce2085@mail.ru</span></div></div>
        <div className="contact-item"><i>💬</i><div><strong>Telegram</strong><span>https://t.me/Minina_CV</span></div></div>
        <div className="contact-item"><i>📢</i><div><strong>Telegram канал</strong><span>https://t.me/Minina_SV</span></div></div>
      </div>
      <div className="contact-form">
        <p>Оставьте заявку, и я свяжусь с вами в течение 24 часов для обсуждения вашей задачи и возможных форматов сотрудничества.</p>
        <a href="#consultation" className="btn">Записаться на консультацию →</a>
        <div className="small">Или напишите напрямую в Telegram</div>
      </div>
    </div>
  </section>
)
