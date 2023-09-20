import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

const BannerImage = () => {
  return (
    <Image
    src="/assets/images/banner1.webp"
    alt="Logo"
    className="logo_mg"
    width={1920}
    height={600}
    priority
  />
  );
};

export default BannerImage;