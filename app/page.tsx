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
import DealerCard from "./components/DealerCard";
import BikePreferences from "./components/BikePreferences";
import ContentCard from "./components/ContentCard";
export default async function Home() {
  async function fetchData() {
    try {
      const response = await fetch('http://localhost:1337/api/brands?populate[0]=image');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();

      return data
      // Handle the JSON data here
      // console.log(data);
    } catch (error) {
      // Handle errors here
      console.error('There was a problem with the fetch operation:', error);
    }
  }

  const data = await fetchData()

  // console.log(JSON.stringify(data, null, 2))
  return (
    
    <>
      <BannerCarousel />
      <div className="container">
        <SectionWrapper
          heading={<h2>Find Your Favourite Bike</h2>}
          viewall_url="/new-bike"
          viewall_title="View All Popular   Bikes"
        >
          <Tab />
          <BikeNeed />
        </SectionWrapper>
        <SectionWrapper
          heading={<h2>Popular Brands</h2>}
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
            {data.data.map((item:any, index:number) =>(
            <SquareCard image_url={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.url }`} title={item?.attributes.name} link_url={item?.attributes?.slug} />
            ))}
          </MyCarousel>
        </SectionWrapper>
        <SectionWrapper
        heading={<h2>Compare Bike</h2>}
        viewall_title="compare bikes"
        viewall_url="#"
        >
        <MyCarousel
        autoplay={true}
        speed={500}
        arrows={false}
        slidesToShow={3}
        slidesToScroll={1}
        className={styles.compcls}
        >
          <CompareCard />
          <CompareCard />
          <CompareCard />
          <CompareCard />
          <CompareCard />
        </MyCarousel>

        </SectionWrapper>
        <SectionWrapper heading={<h2>Aprilia Showrooms/Dealers in India</h2>} viewall_title="view all aprilia bikes Dealers" viewall_url="aprilia-bike">
          <div className="flex gap-4 flex-wrap">
          <DealerCard title="Ather Space , Hindalga"  address="Sri Krishna Weaving Mill Compound,Vengurla Road, Opp Hindalga
          Ganapathi Temple, Belgaum - 591108" children/>
          <DealerCard title="Ather Space , Hindalga"  address="Sri Krishna Weaving Mill Compound,Vengurla Road, Opp Hindalga
          Ganapathi Temple, Belgaum - 591108" children/>
          <DealerCard title="Ather Space , Hindalga"  address="Sri Krishna Weaving Mill Compound,Vengurla Road, Opp Hindalga
          Ganapathi Temple, Belgaum - 591108" children/>
          <DealerCard title="Ather Space , Hindalga"  address="Sri Krishna Weaving Mill Compound,Vengurla Road, Opp Hindalga
          Ganapathi Temple, Belgaum - 591108" children/>
          <DealerCard title="Ather Space , Hindalga"  address="Sri Krishna Weaving Mill Compound,Vengurla Road, Opp Hindalga
          Ganapathi Temple, Belgaum - 591108" children/>
          
          </div>
        </SectionWrapper>
        <SectionWrapper
        heading={<h2>Bikes as per your Preference</h2>}
        >
          <Tab/>
         <BikePreferences/>
        </SectionWrapper>
        <ContentCard contentHeading={<h1>About BikeJunction</h1>}  children contentText="BikeJunction Is India’s Most Trusted Digital Platform Where You Can Get All The Necessary Information About The Indian And Global 2-Wheeler Market. We Offer A 21st-Century E-Commerce Experience For 2-Wheelers In India. Our Experts At BikeJunction, Conduct Thorough Research To Deliver To Its Customers With Detailed Information Regarding Various 2-Wheelers Available Or Upcoming In The Market. Our Experts Help You Compare And Contrast The Best Bike Models Based On Their Performance, Durability, Mileage, Engine Power, Unique Design, Ergonomics, Safety And More" />
      </div>
    </>
  );
}
