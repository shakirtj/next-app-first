import React from "react";
import style from "./index.module.css";
import BannerImage from "../banner-image";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
interface ProdCard {
  title: string;
  image: string;
  price?: string;
  mileage?: number;
  displacememt?: number;
}
const ProductCard = ({
  title,
  image,
  price,
  mileage,
  displacememt,
}: ProdCard) => {
  return (
    <>
      <div className={style.productWrapper}>
        <div className={style.productCard_main}>
          <Link href="#">
            <div className={style.productImage}>
              <BannerImage height={183} width={350} image_src={image} />
            </div>
            <div className={style.productInfo_wrp}>
              <h3>{title}</h3>
              {price ? <p>₹ {price} Lakh</p> : <p>N/A</p>}
              <div className={style.keySpecs}>
                <div className={style.specs}>
                  <Image
                    src="/assets/images/icons/mileage.webp"
                    height={14}
                    width={14}
                    alt="Kmpl"
                  />
                  {mileage}
                </div>
                <div className={style.specs}>
                  <Image
                    src="/assets/images/icons/mileage.webp"
                    height={14}
                    width={14}
                    alt="Kmpl"
                  />
                  {displacememt}
                </div>
              </div>
              <button className="primary_btn">Get On Road Price</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default ProductCard;
