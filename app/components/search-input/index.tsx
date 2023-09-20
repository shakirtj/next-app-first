"use client"
import  React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import classNames from "classnames";
import {useState} from "react";

const InputSearch = () => {
    const [showList, setShowList] = useState(false);
    const toggleContent = () => {
        setShowList(!showList);
      };
  return (
    <div className={styles.SearchInputWrp}>
        <input className={classNames("border hover:border-gray-300" , styles.SearchInput)} type="text" placeholder="Search for Bike" name="" id="" onClick={toggleContent} />
        <button >
          <Image
            src="/assets/images/search_n.webp"
            alt="Logo"
            className="search_icon"
            width={20}
            height={20}
            priority
          />
        </button>
   
        {showList && <div className={styles.recentSearch}>
            <p>Trending Searches</p>
            <ul>
                <li role="presentation">TVS Apache RTR 310</li>
                <li role="presentation">TVS Apache RTR 310</li>
                <li role="presentation">TVS Apache RTR 310</li>
                <li role="presentation">TVS Apache RTR 310</li>
                <li role="presentation">TVS Apache RTR 310</li>
            </ul>
        </div> }
    </div>
  );
};

export default InputSearch;
