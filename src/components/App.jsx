import React from 'react';
import Header from './Header/Header.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';
import DashboardMainContent from './DashboardMainContent/DashboardMainContent';
import '../styles/App.css'; // Global App layout styles

function App() {
  return (
    <div className='appContainer'>
      <Sidebar />
      <div className='mainContentWrapper'>
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;