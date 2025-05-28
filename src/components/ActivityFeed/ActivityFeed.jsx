import React from 'react';
import styles from './ActivityFeed.module.css';

function ActivityFeed() {
  // Static representation of bars for the chart
  const activityBars = [
    { day: 'Mon', height: '60%' },
    { day: 'Tues', height: '40%' },
    { day: 'Wed', height: '80%' },
    { day: 'Thurs', height: '50%' },
    { day: 'Fri', height: '70%' },
    { day: 'Sat', height: '30%' },
    { day: 'Sun', height: '90%' },
  ];

  return (
    <div className={`${styles.activityFeed} card`}>
      <div className={styles.header}>
        <h2 className={styles.title}>Activity</h2>
        <span className={styles.appointmentsCount}>3 appointments on this week</span>
      </div>
      <div className={styles.chartContainer}>
        {activityBars.map((bar, index) => (
          <div key={index} className={styles.barWrapper}>
            <div className={styles.bar} style={{ height: bar.height }}></div>
            <span className={styles.barDay}>{bar.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;