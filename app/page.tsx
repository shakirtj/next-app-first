import Image from "next/image";
import BikeHeader from "./components/header/index";
import BannerImage from "./components/banner-image";
import MainFooter from "./components/footer";
import Carousel from './components/carousel-image';
export default function Home() {
  return (
    <>
      <BannerImage />
      <Carousel />

    </>
  );
}
