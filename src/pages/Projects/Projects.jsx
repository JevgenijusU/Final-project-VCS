import { Card, Container } from 'react-bootstrap';
import '../../pages/Projects/projects.css';
import img1 from '../../images/Projectfoto.svg';

export const Projects = () => {
  return (
    <Container>
      <h1 className='text-center'>Future projects</h1>
      <div className='row'>
        <div className='col-sm-6 d-flex justify-content-center mb-5'>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant='top'
              src={img1}
              data-aos='zoom-in'
              data-aos-duration='1000'
              data-aos-easing='ease-out-cubic'
            />
            <Card.Body>
              <Card.Title className='text-center'>Project 1</Card.Title>
              <div className='line2 w-75'></div>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='col-sm-6 d-flex justify-content-center mb-5'>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant='top'
              src={img1}
              data-aos='zoom-in'
              data-aos-duration='1000'
              data-aos-easing='ease-out-cubic'
            />
            <Card.Body>
              <Card.Title className='text-center'>Project 2</Card.Title>
              <div className='line2 w-75'></div>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='col-sm-6 d-flex justify-content-center mb-5'>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant='top'
              src={img1}
              data-aos='zoom-in'
              data-aos-duration='1000'
              data-aos-easing='ease-out-cubic'
            />
            <Card.Body>
              <Card.Title className='text-center'>Project 3</Card.Title>
              <div className='line2 w-75'></div>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='col-sm-6 d-flex justify-content-center mb-5'>
          <Card style={{ width: '18rem' }}>
            <Card.Img
              variant='top'
              src={img1}
              data-aos='zoom-in'
              data-aos-duration='1000'
              data-aos-easing='ease-out-cubic'
            />
            <Card.Body>
              <Card.Title className='text-center'>Project 4</Card.Title>
              <div className='line2 w-75'></div>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};
