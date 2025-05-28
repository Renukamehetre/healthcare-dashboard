import React from 'react';
import styles from './Sidebar.module.css';
import { navigationLinks } from '../../data/navigation';
// Placeholder for icon components (e.g., from react-icons or your own SVGs)
// import { RxDashboard, RxHistory, RxCalendar, RxStethoscope, RxChart, RxVial, RxChat, RxQuestionMarkCircled, RxGear } from 'react-icons/rx';

// Function to get icon component (you'd map string to actual icon component)
const getIconComponent = (iconName) => {
  switch (iconName) {
    case 'dashboard': return <span className={styles.iconPlaceholder}>📊</span>;
    case 'history': return <span className={styles.iconPlaceholder}>🕒</span>;
    case 'calendar': return <span className={styles.iconPlaceholder}>🗓️</span>;
    case 'appointments': return <span className={styles.iconPlaceholder}>🩺</span>;
    case 'statistics': return <span className={styles.iconPlaceholder}>📈</span>;
    case 'tests': return <span className={styles.iconPlaceholder}>🧪</span>;
    case 'chat': return <span className={styles.iconPlaceholder}>💬</span>;
    case 'support': return <span className={styles.iconPlaceholder}>❓</span>;
    case 'setting': return <span className={styles.iconPlaceholder}>⚙️</span>;
    default: return <span className={styles.iconPlaceholder}>?</span>;
  }
};

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.navigation}>
        <div className={styles.sectionTitle}>General</div>
        <ul className={styles.navList}>
          {navigationLinks.slice(0, 5).map((link) => (
            <li key={link.name} className={link.active ? styles.active : ''}>
              <a href="#" className={styles.navLink}>
                {getIconComponent(link.icon)}
                <span>{link.name}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.sectionTitle}>Tools</div>
        <ul className={styles.navList}>
          {navigationLinks.slice(5).map((link) => (
            <li key={link.name}>
              <a href="#" className={styles.navLink}>
                {getIconComponent(link.icon)}
                <span>{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;