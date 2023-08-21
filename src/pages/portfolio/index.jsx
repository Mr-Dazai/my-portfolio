import './style.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FaGithub } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';
export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet='utf-8' />
        <title> Sebin | Portfolio</title>
      </Helmet>
      <section id='projects' className='project'>
        <h5>— check out some </h5>
        <h2>Stuff &nbsp;I’ve worked on &nbsp; 💻</h2>
        <div className='project-item-container'>
          <div className='project-box'>
            <div className='project-box__link'>
              <a
                href='https://github.com/israelmitolu/flexibbble'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h4>
                  <FaGithub name='logo-github'></FaGithub>
                </h4>
              </a>
              <a
                href='https://im-flexibbble.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h4>
                  <BiLinkExternal name='open-outline'></BiLinkExternal>
                </h4>
              </a>
            </div>
            <div className='project-box__content'>
              <h3> Project </h3>
              <h5>
                React.js &nbsp; Node.js &nbsp; HTML&nbsp; CSS &nbsp; Javascript{' '}
              </h5>
            </div>
          </div>

          <div className='project-box'>
            <div className='project-box__link'>
              <a
                href='https://github.com/israelmitolu/Learn-Context-by-Building-a-Shopping-Website'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h4>
                  <FaGithub name='logo-github'></FaGithub>
                </h4>
              </a>
              <a
                href='https://shop-context.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h4>
                  <BiLinkExternal name='open-outline'></BiLinkExternal>
                </h4>
              </a>
            </div>
            <div className='project-box__content'>
              <h3> Project </h3>
              <h5>
                React.js &nbsp; Node.js &nbsp; HTML&nbsp; CSS &nbsp; Javascript{' '}
              </h5>
            </div>
          </div>

          <div className='project-box'>
            <div className='project-box__link'>
              <a
                href='https://github.com/israelmitolu/The-Weirdos-NFT'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h4>
                  <FaGithub name='logo-github'></FaGithub>
                </h4>
              </a>
              <a
                href='https://weirdos-nft.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h4>
                  <BiLinkExternal />
                </h4>
              </a>
            </div>
            <div className='project-box__content'>
              <h3> Project </h3>
              <h5>
                React.js &nbsp; Node.js &nbsp; HTML&nbsp; CSS &nbsp; Javascript{' '}
              </h5>
            </div>
          </div>

          <div className='project-box'>
            <div className='project-box__link'>
              <a
                href='https://github.com/israelmitolu/react-music-player'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h4>
                  <FaGithub name='logo-github'></FaGithub>
                </h4>
              </a>
              <a
                href='https://lofi-playlist.netlify.app'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h4>
                  <BiLinkExternal />
                </h4>
              </a>
            </div>
            <div className='project-box__content'>
              <h3> Project </h3>
              <h5>React.js &nbsp; Node.js &nbsp; Javascript </h5>
            </div>
          </div>
          <div className='project-box'>
            <div className='project-box__link'>
              <a
                href='https://github.com/israelmitolu/fisayo-fosudo'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h4>
                  <FaGithub name='logo-github'></FaGithub>
                </h4>
              </a>
              <a
                href='https://fisayofosudo.netlify.app'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h4>
                  <BiLinkExternal />
                </h4>
              </a>
            </div>
            <div className='project-box__content'>
              <h3> Project </h3>
              <h5>React.js &nbsp; Node.js &nbsp; Javascript </h5>
            </div>
          </div>
          <div className='project-box'>
            <div className='project-box__link'>
              <a
                href='https://github.com/israelmitolu/fisayo-fosudo'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h4>
                  <FaGithub name='logo-github'></FaGithub>
                </h4>
              </a>
              <a
                href='https://fisayofosudo.netlify.app'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h4>
                  <BiLinkExternal />
                </h4>
              </a>
            </div>
            <div className='project-box__content'>
              <h3> Project </h3>
              <h5>React.js &nbsp; Node.js &nbsp; Javascript </h5>
            </div>
          </div>

          <div className='project-box'>
            <div className='project-box__link'>
              <a
                href='https://github.com/israelmitolu/Digitaly'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h4>
                  <FaGithub name='logo-github'></FaGithub>
                </h4>
              </a>
              <a
                href='https://digitaly.netlify.app/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h4>
                  <BiLinkExternal />
                </h4>
              </a>
            </div>
            <div className='project-box__content'>
              <h3> Project </h3>
              <h5>React.js &nbsp; Node.js &nbsp; Javascript </h5>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
