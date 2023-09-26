import React from "react";
import MyCarousel from "../carousel-image";
import BannerImage from "../banner-image";

function BannerCarousel() {
  const arr = [
    "/assets/images/banner1.webp",
    "/assets/images/banner1.webp",
    "/assets/images/banner1.webp",
  ];
  return (
    <MyCarousel arrows={false} autoplay={true} dots={true} slidesToScroll={1} slidesToShow={1} speed={500} > 
      {arr.map((item) => {
        return <BannerImage image_src={item} height={600} width={1920} />;
      })}
    </MyCarousel>
  );
}

export default BannerCarousel;
