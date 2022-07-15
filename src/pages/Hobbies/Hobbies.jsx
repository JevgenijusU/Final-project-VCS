import '../../pages/Hobbies/hobbies.css';
import pastas from '../../images/LP.jpg';
import trans from '../../images/transekspedicija.jpg';
import nologo from '../../images/nologo.svg';
import wake from '../../images/wake.jpg';
import ski from '../../images/skiing1.jpg';
import carting from '../../images/carting.jpg';
import travel from '../../images/travel.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

export const Hobbies = () => {
  return (
    <Container>
      <h1 className='text-center'>Careers</h1>
      <Row>
        <Col sm={12}>
          <section>
            <subsection className='d-flex'>
              <div className=''>
                <img src={trans} alt='Transekspedicija' />
              </div>
              <div className='job-info d-flex flex-column'>
                <span className='org-name'>Transekspedicija, UAB</span>
                <h3 className='m-0'>Transport Manager</h3>
                <p> Aug 2020 - Mar 2022</p>
                <div className='description'>
                  <ul className='p-0 list-unstyled m-0'>
                    <li> - Organization of partial cargo transportation;</li>
                    <li> - Checking documents and their preparation;</li>
                    <li> - Management and control of cargo transportation.</li>
                  </ul>
                </div>
              </div>
            </subsection>
          </section>
        </Col>
        <Col sm={12}>
          <section>
            <subsection className='d-flex'>
              <div className=''>
                <img src={pastas} alt='Lietuvos pastas' />
              </div>
              <div className='job-info d-flex flex-column'>
                <span className='org-name'>Lietuvos paštas, AB</span>
                <h3 className='m-0'>Assistant Manager Recruitment</h3>
                <p> Jun 2019 - Nov 2019</p>
                <div className='description'>
                  <ul className='p-0 list-unstyled m-0'>
                    <li> - Screenin resumes;</li>
                    <li> - Creating job ads;</li>
                    <li> - Conducting phone interviews.</li>
                  </ul>
                </div>
              </div>
            </subsection>
          </section>
        </Col>
        <Col sm={12}>
          <section>
            <subsection className='d-flex'>
              <div className='nologo'>
                <img src={nologo} alt='Lietuvos pastas' />
              </div>
              <div className='job-info d-flex flex-column'>
                <span className='org-name'>Visenta, UAB</span>
                <h3 className='m-0'>Manager</h3>
                <p> Jul 2017 - Sep 2018</p>
                <div className='description'>
                  <ul className='p-0 list-unstyled m-0'>
                    <li> - Client search;</li>
                    <li> - Administrative work.</li>
                  </ul>
                </div>
              </div>
            </subsection>
          </section>
        </Col>
      </Row>
      <h2 className='text-center'>Hobbies</h2>
      <OwlCarousel
        className='owl-theme'
        items='2'
        autoplay
        nav={false}
        dots={false}
        loop
        margin={10}
        responsive={{
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          },
        }}
      >
        <div className='item'>
          <img src={wake} alt='Wake' />
        </div>
        <div className='item'>
          <img src={ski} alt='Ski' />
        </div>
        <div className='item'>
          <img src={carting} alt='Carting' />
        </div>
        <div className='item'>
          <img src={travel} alt='Travel' />
        </div>
      </OwlCarousel>
    </Container>
  );
};
