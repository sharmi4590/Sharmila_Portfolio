
import React, { useState } from 'react';
import { Link as LinkR } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import { DiCssdeck } from 'react-icons/di';
import { FaBars, FaTimes } from 'react-icons/fa'; 

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  width:80%;
  padding: 0 6px;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  @media screen and (max-width: 640px) {  
  padding: 0 0px;}
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1050px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavItems = styled.ul`
  display: flex;
  justify-content:center;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 80%;
  height: 100%;
  padding: 0 6px;
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  height: 70%;
  :hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
  @media screen and (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

const Span = styled.span`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 42px 40px 24px 40px; 
  background: ${({ theme }) => theme.card_light + '99'};
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  border-radius: 0 0 20px 20px;
  opacity: ${({ open }) => (open ? 1 : 0)};
  z-index: ${({ open }) => (open ? 1 : -1)};
`;

const MobileMenuLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const CloseButton = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.text_primary};
  cursor: pointer;
  align-self: flex-end;
  margin-bottom: 16px;
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavContainer>
        <NavLogo to='/'>
          <a style={{ display: 'flex', alignItems: 'center', marginBottom: '20', cursor: 'pointer' }}>
            <DiCssdeck size='3rem' /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon onClick={() => setOpen(!open)}>
          <FaBars />
        </MobileIcon>
        <NavItems>
          <NavLink href="#home">Home</NavLink>
          <NavLink href='#about'>About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#coding-profiles'>CodingProfiles</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton href="https://github.com">GitHub Profile</GithubButton>
        </ButtonContainer>

        {open && (
          <MobileMenu open={open}>
            <CloseButton onClick={() => setOpen(false)}>
              <FaTimes />
            </CloseButton>
            <MobileMenuLink href="#home" onClick={() => setOpen(false)}>Home</MobileMenuLink>
            <MobileMenuLink href="#about" onClick={() => setOpen(false)}>About</MobileMenuLink>
            <MobileMenuLink href='#skills' onClick={() => setOpen(false)}>Skills</MobileMenuLink>
            <MobileMenuLink href='#experience' onClick={() => setOpen(false)}>Experience</MobileMenuLink>
            <MobileMenuLink href='#projects' onClick={() => setOpen(false)}>Projects</MobileMenuLink>
            <MobileMenuLink href='#coding-profiles' onClick={() => setOpen(false)}>CodingProfiles</MobileMenuLink>
            <MobileMenuLink href='#contact' onClick={() => setOpen(false)}>Contact</MobileMenuLink>
            <GithubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href="/" target="_blank">Github Profile</GithubButton>
          </MobileMenu>
        )}
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
