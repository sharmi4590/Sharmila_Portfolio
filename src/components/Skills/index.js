import React, { useState } from 'react';
import './Skills.css';
import { skills } from '../../data/constants';
import SkillCard from './SkillCard/SkillCard';
import SkillInfoCard from './SkillInfoCard/SkillInfoCard';

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(skills[0]);
  const handleSelectSkill = (skill) => {
    setSelectedSkill(skill);
  }
  return (
    <section className="skills-container" id="skills">
      <h1>Skills</h1>
      <h5>Here are some of my skills on which I have been working</h5>
      <div className="skills-content">
        <div className="skills">
          {skills.map((item)=>(
            <SkillCard
            key={item.title}
            iconUrl={item.icon}
            title={item.title}
            isActive={selectedSkill.title === item.title}
            onClick={()=>handleSelectSkill(item)}
            />
          ))}
        </div>
        <div className="skills-info">
          <SkillInfoCard
          heading={selectedSkill.title}
          skills={selectedSkill.skills}/>
        </div>
      </div>
    </section>
  )
}

export default Skills