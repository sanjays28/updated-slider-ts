import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import {SliderV} from './src/SliderV';

const sliderData: any[] = [
  {
    heading: 'Vlinder',
    subHeading: 'vlinder | blockchain agnostic platform ',
    img: 'https://i.ibb.co/BGgV6vr/Layer-2.png',
    btn: 'Sign up!',
  },
  {
    heading: 'Sanjay',
    subHeading: 'vlinder | blockchain agnostic platform ',
    img: 'https://i.ibb.co/BGgV6vr/Layer-2.png',
    btn: 'Register!',
  },
  {
    heading: 'Application ',
    subHeading: 'vlinder | blockchain agnostic platform ',
    img: 'https://i.ibb.co/BGgV6vr/Layer-2.png',
    btn: 'Register!',
  },
];

const Slider = () => {
  return (
    <div>
      <SliderV
        sliderData={sliderData}
        className="custom-slider"
        style={{
          width: '60vw',
          Color: 'White',
          overflow: 'hidden',
          borderRadius: '5px',
          margin: '2rem auto',
          boxShadow: ' 0 5px 10px ',
          transition: 'width 2s',
          position: 'relative',
        }}
        shape="bar"
        placement="bottom"
        autoplay
      ></SliderV>
    </div>
  );
};

export default Slider;
