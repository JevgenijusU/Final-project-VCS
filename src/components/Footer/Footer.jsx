import './footer.css';
import github from '../../images/github-24.svg';
import linkedin from '../../images/Linkedin.svg';
import figma from '../../images/Figma.svg';

export const Footer = () => {
  return (
    <div>
      <footer>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-sm-3'>
              <div className='phone'>
                <p className='text-center m-0'>
                  Call me:
                  <br />
                  +3706846****
                </p>
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='email'>
                <p className='text-center m-0'>
                  Email:
                  <br />
                  jevgenijususovas@gmail.com
                </p>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='social-media d-flex justify-content-center align-items-center align-content-center pt-1 gap-3'>
                <div>
                  <a href='https://github.com/JevgenijusU' target='_blank'>
                    <img src={github} alt='' />
                  </a>
                </div>
                <div>
                  <a
                    href='https://www.linkedin.com/in/jevgenijus-usovas-796780196/'
                    target='_blank'
                  >
                    <img src={linkedin} alt='' />
                  </a>
                </div>
                <div>
                  <a href='https://www.figma.com/' target='_blank'>
                    <img src={figma} alt='' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
