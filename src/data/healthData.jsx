// For AnatomySection
export const anatomicalIndicators = [
  { id: 'heart', label: 'Healthy Heart', status: 'healthy', position: { top: '38%', left: '50%' } }, // Adjust positions based on image
  { id: 'leg', label: 'Healthy Leg', status: 'healthy', position: { top: '80%', left: '40%' } },
];

// For HealthStatusCards
export const healthStatusCardsData = [
  {
    id: 'lungs',
    title: 'Lungs',
    date: '28 Oct 2021',
    status: 'issue', // 'healthy' or 'issue' or other relevant status
    description: 'Inflammation detected',
    icon: 'lungs-icon',
  },
  {
    id: 'teeth',
    title: 'Teeth',
    date: '26 Oct 2021',
    status: 'healthy',
    description: 'No issues',
    icon: 'teeth-icon',
  },
  {
    id: 'bone',
    title: 'Bone',
    date: '26 Oct 2021',
    status: 'healthy',
    description: 'Strong and healthy',
    icon: 'bone-icon',
  },
];