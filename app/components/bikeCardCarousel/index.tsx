import React from "react";
import MyCarousel from "../carousel-image";
import ProductCard from "../productCard";
import Styles from "./index.module.css"

const BikeNeed = () => {
  return (
    <MyCarousel
      arrows={true}
      autoplay={true}
      dots={false}
      slidesToScroll={1}
      slidesToShow={4}
      speed={500}
      className={Styles.marcls}
    >
      <ProductCard
        image="/assets/images/product_img.webp"
        title="Super Seplender"
        price="500000 - 650000"
        mileage={100}
        displacememt={98}
      />
      <ProductCard
        image="/assets/images/product_img.webp"
        title="Super Seplender"
        price="500000 - 650000"
        mileage={100}
        displacememt={98}
      />
      <ProductCard
        image="/assets/images/product_img.webp"
        title="Super Seplender"
        price="500000 - 650000"
        mileage={100}
        displacememt={98}
      />
      <ProductCard
        image="/assets/images/product_img.webp"
        title="Super Seplender"
        price="500000 - 650000"
        mileage={100}
        displacememt={98}
      />
      <ProductCard
        image="/assets/images/product_img.webp"
        title="Super Seplender"
        price="500000 - 650000"
        mileage={100}
        displacememt={98}
      />
    </MyCarousel>
  );
};

export default BikeNeed;
