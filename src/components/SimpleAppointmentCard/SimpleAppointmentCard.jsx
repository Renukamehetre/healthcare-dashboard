import React from 'react';
import styles from './SimpleAppointmentCard.module.css';

// Placeholder for icons
const getSimpleApptIcon = (iconName) => {
  switch (iconName) {
    case 'health-check-icon': return '✅';
    case 'eye-icon': return '👁️';
    case 'heart-icon': return '❤️';
    case 'brain-icon': return '🧠';
    default: return '?';
  }
};

function SimpleAppointmentCard({ appointment }) {
  return (
    <div className={styles.appointmentCard} style={{ backgroundColor: appointment.color }}>
      <span className={styles.icon}>{getSimpleApptIcon(appointment.icon)}</span>
      <div className={styles.details}>
        <p className={styles.title}>{appointment.title}</p>
        <p className={styles.time}>{appointment.time}</p>
      </div>
    </div>
  );
}

export default SimpleAppointmentCard;