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
    heading: 'Blockchain',
    subHeading: 'vlinder | blockchain agnostic platform ',
    img: 'https://i.ibb.co/jfZ8rdy/slider2.png',
    btn: 'Register!',
  },
  {
    heading: 'Intelligence',
    subHeading: 'vlinder | blockchain agnostic platform ',
    img: 'https://i.ibb.co/BGgV6vr/Layer-2.png',
    btn: 'Register!',
  },
];

const SliderType: any = {
  TypeA: {
    width: '60vw',
    Color: 'White',
    overflow: 'hidden',
    borderRadius: '5px',
    margin: '2rem auto',
    boxShadow: ' 0 5px 10px ',
    transition: 'width 2s',
    position: 'relative',
  },
  TypeB: {
    width: '100vw',
    Color: 'red',
    overflow: 'hidden',
    borderRadius: '20px',
    margin: '2rem auto',
    transition: 'width 2s',
    position: 'relative',
  },
};

const backGround: any = {
  bg1: {
    backgroundImage: 'linear-gradient(to right, #89f7fe, #66a6ff',
  },
  bg2: {
    backgroundImage: 'linear-gradient(to right, #80d0c7 ,#13547a',
  },
};
const imgType: any = {
  Round: {
    position: 'absolute',
    left: '650px',
    top: '25px',
    zIndex: '1',
    float: 'right',
    height: '350px',
    padding: '5px',
    borderRadius: '100%',
    border: '2px solid #ffff',
  },
  Rect: {
    position: 'absolute',
    left: '650px',
    top: '25px',
    zIndex: '1',
    float: 'right',
    height: '350px',
    padding: '5px',
  },
};

const Slider = () => {
  return (
    <div>
      <SliderV
        sliderData={sliderData}
        backGround={backGround.bg2}
        imgType={imgType.Round}
        className="custom-slider"
        style={SliderType.TypeA}
        shape="bar"
        placement="bottom"
        autoplay
      ></SliderV>
    </div>
  );
};

export default Slider;
