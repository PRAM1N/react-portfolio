import React, { useEffect, useState } from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/img/me.png';
import HeaderSocials from './HeaderSocials';
import { FiMoon } from "react-icons/fi";
import { LuSunMedium } from "react-icons/lu";

import { LuMouse } from "react-icons/lu";
import logo from '../../assets/img/logo1.png'; 
import ScrollReveal from 'scrollreveal';

const Header = () => {
  const [icon, setIcon] = useState(<FiMoon />); // Default to FiMoon for dark theme

  useEffect(() => {
    // Scroll header logic
    const scrollHeader = () => {
      const header = document.getElementById('header');
      if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
      } else {
        header.classList.remove('scroll-header');
      }
    };

    window.addEventListener('scroll', scrollHeader);

    return () => {
      window.removeEventListener('scroll', scrollHeader);
    };
  }, []);

  useEffect(() => {
    // Light/Dark theme logic
    const themeButton = document.getElementById('theme-button');
    const lightTheme = 'light-theme';
    // eslint-disable-next-line
    const iconTheme = 'LuSunMedium';

    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'light' : 'dark';
    const getCurrentIcon = () => themeButton.classList.contains('LuSunMedium') ? 'LuSunMedium' : 'FiMoon';

    if (selectedTheme) {
      document.body.classList[selectedTheme === 'light' ? 'add' : 'remove'](lightTheme);
      setIcon(selectedIcon === 'FiMoon' ? <FiMoon /> : <LuSunMedium />);
    }

    const handleThemeToggle = () => {
      document.body.classList.toggle(lightTheme);

      if (getCurrentTheme() === 'light') {
        setIcon(<LuSunMedium />);
      } else {
        setIcon(<FiMoon />);
      }

      localStorage.setItem('selected-theme', getCurrentTheme());
      localStorage.setItem('selected-icon', getCurrentIcon());
    };

    themeButton.addEventListener('click', handleThemeToggle);

    return () => {
      themeButton.removeEventListener('click', handleThemeToggle);
    };
  }, []);

  useEffect(() => {
    // ScrollReveal animation
    const sr = ScrollReveal({
      origin: 'top',
      distance: '60px',
      duration: 2500,
      delay: 400,
    });

    sr.reveal('.header__container');
    sr.reveal('.me', { delay: 700 });
    sr.reveal('.header__socials, .scroll__down', { delay: 900, origin: 'bottom' });
  }, []);

  return (
    <header className='header' id="header">
      <div className="header__top">
        <a href="#home" className="nav__logo">
          <img className="logo" src={logo} alt='logo' /> PRAMIN
        </a>
        <div id="theme-button" className="moon__icon change-theme">
          {icon}
        </div>
      </div>

      <div className="container header__container">
        <h5 className='text'>Hello, I'm</h5>
        <h1 className='text'>PRAMIN GOPAL SHRESTHA</h1>
        <h5 className="text-light">FRONTEND DEVELOPER</h5>
        <CTA />
        <HeaderSocials />

        <div className='me home__handle'>
          <img src={ME} className='home__img' alt="me" />
        </div>

        <a href="#about" className='scroll__down text'> 
          <LuMouse className='mouse text' /><h5>Scroll Down</h5>
        </a>
      </div>
    </header>
  );
};

export default Header;
