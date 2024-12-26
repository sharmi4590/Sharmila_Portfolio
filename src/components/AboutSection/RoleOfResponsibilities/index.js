// RoleOfResponsibilitiesContent.js
import React from 'react';
import { roles } from '../../../data/constants'; // Adjust the path if needed
import styled from 'styled-components';
const About = styled.div`
   color: ${({ theme }) => theme.text_primary};
    background: ${({ theme }) => theme.body};
    `
const RoleOfResponsibilitiesContent = () => {
  return (
    <About><div className="role-of-responsibilities">
      <h3>Role of Responsibilities</h3>
      <div className="role-cards">
        {roles.map((role, index) => (
          <div key={index} className="role-card">
            <h4>{role.title} - <span>{role.organization}</span> ({role.dates})</h4>
            <ul>
              {role.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div></About>
  );
};

export default RoleOfResponsibilitiesContent;
