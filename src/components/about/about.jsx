import React from 'react'
import './about.css'

import ME from '../../assets/img/me-about1.jpg'

import {FaAward} from 'react-icons/fa'
import { BiSupport } from "react-icons/bi"
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about' className='about'>
      <h5 className='sub-text'>My Intro</h5>
      <h2 className='section__title'>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me-about" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5 className='e-text'>Experience</h5>
              <small className='e-text'>1 Years Working</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5 className='e-text'>Projects</h5>
              <small className='e-text'>10+ Completed</small>
            </article>

            <article className='about__card'>
              <BiSupport className='about__icon'/>
              <h5 className='e-text'>Support</h5>
              <small className='e-text'>Online 24/7</small>
            </article>
          </div>

          <p className='about__description e-text'>
          Frontend developer, I create web pages with UI/UX interface, 
          I have 1 year of experience and many clients are happy 
          with the projects carried out.
          </p>

          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About