import React, { useState } from 'react';
import Resume from './Resume';
import WorkInformation from './WorkInformation';
import PrivateInformation from './PrivateInformation';
import HRSettings from './HRSettings';
import '../styles/styles.css';

const MainPage = () => {
  const [activeTab, setActiveTab] = useState('resume');

  const renderTab = () => {
    switch (activeTab) {
      case 'resume':
        return <Resume />;
      case 'work-information':
        return <WorkInformation />;
      case 'private-information':
        return <PrivateInformation />;
      case 'hr-settings':
        return <HRSettings />;
      default:
        return <Resume />;
    }
  };

  return (
    <div className="main-page">
      <h1>Employee's Name</h1>
      <h2>Job Position</h2>
      <div className="employee-details">
        <div className="left-column">
          <p>Work Mobile</p>
          <p>Work Phone</p>
          <p>Work Email</p>
        </div>
        <div className="right-column">
          <p>Department</p>
          <p>Job Position</p>
          <p>Manager</p>
          <p>Coach</p>
        </div>
        <div className="profile-picture">
          <img src="https://via.placeholder.com/100" alt="Profile" />
        </div>
      </div>
      <nav className="tabs">
        <button onClick={() => setActiveTab('resume')}>Resume</button>
        <button onClick={() => setActiveTab('work-information')}>Work Information</button>
        <button onClick={() => setActiveTab('private-information')}>Private Information</button>
        <button onClick={() => setActiveTab('hr-settings')}>HR Settings</button>
      </nav>
      <div className="tab-content">{renderTab()}</div>
    </div>
  );
};

export default MainPage;
