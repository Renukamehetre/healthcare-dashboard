import React from 'react';
import styles from './Header.module.css';
// You might use a library like 'react-icons' or simply SVG imports
// import { FiSearch, FiBell, FiPlus } from 'react-icons/fi';
// import UserAvatar from '../../assets/images/user-avatar.png'; // Placeholder

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Healthcare.</div>
      <div className={styles.searchBar}>
        {/* <FiSearch className={styles.searchIcon} /> */}
        <span className={styles.searchIcon}>🔍</span> {/* Placeholder for icon */}
        <input type="text" placeholder="Search" className={styles.searchInput} />
      </div>
      <div className={styles.userActions}>
        {/* <FiBell className={styles.icon} /> */}
        <span className={styles.icon}>🔔</span> {/* Placeholder for icon */}
        <div className={styles.userProfile}>
          <img src="https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png" alt="User Avatar" className={styles.userAvatar} /> {/* Placeholder */}
          <span className={styles.userName}>John Doe</span>
        </div>
        {/* <FiPlus className={styles.addIcon} /> */}
        <span className={styles.addIcon}>➕</span> {/* Placeholder for icon */}
      </div>
    </header>
  );
}

export default Header;