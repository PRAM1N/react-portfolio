import React, { useState } from 'react';
import './services.css';
import { MdArrowForward, MdClose } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";

const ServiceCard = ({ title, description, items, onOpen }) => (
  <div className="services__card">
    <h3 className="services__title e-text">{title}</h3>
    <span className="services__button" onClick={onOpen}>
      See more <MdArrowForward className="services__icon"/>
    </span>
    <div className="services__modal">
      <div className="services__modal-content">
        <MdClose className="services__modal-close" onClick={onOpen} />
        <h3 className="services__modal-title">{title}</h3>
        <p className="services__modal-description">{description}</p>
        <ul className="services__modal-list">
          {items.map((item, index) => (
            <li className="services__modal-item" key={index}>
              <TiTickOutline className="bx bx-check services__modal-icon" />
              <p className="services__modal-info">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Services = () => {
  const [activeModal, setActiveModal] = useState(null);

  const handleOpen = (index) => {
    setActiveModal(index);
  };

  const handleClose = () => {
    setActiveModal(null);
  };

  const servicesData = [
    {
      title: "Product Designer",
      description: "Service with more than 1 years of experience. Providing quality work to clients and companies.",
      items: [
        "I develop the user interface.",
        "Web page development.",
        "I create UX element interactions.",
        "I position your company brand.",
        "Design and mockups of products for companies."
      ]
    },
    {
      title: "UI/UX Designer",
      description: "Service with more than 1 years of experience. Providing quality work to clients and companies.",
      items: [
        "I develop the user interface.",
        "Web page development.",
        "I create UX element interactions.",
        "I position your company brand.",
        "Design and mockups of products for companies."
      ]
    },
    {
      title: "Visual Designer",
      description: "Service with more than 1 years of experience. Providing quality work to clients and companies.",
      items: [
        "I develop the user interface.",
        "Web page development.",
        "I create UX element interactions.",
        "I position your company brand.",
        "Design and mockups of products for companies."
      ]
    }
  ];

  return (
    <section className="services section" id="services">
      <h5 className='sub-text'>My Services</h5>
      <h2 className='section__title'>What I Offer</h2>
      <div className="services__container container grid">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            items={service.items}
            onOpen={() => handleOpen(index)}
          />
        ))}
        {servicesData.map((_, index) => (
          <div
            key={`modal-${index}`}
            className={`services__modal ${activeModal === index ? 'active-modal' : ''}`}
          >
            <div className="services__modal-content">
              <MdClose className="services__modal-close" onClick={handleClose} />
              <h3 className="services__modal-title">{servicesData[index].title}</h3>
              <p className="services__modal-description e-text">{servicesData[index].description}</p>
              <ul className="services__modal-list">
                {servicesData[index].items.map((item, i) => (
                  <li className="services__modal-item" key={i}>
                    <TiTickOutline className="bx bx-check services__modal-icon" />
                    <p className="services__modal-info e-text">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
