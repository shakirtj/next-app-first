import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import Image from "next/image";
import { QuickMenu, CompanyMenu, ContactDetails } from "@/app/utils/constants";
import classNames from "classnames";

const MainFooter = () => {
  return (
    <>
      <footer className={styles.FooterWrp}>
        <div className="container md:grid-cols-2 grid lg:grid-cols-2 gap-4 pt-3 pb-6">
          <div className="grid-cols-2 md:grid-cols-2 grid lg:grid-cols-2 gap-4">
            <div className={styles.footerMenu}>
              <h4>Quick Links</h4>
              <ul>
              {QuickMenu.map((item) => {
                return (
                <li><Link href="{item.url}">{item.title}</Link></li>
                );
              })}
              </ul>
            </div>
            <div className={styles.footerMenu}>
              <h4>Company</h4>
              <ul>
                {CompanyMenu.map((item) => {
                    return (
                    <li><Link href="{item.url}">{item.title}</Link></li>
                    );
                })}
              </ul>
            </div>
          </div>
          <div className=" md:grid-cols-2 grid lg:grid-cols-2 gap-4">
            <div className={classNames("max-w-[280px]", styles.ContactInfo)}> 
              <h4>Connect With Us</h4>
               {ContactDetails.map((item:any) => {
                
                  if(!item.url){
                    return(
                        <div className={styles.contact_icon}>
                            <span>
                            <Image
                                src={item.imagePath}
                                alt="address"
                                className="address_img"
                                width={28}
                                height={24}
                            />
                            </span>
                            {item.title}
                        </div>
                    )
                  }
                    return (
                       <div className={styles.contact_icon}>
                            <span>
                            <Image
                                src={item.imagePath}
                                alt="address"
                                className="address_img"
                                width={16}
                                height={12}
                            />
                            </span>
                            <Link href={item.url}> {item.title}</Link>
                        </div>
                    );
                })}
            </div>
            <div className={styles.footerMenu}>
              <div className={styles.FooterLogo}>
                <Image
                src="/assets/images/bikeklogo_footer.webp"
                alt="Logo"
                className="logo_Footer"
                width={115}
                height={52}
                priority
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainFooter;
