import React from 'react';
import styles from './CalendarView.module.css';
import { calendarAppointments, detailedAppointments } from '../../data/appointments';

const daysOfWeek = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
const currentMonthDays = Array.from({ length: 31 }, (_, i) => i + 1); // For October

function CalendarView() {
  const getAppointmentsForDay = (day) => {
    const dayData = calendarAppointments.find(app => app.day === day);
    return dayData ? dayData.times : [];
  };

  return (
    <div className={`${styles.calendarView} card`}>
      <h2 className={styles.calendarHeader}>October 2021</h2>
      <div className={styles.daysOfWeek}>
        {daysOfWeek.map(day => (
          <span key={day} className={styles.dayName}>{day}</span>
        ))}
      </div>
      <div className={styles.monthGrid}>
        {/* Placeholder for leading blank days if month doesn't start on Mon */}
        {Array.from({ length: 4 }, (_, i) => <span key={`blank-${i}`} className={styles.dayCell}></span>)} {/* Adjust based on actual start day */}
        {currentMonthDays.map(day => (
          <div key={day} className={`${styles.dayCell} ${day >= 25 && day <= 31 ? styles.activeMonth : ''}`}>
            <span className={styles.dayNumber}>{day}</span>
            <div className={styles.appointmentTimes}>
              {getAppointmentsForDay(day).map((time, index) => (
                <span key={index} className={styles.timeSlot}>{time}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.detailedAppointments}>
        {detailedAppointments.map((app, index) => (
          <div
            key={index}
            className={styles.detailCard}
            style={{ backgroundColor: app.bgColor, color: app.textColor }}
          >
            <div className={styles.detailIcon}>{app.icon === 'dentist-icon' ? '🦷' : '🏋️'}</div> {/* Placeholder icon */}
            <div className={styles.detailContent}>
              <p className={styles.detailType}>{app.type}</p>
              <p className={styles.detailTime}>{app.time}</p>
              <p className={styles.detailDoctor}>{app.doctor}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarView;