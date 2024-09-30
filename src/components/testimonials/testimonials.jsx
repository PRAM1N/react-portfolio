import React from 'react';
import './testimonials.css';

// Import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import AVTR1 from '../../assets/img/avatar1.jpg';
import AVTR2 from '../../assets/img/avatar2.jpg';
import AVTR3 from '../../assets/img/avatar3.jpg';
import AVTR4 from '../../assets/img/avatar3.jpg';

const data = [
  {
    avatar: AVTR1,
    name: 'None',
    review: 'A really good job, all aspects of the project were followed step by step and with good results.',
  },
  {
    avatar: AVTR2,
    name: 'None',
    review: 'I hired a project and the services were of quality, the work delivered is top-notch.',
  },
  {
    avatar: AVTR3,
    name: 'None',
    review: 'A really good job, all aspects of the project were followed step by step and with good results.',
  },
  {
    avatar: AVTR4,
    name: 'None',
    review: 'Designs not only look stunning but also perfectly align with our brand.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonial section">
      <span className="section__subtitle sub-text">My Clients Say</span>
      <h2 className="section__title">Testimonials</h2>

      <Swiper
        className="testimonial__container container swiper"
        modules={[Pagination]}
        spaceBetween={24}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48
          },
        }}
      >
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index} className="testimonial__card swiper-slide">
            <img src={avatar} alt="" className="testimonial__img" />
            <h3 className="testimonial__name e-text">{name}</h3>
            <p className="testimonial__description e-text">{review}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Ensure the swiper-pagination div is rendered */}
      <div className="swiper-pagination"></div>
    </section>
  );
};

export default Testimonials;
