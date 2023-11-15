import React from "react";
import Style from "./index.module.css";
import classNames from "classnames";
import Link from "next/link";

interface sectionWrapper {
  heading?: React.ReactElement<typeof Text>;
  viewall_url?: string;
  viewall_title?:string;
  children?: React.ReactNode[] | React.ReactNode;
 
}
const SectionWrapper = ({ heading, viewall_url, viewall_title, children }: sectionWrapper) => {
  return (
    <>
      <section
        className={classNames({ [Style.sectionMain]: true, ["pt-2"]: true })}
      >
        {heading ? heading: null}
        {children}
        {viewall_url ? (<><div className={Style.viewall}>
            <Link href={viewall_url}>{viewall_title}</Link>
            <img src="https://assets.tractorjunction.com/bike-junction/assets/frontend/images/icons/linkarrow.svg?format=png&width=12&height=12" alt="arrow img" />
        </div></>):null}
      </section>
    </>
  );
};
export default SectionWrapper;
