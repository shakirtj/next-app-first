import React from "react";
import Style from "./index.module.css";
import classNames from "classnames";
interface NewsCard{
    image:string,
    title:string,
    date:string,
    content:string,
    url:string,
    className?:string,
    children: React.ReactNode[] | React.ReactNode
}

const NewsCard = ({
 image,
 title,
 date,
 content,
 className,
 url
}: NewsCard) => {
  return (
    <div className={className as string}>
      <a href={url}>
      <div className={Style.news_content}>
        <img
          width={388}
          height={183}
          src={image}
          alt="news img"
        />
        <div className={Style.title}>
          {title}
        </div>
        <div className={Style.publised}>
          <img src="/assets/images/icons/calender-n.png" alt="" />
          {date}
        </div>
        <div className={Style.content}>
            {content}
        </div>
      </div>
      </a>
    </div>
  );
};
export default NewsCard;
