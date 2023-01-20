/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import classNames from "classnames";
import React from "react";
import Slider from "react-slick";
import styles from "./style.module.scss";
import Icon from "../shared/icons";
import Wrapper from "../Wrapper";

interface IArticle {
  slug: string;
  frontmatter: {
    title: string;
    image: string;
    slug: string;
  };
}

export interface IArticlesProps {
  articles: IArticle[];
}

function Articles({ articles }: IArticlesProps) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerPadding: "0",
    centerMode: true,
    swipeToSlide: true,
  };

  return (
    <div className={classNames(styles.article)}>
      <span className={classNames(styles.mainTitle)}>Articles</span>
      <Slider {...settings}>
        {articles.map((article) => (
          <div
            key={article.frontmatter.title}
            className={classNames(styles.item)}
          >
            <div className={classNames(styles.itemBox)}>
              <img
                className={classNames(styles.image)}
                src={article.frontmatter.image}
                alt=""
              />
              <Link href={article.slug} className={classNames(styles.bottom)}>
                <span className={classNames(styles.title)}>
                  {article.frontmatter.title}
                </span>
                <span className={classNames(styles.link)}>
                  <span className={classNames(styles.linkText)}>
                    Read article
                  </span>
                  <Icon
                    className={classNames(styles.arrow)}
                    name="right-arrow"
                  />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Articles;
