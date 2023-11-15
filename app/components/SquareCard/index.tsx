import React from "react";
import Styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

interface squareCard {
  image_url: string;
  title: string;
  width?: number;
  height?: number;
  className?:string;
  link_url: string
}

const SquareCard = ({
  image_url,
  title,
  width,
  height,
  className,
  link_url
}: squareCard) => {
  return (
    <div className={classNames( Styles.SquareCardWarp, className as string)}>
      <div className={Styles.SquareCardItem}>
        <Link href={link_url}>
          <span>
            <img
              src={image_url}
              width={width ?? 100}
              height={height ?? 100}
              alt="Brands img"
            />
          </span>
          <p>{title}</p>
        </Link>
      </div>
    </div>
  );
};

export default SquareCard;
