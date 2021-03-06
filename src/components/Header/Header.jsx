import './header.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import mainLogo from '../../images/logo.svg';
import github from '../../images/github-24.svg';
import linkedin from '../../images/Linkedin.svg';
import figma from '../../images/Figma.svg';
import { LinkContainer } from 'react-router-bootstrap';

export const Header = () => { 
  return (
    <div>
      <Navbar expand='lg'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand className='d-flex align-items-center align-content-center gap-2 navbrand1'>
              <div>
                <img src={mainLogo} alt='Logo' />
              </div>
              <div>Portfolio</div>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <LinkContainer to='/projects'>
                <Nav.Link href='#future-projects'>Future projects</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/technologies'>
                <Nav.Link href='#technologies'>Technologies</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/hobbies'>
                <Nav.Link href='#hobbies'>Careers & Hobbies</Nav.Link>
              </LinkContainer>
            </Nav>
            <div className='social-icons d-flex gap-3'>
              <div>
                <a
                  href='https://github.com/JevgenijusU'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={github} alt='GitHub' />
                </a>
              </div>
              <div>
                <a
                  href='https://www.linkedin.com/in/jevgenijus-usovas-796780196/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={linkedin} alt='LinkedIn' />
                </a>
              </div>
              <div>
                <a
                  href='https://www.figma.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={figma} alt='Figma' />
                </a>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
