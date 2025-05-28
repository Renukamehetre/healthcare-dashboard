// DashboardSidebar.js
import React from 'react';
import styles from './DashboardLayout.module.css';

function DashboardSidebar({ isOpen, onClose }) {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <button className={styles.closeBtn} onClick={onClose}>×</button>
      <ul>
        <li>Overview</li>
        <li>Schedule</li>
        <li>Settings</li>
      </ul>
    </div>
  );
}

export default DashboardSidebar;
