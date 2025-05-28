import React from 'react';
import styles from './DashboardMainContent.module.css';
import DashboardOverview from '../DashboardOverview/DashboardOverview';
import CalendarView from '../CalendarView/CalendarView';
import UpcomingSchedule from '../UpcomingSchedule/UpcomingSchedule';
import ActivityFeed from '../ActivityFeed/ActivityFeed';

function DashboardMainContent() {
  return (
    <main className={styles.dashboardMainContent}>
      <div className={styles.dashboardHeader}>
        <h1 className={styles.dashboardTitle}>Dashboard</h1>
        <div className={styles.timeFilter}>
          This Week <span className={styles.arrowDown}>▼</span> {/* Placeholder for dropdown arrow */}
        </div>
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.gridLeftColumn}>
          <DashboardOverview />
          <ActivityFeed />
        </div>
        <div className={styles.gridRightColumn}>
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </main>
  );
}

export default DashboardMainContent;