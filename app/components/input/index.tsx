import React from "react";
import styles from "./index.module.css";

const Input = () => {
  return (
    <div className={styles.inputWrp}>
        <input className="border hover:border-gray-300" type="text" placeholder="Search for Bike" name="" id="" />
    </div>
  );
};

export default Input;
