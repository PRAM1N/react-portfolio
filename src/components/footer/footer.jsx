import React from 'react';
import './footer.css';
import { FaInstagram, FaGithub, FaDribbble, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer__container bd-grid">
        <div className="footer__data">
          <h2 className="footer__title">PRAMIN</h2>
          <p className="footer__text e-text">I'm PRAMIN and this is my personal website</p>
        </div>

        <div className="footer__data">
          <h2 className="footer__title">EXPLORE</h2>
          <ul>
          <li><a href="/#" className="footer__link">Home</a></li>
            <li><a href="#about" className="footer__link">About</a></li>
            <li><a href="#experience" className="footer__link">Experience</a></li>
            <li><a href="#portfolio" className="footer__link">Portfolio</a></li>
            <li><a href="#testimonials" className="footer__link">Testimonials</a></li>
            <li><a href="#contact" className="footer__link">Contact</a></li>
          </ul>
        </div>

        <div className="footer__data">
          <h2 className="footer__title">FOLLOW ME</h2>
          <a href="https://www.instagram.com/pramin_g_shrestha/" target="blank" className="footer__social">
            <FaInstagram />
          </a>
          <a href="https://github.com/PRAM1N" target="blank" className="footer__social">
            <FaGithub />
          </a>
          <a href="https://dribbble.com/PRAM1N" target="blank" className="footer__social">
            <FaDribbble />
          </a>
          <a href="https://www.linkedin.com/in/pramin-g-shrestha-088447262/" target="blank" className="footer__social">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <span className="footer__copy">
          &#169; PRAMIN. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
