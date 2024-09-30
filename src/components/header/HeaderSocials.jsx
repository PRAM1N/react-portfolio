import React from 'react'

import {BsLinkedin} from 'react-icons/bs/'
import {BsGithub} from 'react-icons/bs/'
import { FaDribbble } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/pramin-g-shrestha-088447262/" target="_blank" rel="noreferrer"><BsLinkedin className='home__social-link'/></a>
        <a href="https://github.com/PRAM1N" target="_blank" rel="noreferrer"><BsGithub className='home__social-link'/></a>
        <a href="https://dribbble.com/PRAM1N" target="_blank" rel="noreferrer"><FaDribbble className='home__social-link'/></a>
    </div>
  )
}

export default HeaderSocials