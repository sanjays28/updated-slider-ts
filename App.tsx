import React from 'react';
import 'rsuite/dist/styles/rsuite-default.css';
import {SliderV} from './src/SliderV';

const Slider = () => {
  const mystyle: any = {
    slider: {
      width: '100vw',
      Color: 'White',
      overflow: 'hidden',
      borderRadius: '5px',
      margin: '2rem auto',
      boxShadow: ' 0 5px 10px ',
      transition: 'width 2s',
      position: 'relative',
    },
  };

  return (
    <div>
      <SliderV
        className="custom-slider"
        style={mystyle.slider}
        shape="bar"
        placement="bottom"
        autoplay
      ></SliderV>
    </div>
  );
};

export default Slider;
