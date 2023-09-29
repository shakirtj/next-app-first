import React from "react";
import Styles from "./index.module.css";

const CompareCard = () =>{
    return(
      <div className={Styles.compareCard_Wrp}>
        <div className={Styles.comapreMain}>
            <div className={Styles.compareCard_Inner}>
                <div className={Styles.compareItem}>
                   <img src="/assets/images/royal_enfield.webp" alt="compare img" height={130} width={194} />
                   <div className={Styles.compareDetails}>
                     <h3>Royal Enfield</h3>
                     <p className="mt-3 mb-3">Classic 350 Halcyon - Single Channel ABS</p>
                     <span>1.96 Lakh</span>
                   </div>
                </div>
                <span className={Styles.vs_text}>vs</span>
                <div className={Styles.compareItem}>
                   <img src="/assets/images/royal_enfield.webp" alt="compare img" height={130} width={194} />
                   <div className={Styles.compareDetails}>
                     <h3>Royal Enfield</h3>
                     <p className="mt-3 mb-3">Classic 350 Halcyon - Single Channel ABS</p>
                     <span>1.96 Lakh</span>
                   </div>
                </div>
            </div>
            <button className="primary_btn mt-4">Compare</button>
        </div>
        </div>
    )
}

export default CompareCard;