import React from 'react';
import './style.css';
import { FaGithub, FaDiscord, FaLinkedin, FaTwitch } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { socialprofils } from '../../data';

export const Socialicons = (params) => {
  return (
    <div className='stick_follow_icon'>
      <ul>
        {
          <li>
            <a href={socialprofils.twitch}>
              <FaTwitch />
            </a>
          </li>
        }
        {
          <li>
            <a href={socialprofils.instagram}>
              <BsInstagram />
            </a>
          </li>
        }
        {
          <li>
            <a href={socialprofils.discord}>
              <FaDiscord />
            </a>
          </li>
        }
        {
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        }
        {
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        }
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
