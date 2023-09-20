"use client";
import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import InputSearch from "../../components/search-input/index";
import classNames from "classnames";
import Link from "next/link";
import useResponsive from "../../hooks/useResponsive";
import { WEB_SMALL,BikeTopMenu } from "../../utils/constants";
import { list } from "postcss";

const BikeHeader = () => {
  const isMob = useResponsive(WEB_SMALL);
  return (
    <header className={styles.header_main}>
      <div className="container">
        <div className={styles.main_LogoWrp}>
          <a href="#">
            <Image
              src="/assets/images/logo_bikejunction_f30903095f.png"
              alt="Logo"
              className="logo_img"
              width={115}
              height={52}
              priority
            />
          </a>
          {isMob === false ? <InputSearch /> : null}
          {isMob === false ? (
            <div className={styles.signBtn}>
              <Image
                src="/assets/images/icons/user-w.webp"
                alt="user"
                className="signBtn_img"
                width={14}
                height={16}
                priority
              />
              <span>Sign In</span>
            </div>
          ) : (
            <div className={styles.searchHam_icons}>
              <Image
                src="/assets/images/icons/search-h.webp"
                alt="search"
                className="search_img"
                width={21}
                height={21}
              />
              <Image
                src="/assets/images/icons/ham-icon.png"
                alt="ham"
                className="ham_img"
                width={21}
                height={18}
              />
            </div>
          )}
        </div>

        {isMob === false ? (
          <div className={styles.mainMenu_Wrp}>
            <ul>
              <MenuItems BikeTopMenu = {BikeTopMenu} />
            </ul>
          </div>
        ) : null}
      </div>
    </header>
  );
};

const MenuItems = ({BikeTopMenu}:any) => {
  return (
    <>
      {BikeTopMenu.map((list:any) => {
        const hasChildren = list.children?.length ?? 0;
        if (!hasChildren) {
          return (
            <li>
              <Link href="{item.url}">{list.title}</Link>
            </li>
          );
        }
        return (
          <li className={styles.drop_arrow}>
            {list.title}
            <ul className={styles.topmenu_dropdownlist}>
               <MenuItems BikeTopMenu={list?.children} />
            </ul>
          </li>
        );
      })}
    </>
  );
};

export default BikeHeader;
