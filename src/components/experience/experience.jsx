import React from 'react'
import './experience.css'

import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience' className='experience'>
      <h5 className='sub-text'>My Abilities</h5>
      <h2 className='section__title'>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4 className='experience__name e-text'>JavaScript</h4>
                <small className='text-light sub-text'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4 className='e-text'>CSS</h4>
                <small className='text-light sub-text'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4 className='e-text'>React</h4>
                <small className='text-light sub-text'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4 className='e-text'>Bootstrap</h4>
                <small className='text-light sub-text'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4 className='e-text'>Git</h4>
                <small className='text-light sub-text'>Basics</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4 className='e-text'>C/C++</h4>
                <small className='text-light sub-text'>Basics</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4 className='e-text'>jQuery</h4>
                <small className='text-light sub-text'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4 className='e-text'>Flutter</h4>
                <small className='text-light sub-text'>Basics</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4 className='e-text'>Node JS</h4>
                <small className='text-light sub-text'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4 className='e-text'>MongoDB</h4>
                <small className='text-light sub-text'>Basics</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4 className='e-text'>PHP</h4>
                <small className='text-light sub-text'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4 className='e-text'>SQL</h4>
                <small className='text-light sub-text'>Basic</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4 className='e-text'>Python</h4>
                <small className='text-light sub-text'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4 className='e-text'>Django</h4>
                <small className='text-light sub-text'>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience