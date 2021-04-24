import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const imageOne = "/products/chair10.png";
const imageTwo = "/products/chair9.png";
const imageThree = "/products/chair8.png";
const imageFour = "/products/chair7.png";

const MainSlider = () => (
  <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={5000}
      showThumbs={false}
    >
    <div>
      <img src={imageOne} />
    </div>
    <div>
      <img src={imageTwo} />
    </div>
    <div>
      <img src={imageThree} />
    </div>
    <div>
      <img src={imageFour} />
    </div>
  </Carousel>
);

export default MainSlider;
