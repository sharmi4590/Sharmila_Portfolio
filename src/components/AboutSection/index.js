import React, { useState } from 'react';
import './AboutSection.css';
import AboutContent from './AboutContent';
import EducationContent from './EducationContent';
import RoleOfResponsibilitiesContent from './RoleOfResponsibilities';
import AchievementsContent from './Achievements';

const AboutSection = () => {
  const [selectedOption, setSelectedOption] = useState('about');

  const renderContent = () => {
    switch (selectedOption) {
      case 'about':
        return <AboutContent />;
      case 'education':
        return <EducationContent />;
      case 'responsibilities':
        return <RoleOfResponsibilitiesContent />;
      case 'achievements':
        return <AchievementsContent />;
      default:
        return <AboutContent />;
    }
  };

  return (
    <section className="about-section" id="about">
      <h1>About Me</h1>
      <h5>Get to know me</h5>
      <div className="about-content">
        <div className="about-options">
          <button
            className={`option-button ${selectedOption === 'about' ? 'active' : ''}`}
            onClick={() => setSelectedOption('about')}
          >
            About Me
          </button>
          <button
            className={`option-button ${selectedOption === 'education' ? 'active' : ''}`}
            onClick={() => setSelectedOption('education')}
          >
            Education
          </button>
          <button
            className={`option-button ${selectedOption === 'responsibilities' ? 'active' : ''}`}
            onClick={() => setSelectedOption('responsibilities')}
          >
            Role of Responsibilities
          </button>
          <button
            className={`option-button ${selectedOption === 'achievements' ? 'active' : ''}`}
            onClick={() => setSelectedOption('achievements')}
          >
            Achievements
          </button>
        </div>
        <div className="about-details">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
