import React from 'react';
import './index.css';
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";


const Footer = () => {
  return (
    <footer id="footer-contents">
      <div>
        <a href="https://github.com/gtangelo" target="_blank">
          <AiOutlineGithub size="35px" color="#000000" />
        </a>
        <a href="https://www.linkedin.com/in/gabriel-ting/" target="_blank">
          <AiFillLinkedin size="35px" color="#000000" />
        </a>
        <a href="mailto:gabrielting.info@gmail.com" target="_blank">
          <AiFillMail size="35px" color="#000000" />
        </a>
      </div>
      <p>Made with ❤ using Gatsby</p>
    </footer>
  );
};

export default Footer;
