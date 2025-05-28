import React from 'react';
import styles from './HealthStatusCards.module.css';
import { healthStatusCardsData } from '../../data/healthData';

// Placeholder for icons
const getHealthIcon = (iconName) => {
  switch (iconName) {
    case 'lungs-icon': return <span className={styles.cardIcon}>🫁</span>;
    case 'teeth-icon': return <span className={styles.cardIcon}>🦷</span>;
    case 'bone-icon': return <span className={styles.cardIcon}>🦴</span>;
    default: return <span className={styles.cardIcon}>?</span>;
  }
};

function HealthStatusCards() {
  return (
    <div className={styles.healthStatusCards}>
      {healthStatusCardsData.map((card) => (
        <div key={card.id} className={`${styles.statusCard} card`}>
          <div className={styles.cardHeader}>
            {getHealthIcon(card.icon)}
            <h3 className={styles.cardTitle}>{card.title}</h3>
          </div>
          <p className={styles.cardDate}>Date: {card.date}</p>
          <div className={`${styles.cardStatus} ${styles[card.status]}`}>
            {card.status === 'healthy' ? 'Healthy' : 'Issue'}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;