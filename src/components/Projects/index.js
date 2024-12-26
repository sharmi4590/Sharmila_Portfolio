import React, { useState } from 'react';
import styled from 'styled-components';
import { projects } from '../../data/constants';
import { FaGithub } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: ${({ theme }) => theme.text_primary};
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: center;
  margin: 20px 0;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProjectImageLink = styled.a`
  width: 50%;
  max-width: 500px;
  margin: 20px;

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border: 1.8px solid ${({ theme }) => theme.primary};
`;

const ProjectDescription = styled.div`
  width: 50%;
  padding: 20px;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const TechList = styled.div`
  margin: 10px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TechItem = styled.div`
  background-color: #6751b9;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
`;

const Description = styled.p`
  white-space: pre-line;
`;

const Button = styled.a`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color:#6751b9;
  color: white;
  border: none;
  border-radius: 5px;
  margin: 20px 0;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background-color:rgb(36, 28, 65);
  }
`;

const ShowMoreButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #6751b9;
  color: white;
  border: none;
  border-radius: 5px;
  margin: 20px 0;
  align-self: center; /* Center the button */
`;
const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.text_primary};
`;

const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const visibleProjects = showMore ? projects : projects.slice(0, 3);

  return (
    <Container id="projects">
        <Title>My Projects</Title>
      {visibleProjects.map((project, index) => (
        <ProjectWrapper key={project.id} reverse={index % 2 !== 0}>
          <ProjectImageLink href={project.github} target="_blank" rel="noopener noreferrer">
            <ProjectImage src={project.image} alt={project.title} />
          </ProjectImageLink>
          <ProjectDescription>
            <ProjectTitle>
              {project.title}
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
            </ProjectTitle>
            <TechList>
              {project.tags.map((tag) => (
                <TechItem key={tag}>{tag}</TechItem>
              ))}
            </TechList>
            <Description>{project.description}</Description>
            <Button href={project.webapp} target="_blank" rel="noopener noreferrer">
              View Website
            </Button>
          </ProjectDescription>
        </ProjectWrapper>
      ))}
      <ShowMoreButton onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Show Less' : 'Show More'}
      </ShowMoreButton>
    </Container>
  );
};

export default Projects;
