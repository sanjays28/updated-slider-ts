import React from 'react';
import {Carousel} from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

export type SliderVProps = {
  autoplay?: boolean;
  autoplayInterval?: number;
  children?: any;
  classPrefix?: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  shape?: 'dot' | 'bar';
  style?: any;
  className: string;
};

export const SliderV = (props: SliderVProps) => {
  const _sliderProps = {...props};
  return <Carousel {..._sliderProps}>{props.children}</Carousel>;
};
