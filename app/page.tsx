import Image from "next/image";
import BannerImage from "./components/banner-image";
import MyCarousel from "./components/carousel-image";
import Tab from "./components/tab";
import BannerCarousel from "./components/banner-carousel";
import BikeNeed from "./components/bikeCardCarousel";
import SectionWrapper from "./components/SectionWrapper";
import SquareCard from "./components/SquareCard";
import { BrandArray } from "./utils/constants";
import styles from "./index.module.css"
import CompareCard from "./components/CompareCard";
export default function Home() {
  return (
    <>
      <BannerCarousel />
      <div className="container">
        <SectionWrapper
          heading="Find Your Favourite Bike"
          viewall_url="/new-bike"
          viewall_title="View All Popular   Bikes"
        >
          <Tab />
          <BikeNeed />
        </SectionWrapper>
        <SectionWrapper
          heading="Popular Brands"
          viewall_title="View All Brand"
          viewall_url="#"
        >
          <MyCarousel
            autoplay={true}
            speed={500}
            arrows={false}
            slidesToShow={6}
            slidesToScroll={1}
            className={styles.brands_cls}
            responsive={[
              {
                breakpoint: 1350,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  arrows: true,
                },
              },
              {
                breakpoint: 1050,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2,
                  arrows: false,
                },
              },
              {
                breakpoint: 730,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                },
              },
            ]}
          >
            {BrandArray.map((item, index) =>(
            <SquareCard image_url={item.image } title={item.title} link_url={item.urlLink} />
            ))}
          </MyCarousel>
        </SectionWrapper>
        <CompareCard />
      </div>
    </>
  );
}
