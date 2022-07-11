import './home.css';
import myfoto from '../../images/MyFoto.jpg';

export const Home = () => {
  return (
    <>
      <section>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-7'>
              <div className='line-name d-flex align-items-center gap-2'>
                <div className='line'></div>
                <p className='m-0'>Jevgenijus Usovas</p>
              </div>
              <h1 className='m-0' data-aos="fade-right">
                Creative thinker <br />
                Minimalism lover
              </h1>
              <div className='about-me'>
                <p className='m-0'>
                  Hi, I’m Jevgenijus. I’m Junior Front-End developer. If you are
                  looking for front-end developer to build your site and grow
                  your business. Let’s shake hands with me.
                </p>
              </div>
              <div className='line1'></div>
              <div className='full-time'>
                <p className='m-0'>I am currently open for part-time work.</p>
              </div>
            </div>
            <div className='col-sm-5 pb-5 pt-5' data-aos="fade-left"
            data-aos-offset="500"
            data-aos-easing="ease-in-sine">
              <div className='my-foto'>
                <img src={myfoto} alt='React Bootstrap logo' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
