"use client"
import React from 'react';
import Slider from 'react-slick';
import BannerImage from '../banner-image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames';
import { ResponsiveCarousalObjectType } from '@/app/utils/constants';

interface carouselimage {
  autoplay?: boolean,
    dots?: boolean,
    infinite?: boolean,
    speed?: number,
    slidesToShow?: number,
    slidesToScroll?: number,
    arrows?: boolean,
    children?:React.ReactElement[] | React.ReactElement,
    className?:string
    responsive?: ResponsiveCarousalObjectType[];
}
 

const MyCarousel = ({
    autoplay,
    dots,
    infinite,
    speed,
    slidesToShow,
    slidesToScroll,
    className,
    arrows,
    children,
    responsive
}: carouselimage) => {
  const settings: any= {
    autoplay: autoplay,
    dots: dots,
    infinite: infinite,
    speed: speed,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    arrows: arrows,
    responsive:responsive,
    className
  };

  

  return (
      <Slider {...settings}>
        {children}
      </Slider>
  );
};

export default MyCarousel;