/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import classNames from "classnames";
import React, { ReactNode } from "react";
import Slider from "react-slick";
import styles from "./style.module.scss";
import Icon from "../shared/icons";

export type ArticleType = "cashback" | "cricket";

interface IArticle {
  slug: string;
  frontmatter: {
    title: string;
    image: string;
    slug: string;
  };
}

export interface IArticlesProps {
  type: ArticleType;
  articles: IArticle[];
  title: string | ReactNode;
  className?: string;
}

function Articles({ articles, title, className, type }: IArticlesProps) {
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
    <div className={classNames(styles.article, className)}>
      <span className={classNames(styles.mainTitle)}>{title}</span>
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
              <Link
                href={`/article/${type}_${article.slug}`}
                className={classNames(styles.bottom)}
              >
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
