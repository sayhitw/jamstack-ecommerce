import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const imageOne = "/products/chair10.png";
const imageTwo = "/products/chair9.png";
const imageThree = "/products/chair8.png";

const MainSlider = () => (
  <Carousel plugins={['arrows']}>
    <img src={imageOne} />
    <img src={imageTwo} />
    <img src={imageThree} />
  </Carousel>
);

export default MainSlider;
