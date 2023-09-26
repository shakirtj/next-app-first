"use client";
import React, { useState } from "react";
import styles from "./index.module.css";
import classNames from "classnames";
const arr = ["Bike", "Scooter", "Electric Bike", "Electric Scooters"];

const Tab = () => {
  const [selectedTab, setSelectedTab] = useState("Bike");
  return (
    <>
    <div className={styles.tabWrp}>
      {arr.map((item) => {
        return (
          <button
            onClick={() => {
              setSelectedTab(item);
            }}
            className={classNames(styles.tabItem, {
              [styles.active]: selectedTab === item,
            })}
          >
            {item}
          </button>
        );
      })}
     </div>
    </>
  );
};
export default Tab;
