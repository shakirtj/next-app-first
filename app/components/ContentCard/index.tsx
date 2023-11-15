"use client"
import React, { ReactNode, useState } from "react";
import  Style  from "./index.module.css";
import SectionWrapper from "../SectionWrapper";
import classNames from "classnames";

interface ContentCard{
   contentHeading?:React.ReactElement<typeof Text>;
 contentText:string;
 children: React.ReactNode[] | React.ReactNode;
}

const ContentCard = ({
   contentHeading,
 contentText,
 children,
}: ContentCard) =>{
    const [read, setRead] = useState(true);
    const  handleClick =() =>{
        setRead(!read);
     }
 
    return(
       <SectionWrapper
       >
         <div className={Style.contentHeading}>{contentHeading}</div>
        <div className={Style.contentSummery_wrp}>
         <div className={classNames(read?Style.collaspe_readMore : "" , Style.contentSummery)}>
         <p>{contentText}</p>
         </div>
         <div className={Style.readMore} onClick={handleClick}>Read More</div>
       </div>
       </SectionWrapper>
    );
};
export default ContentCard;