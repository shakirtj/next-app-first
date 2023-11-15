import React from "react";
import Style from "./index.module.css"
import Link from "next/link";
import classNames from "classnames";

interface filterChip{
    value:string,
    url:string,
    children?: React.ReactNode[] | React.ReactNode;
    className?:string;
}

const FilterChip = ({value, url, className, children}: filterChip) =>{
    return(
       <div className={classNames(Style.FIlterItem, {[className as string]:className})}>
        <Link href={url}>{value}</Link>
       </div>
    );
};

export default FilterChip;