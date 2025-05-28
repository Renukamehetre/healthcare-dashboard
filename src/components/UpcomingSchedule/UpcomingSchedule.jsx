import React from 'react';
import styles from './UpcomingSchedule.module.css';
import SimpleAppointmentCard from '../SimpleAppointmentCard/SimpleAppointmentCard';
import { upcomingSchedule } from '../../data/appointments';

function UpcomingSchedule() {
  return (
    <div className={`${styles.upcomingSchedule} card`}>
      <h2 className={styles.title}>The Upcoming Schedule</h2>
      {upcomingSchedule.map((dayData) => (
        <div key={dayData.day} className={styles.daySection}>
          <h3 className={styles.dayHeader}>On {dayData.day}</h3>
          <div className={styles.appointmentsList}>
            {dayData.appointments.map((appointment, index) => (
              <SimpleAppointmentCard key={index} appointment={appointment} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingSchedule;