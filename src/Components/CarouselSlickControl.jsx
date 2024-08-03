// src/components/Carousel.js
import React from 'react';
import Slider from 'react-slick';

import './CarouselSlickControl.css';


const CarouselSlickControl = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselSlickControl;
/*
// src/components/NextArrow.js
import React from 'react';

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow next" onClick={onClick}>
      &#10095;
    </div>
  );
};
export default NextArrow;

// src/components/PrevArrow.js
import React from 'react';

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow prev" onClick={onClick}>
      &#10094;
    </div>
  );
};

export default PrevArrow;
*/