import React from "react"
import Style from "./index.module.css"
import SectionWrapper from "../SectionWrapper";
import SquareCard from "../SquareCard";

const ToolService = () =>{
    return(
       <SectionWrapper
       heading={<h3>Tools And Service</h3>}
       >
        <div className={Style.mainWrp}>
        <SquareCard
        className={Style.red}
        height={55}
        width={75}
        image_url="https://bikes.tractorjunction.com/_next/image?url=https%3A%2F%2Fimages.tractorjunction.com%2Fabout_n_aeab58ae69.webp&w=96&q=75"
        title="About Us"
       link_url="#"
        />
        </div>
       </SectionWrapper>
    );
};
export default ToolService;