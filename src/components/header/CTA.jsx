import React from 'react'
import CV from '../../assets/pdf/Pramin resume.pdf'

const CTA = () => {
  return (
    <div className='cta socials__buttons'>
      <a href={CV} target='blank' className='btn'>Download CV</a>
      <a href="#about" className='btn btn-primary'>About Me</a>
    </div>
  )
}

export default CTA