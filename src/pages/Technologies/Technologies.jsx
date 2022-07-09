import '../../pages/Technologies/technologies.css';
import { Container, Row, Col } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';

export const Technologies = () => {
  return (
    <Container>
      <h1 className='text-center'>Technologies</h1>
      <div className='progressBar'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='left'>HTML</div>
          <div className='right'>Advanced</div>
        </div>
        <ProgressBar now={80} />
      </div>
      <div className='progressBar'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='left'>CSS & Bootstrap</div>
          <div className='right'>Intermediate</div>
        </div>
        <ProgressBar now={60} />
      </div>
      <div className='progressBar'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='left'>Figma</div>
          <div className='right'>Intermediate</div>
        </div>
        <ProgressBar now={40} />
      </div>
      <div className='progressBar'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='left'>JavaScript</div>
          <div className='right'>Beginer</div>
        </div>
        <ProgressBar now={20} />
      </div>
      <div className='progressBar'>
        <div className='d-flex justify-content-between align-items-center'>
          <div className='left'>React</div>
          <div className='right'>Beginer</div>
        </div>
        <ProgressBar now={20} />
      </div>
      <h2 className='text-center'>Additional technologies and skills</h2>
      <Row>
        <Col
          sm
          className='skills d-flex justify-content-center align-items-center'
        >
          <ul>
            <li>Communication</li>
            <li>Quick learning</li>
            <li>Teamwork</li>
            <li>Time management</li>
          </ul>
        </Col>
        <Col
          sm
          className='skills d-flex justify-content-center align-items-center'
        >
          <ul>
            <li>Problem Solving</li>
            <li>Emotional Intelligence</li>
            <li>Responsibility</li>
          </ul>
        </Col>
        <Col
          sm
          className='skills d-flex flex-column justify-content-center align-items-center'
        >
          <ul>
            <li>A2 English</li>
            <li>C2 Russian</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
