import Image from "next/image";
import BannerImage from "./components/banner-image";
import MyCarousel from "./components/carousel-image";
import Tab from "./components/tab";
import BannerCarousel from "./components/banner-carousel";
import BikeNeed from "./components/bikeCardCarousel";
import SectionWrapper from "./components/SectionWrapper";

export default function Home() {
  return (
    <>
      <BannerCarousel />
      <div className="container">
        <SectionWrapper heading="Find Your Favourite Bike" viewall_url="/new-bike" >
          <Tab />
          <BikeNeed />
        </SectionWrapper>
      </div>
    </>
  );
}
