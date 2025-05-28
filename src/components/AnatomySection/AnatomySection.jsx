import React from 'react';
import styles from './AnatomySection.module.css';
import { anatomicalIndicators } from '../../data/healthData';
import anatomyImage from '../../assets/images/anatomy.png';

function AnatomySection() {
  return (
    <div className={styles.anatomySection}>
      <img src={anatomyImage} alt="Human Anatomy" className={styles.anatomyImage} />

      {anatomicalIndicators.map((indicator) => (
        <div
          key={indicator.id}
          className={`${styles.indicator} ${styles[indicator.status]}`}
          style={{ top: indicator.position.top, left: indicator.position.left }}
        >
          {indicator.label}
        </div>
      ))}
    </div>
  );
}

export default AnatomySection;