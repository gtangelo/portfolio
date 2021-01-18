import React from 'react'
import './index.css'
import Particles from "react-particles-js";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai"


const Footer = () => {
  return (
    <footer className="wave-footer-container">
      <Particles
        params={{
          particles: {
            number: {
              value: 10,
            },
          },
        }}
        className="footer-particles"
      />
      <div class="custom-shape-divider-top-1610246279">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div id="footer-contents">
        <div>
          <a href="https://github.com/gtangelo" target="_blank">
            <AiOutlineGithub size="35px" color="#FFFFFF" />
          </a>
          <a href="https://www.linkedin.com/in/gabriel-ting/" target="_blank">
            <AiFillLinkedin size="35px" color="#FFFFFF" />
          </a>
          <a href="mailto:gabrielting.info@gmail.com" target="_blank">
            <AiFillMail size="35px" color="#FFFFFF" />
          </a>
        </div>
        <p>Made with ❤ using Gatsby</p>
      </div>
    </footer>
  )
}

export default Footer
