import React from "react";
import MyCarousel from "../carousel-image";
import ProductCard from "../productCard";
import Styles from "./index.module.css";

const BikeNeed = async () => {
  async function fetchData() {
    try {
      const response = await fetch(
        "http://localhost:1337/api/bikes?populate[0]=card_image"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      return data
      // Handle the JSON data here
      console.log(data);
    } catch (error) {
      // Handle errors here
      console.error("There was a problem with the fetch operation:", error);
    }
  }

  // Call the async function
  const data = await fetchData();

 
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
      {data?.data?.map((item: any, index: number) => (
        <ProductCard
          image={`http://localhost:1337${item?.attributes?.card_image?.data?.attributes?.url }`}
          title={item?.attributes.name}
          price={`${item?.attributes.min_price} - ${item?.attributes.max_price}`} 
          mileage={100}
          displacememt={98}
        />
      ))}
    </MyCarousel>
  );
};

export default BikeNeed;
