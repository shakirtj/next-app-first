import React from "react";
import Style from "./index.module.css";
import classNames from "classnames";
import Link from "next/link";

interface sectionWrapper {
  heading?: string;
  viewall_url?: string;
  children?: React.ReactNode[] | React.ReactNode;
 
}
const SectionWrapper = ({ heading, viewall_url, children }: sectionWrapper) => {
  return (
    <>
      <section
        className={classNames({ [Style.sectionMain]: true, ["pt-2"]: true })}
      >
        {heading ? <h2>{heading}</h2> : null}
        {children}
        <div className={Style.viewall}>
            {viewall_url ? (<Link href={viewall_url}>View all</Link>):null}
        </div>
      </section>
    </>
  );
};
export default SectionWrapper;
