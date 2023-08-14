import React from 'react';
import './style.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Typewriter from 'typewriter-effect';
import { introdata, meta } from '../../data';
import { Link } from 'react-router-dom';
export const Home = () => {
  return (
    <HelmetProvider>
      <section id='home' className='home'>
        <Helmet>
          <meta charSet='utf-8' />
          <title> {meta.title}</title>
        </Helmet>
        <div className='intro_sec d-block d-lg-flex align-items-center '>
          {/* <div>
            <img src="" alt="" />
          </div> */}
          <div className='text order-2 order-lg-1 h-100 d-lg-flex justify-content-center'>
            <div className='align-self-center '>
              <div className='intro mx-auto'>
                <h2>
                  I’m <div className='mb-1x'>{introdata.title}</div>
                </h2>
                <h1 className='fluidz-48 '>
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p>{introdata.description}</p>
                <div className='intro_btn-action pb-5'>
                  <Link to='/portfolio' className='text_2'>
                    <div id='button_h' className='ac_btn btn '>
                      My Portfolio
                      <div className='ring one'></div>
                      <div className='ring two'></div>
                      <div className='ring three'></div>
                    </div>
                  </Link>
                  <Link to='/contact' className='text_2'>
                    <div id='button_h' className='ac_btn btn'>
                      Contact Me
                      <div className='ring one'></div>
                      <div className='ring two'></div>
                      <div className='ring three'></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
