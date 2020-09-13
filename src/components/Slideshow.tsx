import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DnImage1 from '../images/works/screen/dn1.png'
import DnImage2 from '../images/works/screen/dn2.jpg'
import Bplus from '../images/works/screen/b-plus.png'
import Tameru from '../images/works/screen/tameru.png'

const Slideshow: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight:true
  };

  return (
    <div className="slide">
      <Slider {...settings}>
        <div className="slide__content">
          <img src={DnImage1} alt="screen" className=""></img>
        </div>
        <div className="slide__content">
          <img src={DnImage2} alt="screen" className=""></img>
        </div>
        {/* <div className="slide__content">
          <h3>4</h3>
        </div>
        <div className="slide__content">
          <h3>5</h3>
        </div>
        <div className="slide__content">
          <h3>6</h3>
        </div> */}
      </Slider>
    </div>
  )
}

export default Slideshow