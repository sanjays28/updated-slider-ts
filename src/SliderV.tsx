import React from 'react';
import {Button, Carousel} from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

export type SliderVProps = {
  sliderData?: any[];
  autoplay?: boolean;
  autoplayInterval?: number;
  children?: any;
  classPrefix?: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  shape?: 'dot' | 'bar';
  style?: {
    width: any;
    Color: any;
    overflow: any;
    borderRadius: any;
    margin: any;
    boxShadow: any;
    transition: any;
    position: any;
  };
  className: string;
};
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

  img: {
    position: 'absolute',
    left: '650px',
    top: '25px',
    zIndex: '1',
    float: 'right',
    height: '350px',
    padding: '5px',
  },
  heading: {
    position: 'relative',
    zIndex: '1',
    color: '#000000',
    top: '150px',
    paddingLeft: '50px',
    textShadow: '#0002d 2px 0px 10px',
    left: '50px',
    font: 'Copperplate, Copperplate Gothic Light, fantasy',
    fontSize: '100px',
  },
  div3: {
    position: 'relative',
    display: 'inline-block',
  },
  btn: {
    top: '120px',
    position: 'absolute',
    zIndex: '1',
    paddingLeft: '10px',
    textAlign: 'center',
    // backgroundImage:"linear-gradient(to right, #4776E6 0%, #8E54E9  51%, #4776E6  100%)",
    backgroundImage: 'linear-gradient(to right, #4e54c8, #8f94fb',
    color: 'white',
    left: '145px',
  },
};

export const SliderV = (props: SliderVProps) => {
  const output: any = [];

  const getSlider = () => {
    // eslint-disable-next-line no-unused-expressions
    Array.isArray(props.sliderData) &&
      props.sliderData.forEach(items => {
        output.push(
          <div style={{backgroundColor: 'white'}}>
            <div style={mystyle.div3}>
              <img alt="1 " src={items.img} style={mystyle.img}></img>
              <h1 className="heading" style={mystyle.heading}>
                {items.heading} <br></br>
                <h6
                  className="sub-heading"
                  style={{paddingLeft: '25px', paddingTop: '30px'}}
                >
                  {items.subHeading}
                </h6>
                <br></br>
                <Button style={mystyle.btn}>Sign Up</Button>
                <br></br>
              </h1>
            </div>
          </div>,
        );
      });
    return output;
  };

  const _sliderProps = {...props};
  return <Carousel {..._sliderProps}>{getSlider()}</Carousel>;
};
