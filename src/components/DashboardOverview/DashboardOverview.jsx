import React from 'react';
import styles from './DashboardOverview.module.css';
import AnatomySection from '../AnatomySection/AnatomySection';
import HealthStatusCards from '../HealthStatusCards/HealthStatusCards';

function DashboardOverview() {
  return (
    <div className={`${styles.dashboardOverview} card`}>
      <div className={styles.anatomyAndStatus}>
        <AnatomySection />
        <HealthStatusCards />
      </div>
    </div>
  );
}

export default DashboardOverview;