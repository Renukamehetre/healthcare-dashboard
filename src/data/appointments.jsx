// For CalendarView
export const calendarAppointments = [
  { day: 25, times: ['10:00'] },
  { day: 26, times: ['09:00'] },
  { day: 27, times: [] },
  { day: 28, times: ['11:00'] },
  { day: 29, times: [] },
  { day: 30, times: ['12:00'] },
  { day: 31, times: ['09:00'] },
  // ... continue for other days if needed
];

export const detailedAppointments = [
  {
    type: 'Dentist',
    time: '09:00-11:00',
    doctor: 'Dr. Cameron Williamson',
    icon: 'dentist-icon',
    bgColor: '#e0f2f7', // Light blue background
    textColor: '#2a677a',
  },
  {
    type: 'Physiotherapy Appointment',
    time: '11:00-12:00',
    doctor: 'Dr. Kevin Djones',
    icon: 'physio-icon',
    bgColor: '#e8e0f7', // Light purple background
    textColor: '#5a2a7a',
  },
];

// For UpcomingSchedule
export const upcomingSchedule = [
  {
    day: 'Thursday',
    date: '28 Oct',
    appointments: [
      {
        title: 'Health checkup complete',
        time: '11:00 AM',
        icon: 'health-check-icon',
        color: '#f0f7e0', // Light green
      },
      {
        title: 'Ophthalmologist',
        time: '02:00 PM',
        icon: 'eye-icon',
        color: '#e0f2f7', // Light blue
      },
    ],
  },
  {
    day: 'Saturday',
    date: '30 Oct',
    appointments: [
      {
        title: 'Cardiologist',
        time: '12:00 AM', // This is likely 12:00 PM based on common usage
        icon: 'heart-icon',
        color: '#f7e0e0', // Light red
      },
      {
        title: 'Neurologist',
        time: '04:00 PM',
        icon: 'brain-icon',
        color: '#e0f2f7', // Light blue
      },
    ],
  },
];