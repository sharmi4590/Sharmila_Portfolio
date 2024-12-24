import React, { useState } from 'react';
import './AboutSection.css';
import AboutContent from './AboutContent';
import EducationContent from './EducationContent';

const AboutSection = () => {
  const [selectedOption, setSelectedOption] = useState('about');

  const renderContent = () => {
    switch (selectedOption) {
      case 'about':
        return <AboutContent />;
      case 'education':
        return <EducationContent />;
      default:
        return <AboutContent />;
    }
  };

  return (
    <section className="about-section">
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
        </div>
        <div className="about-details">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
