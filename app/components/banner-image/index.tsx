import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

interface bannerimage {
  image_src: string;
  width: number;
  height: number;
}

const BannerImage = (props: bannerimage) => {
  return (
    <Image
    src={props.image_src}
    alt="Logo"
    className="logo_mg"
    width={props.width}
    height={props.height || 900}
    priority
  />
  );
};

export default BannerImage;