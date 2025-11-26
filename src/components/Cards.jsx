import React from 'react';
import "./Cards.css";

export const Cards = () => {
  const cardsData = [
    {
      id: 1,
      label: 'Total Items',
      value: '124',
      color: 'blue',
      icon: '📦'
    },
    {
      id: 2,
      label: 'Categories',
      value: '15',
      color: 'pink',
      icon: '💳'
    },
    {
      id: 3,
      label: 'Blank stats',
      value: '000',
      color: 'purple',
      icon: '📊'
    }
  ];

  return (
    <div className="cards-container">
      {cardsData.map((card) => (
        <div key={card.id} className={`card card-${card.color}`}>
          {/* shapes fo designz */}
          <div className="shape shape-circle"></div>
          <div className="shape shape-square"></div>
          <div className="shape shape-triangle"></div>

          {/* Card content */}
          <div className="card-content">
            <div className="card-header">
              <span className="card-icon">{card.icon}</span>
              <span className="card-label">{card.label}</span>
            </div>
            <div className="card-value">{card.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

