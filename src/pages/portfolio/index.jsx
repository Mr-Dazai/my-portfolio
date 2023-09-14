import './style.css'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { FaGithub } from 'react-icons/fa'
import { BiLinkExternal } from 'react-icons/bi'
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
                href='https://github.com/Mr-Dazai/To-Do-App'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h4>
                  <FaGithub name='logo-github'></FaGithub>
                </h4>
              </a>
              <a
                href='https://to-do-app-4w93.onrender.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h4>
                  <BiLinkExternal name='open-outline'></BiLinkExternal>
                </h4>
              </a>
            </div>
            <div className='project-box__content'>
              <h3> To-Do List </h3>
              <h6>
                Node.js &nbsp; Express.js &nbsp; MongoDB&nbsp; HTML&nbsp; CSS
              </h6>
            </div>
          </div>

          <div className='project-box'>
            <div className='project-box__link'>
              <a
                href='https://github.com/Mr-Dazai/my-portfolio'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h4>
                  <FaGithub name='logo-github'></FaGithub>
                </h4>
              </a>
              <a
                href='https://sebin.joepaul.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h4>
                  <BiLinkExternal name='open-outline'></BiLinkExternal>
                </h4>
              </a>
            </div>
            <div className='project-box__content'>
              <h3> Portfolio Website </h3>
              <h6>React.js &nbsp; HTML&nbsp; CSS &nbsp; Javascript </h6>
            </div>
          </div>

          <div className='project-box'>
            <div className='project-box__link'>
              <a
                href='https://github.com/Mr-Dazai/SneakerBox-API'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h4>
                  <FaGithub name='logo-github'></FaGithub>
                </h4>
              </a>
              <a
                href='https://sneakerbox-api.onrender.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h4>
                  <BiLinkExternal />
                </h4>
              </a>
            </div>
            <div className='project-box__content'>
              <h3> SneakerBox Store &nbsp; &nbsp;API-Back-end </h3>
              <h6>
                Node.js &nbsp; Express.js &nbsp; MongoDB&nbsp; HTML&nbsp; CSS
              </h6>
            </div>
          </div>

          <div className='project-box'>
            <div className='project-box__link'>
              <a
                href='https://github.com/Mr-Dazai/SneakerBox-Web'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h4>
                  <FaGithub name='logo-github'></FaGithub>
                </h4>
              </a>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                <h4>
                  <BiLinkExternal />
                </h4>
              </a>
            </div>
            <div className='project-box__content'>
              <h3> SneakerBox Store Website </h3>
              <h6>React.js &nbsp; HTML&nbsp; CSS &nbsp; Javascript </h6>
            </div>
          </div>
          <div className='project-box'>
            <div className='project-box__link'>
              <a
                href='https://github.com/Mr-Dazai/Wikipedia-API'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h4>
                  <FaGithub name='logo-github'></FaGithub>
                </h4>
              </a>
              <a
                href='https://mr-dazai.github.io/Wikipedia-API/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h4>
                  <BiLinkExternal />
                </h4>
              </a>
            </div>
            <div className='project-box__content'>
              <h3> Wikipedia-API </h3>
              <h6>HTML&nbsp; CSS &nbsp; Javascript </h6>
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
              <a href='#' target='_blank' rel='noopener noreferrer'>
                <h4>
                  <BiLinkExternal />
                </h4>
              </a>
            </div>
            <div className='project-box__content'>
              <h3> Django Project </h3>
              <h5>Python&nbsp; Django &nbsp; Javascript </h5>
            </div>
          </div>

          <div className='project-box'>
            <div className='project-box__link'>
              <a
                href='https://github.com/Mr-Dazai/QR-Code-Generator-Docker'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h4>
                  <FaGithub name='logo-github'></FaGithub>
                </h4>
              </a>
              <a
                href='https://github.com/Mr-Dazai/QR-Code-Generator-Docker'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h4>
                  <BiLinkExternal />
                </h4>
              </a>
            </div>
            <div className='project-box__content'>
              <h3> Docker Project </h3>
              <h5>Python &nbsp; Docker &nbsp; Tkinter </h5>
            </div>
          </div>
          <div className='project-box'>
            <div className='project-box__link'>
              <a
                href='https://github.com/israelmitolu/Digitaly'
                target='_blank'
                rel='noopener noreferrer'
              >
                <h4>{/* <FaGithub name='logo-github'></FaGithub> */}</h4>
              </a>
              <a href='#' target='_blank' rel='noopener noreferrer'>
                <h4>{/* <BiLinkExternal /> */}</h4>
              </a>
            </div>
            <div className='project-box__content'>
              <h3> Connect Project (Inprogerss)</h3>
              <h5>WebRTC &nbsp; socket.io &nbsp; Javascript </h5>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  )
}
