import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/img/portfolio1.jpg'
import IMG2 from '../../assets/img/portfolio2.jpg'
import IMG3 from '../../assets/img/portfolio3.jpg'
import IMG4 from '../../assets/img/portfolio4.jpg'
import IMG5 from '../../assets/img/portfolio5.jpg'
import IMG6 from '../../assets/img/portfolio6.jpg'

import { FaGithub } from "react-icons/fa";
import { MdEmojiObjects } from "react-icons/md";

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Black Friday Website',
    github: 'http://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 2,
    image: IMG2,
    title: 'UI Interface of Productivity App',
    github: 'http://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Crypto Currency Dashboard',
    github: 'http://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Jewellery Shopping site, SparkleSphere',
    github: 'http://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Responsive UI of Jupiter Weather App',
    github: 'http://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Crypto Currency Dashboard',
    github: 'http://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio'>
      <h5 className='sub-text'>My Portfolio</h5>
      <h2 className='section__title'>Recent Work</h2>
      
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3 className='portfolio__title line'>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn e-text' rel='noreferrer' target='_blank'><FaGithub className='idea' />    GitHub</a>
                  <a href={demo} className='btn e-text' rel='noreferrer' target='_blank'><MdEmojiObjects className='idea' />    Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio