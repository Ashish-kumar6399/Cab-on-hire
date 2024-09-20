import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faTag, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import './Destination.css'; // CSS for styling

const Destinations = () => {
  const services = [
    { icon: faMapMarkerAlt, text: "Luxury tours all across NZ" },
    { icon: faClock, text: "Easy & Free Cancellations" },
    { icon: faTag, text: "Lowest Price Guarantee" },
    { icon: faThumbsUp, text: "Thousands of happy customers" },
  ];

  return (
    <div className='div_destination_bg'>
    <div className=" container services-container mb-5">
      {services.map((service, index) => (
        <div key={index} className="service-item">
          <FontAwesomeIcon icon={service.icon} className="service-icon" />
          <p className='destinations_para'>{service.text}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Destinations;
