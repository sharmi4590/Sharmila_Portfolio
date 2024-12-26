import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
color: ${({ theme }) => theme.text_primary};
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
  transition: height 0.3s ease;
color: ${({ theme }) => theme.text_primary};
  @media (max-width: 500px) {
    display: none;
  }
`;

const MobileText = styled.p`
  display: none;
  font-size: 1rem;
color: ${({ theme }) => theme.text_primary};
  @media (max-width: 500px) {
    display: block;
  }
`;

const AboutContent = () => {
  return (
    <Container>
      <Title>About Me</Title>
      <Text>
      I am a self-motivated and passionate programmer with a knack for problem-solving and web development. As a final year Computer Science student at Vignan's Institute of Information Technology (VIIT), I have honed my skills in modern web technologies through hands-on experience and innovative projects. I thrive on continuous learning and innovation, always seeking opportunities that foster growth and make the most of my abilities. With a strong foundation in full-stack development and a proven track record in open-source contributions, I am eager to apply my expertise to create impactful and dynamic web applications.      </Text>
      <MobileText>
      I am a self-motivated and passionate programmer with practical knowledge in programming. As an ambitious Full Stack Developer and final year student at Vignan's Institute of Information Technology (VIIT), I thrive on continuous learning and innovation. I enjoy problem-solving and developing web pages, always seeking to enhance my skills and contribute to impactful projects.
      </MobileText>
    </Container>
  );
};

export default AboutContent;
