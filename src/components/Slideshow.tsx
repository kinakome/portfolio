import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slideshow: React.FC = () => {
  const lineTime = 700
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slide">
      <Slider {...settings}>
        <div className="slide__content">
          <h3>2</h3>
        </div>
        <div className="slide__content">
          <h3>3</h3>
        </div>
        <div className="slide__content">
          <h3>4</h3>
        </div>
        <div className="slide__content">
          <h3>5</h3>
        </div>
        <div className="slide__content">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  )
}

export default Slideshow