import React, { ReactNode } from "react";
import styles from "./index.module.css";
interface Dealercard{
  title:string,
  address:string;
  children:ReactNode;
}
const DealerCard = (
  {
    title,
    address,
    children,
  }: Dealercard
) => {
  return (
    <div className={styles.Dealer_infoWrap}>
      <div className={styles.Dealer_Title}>{title}</div>
      <div className={styles.Dealer_Address}>
        {address}
        <div className={styles.Dealer_fullAdd}>
          {address}
        </div>
      </div>
      <button className="borderBtn">Contact Dealer</button>
    </div>
  );
};

export default DealerCard;
