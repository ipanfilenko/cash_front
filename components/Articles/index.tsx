import classNames from "classnames";
import React, { ReactNode } from "react";
import Slider from "react-slick";
import styles from "./style.module.scss";
import Item from "./item";

export interface IFrontmatter {
  title: string;
  image: string;
  description: string;
  slug: string;
}

export interface IArticle {
  slug: string;
  frontmatter: IFrontmatter;
  category: string;
}

export interface IArticlesProps {
  articles: IArticle[];
  title: string | ReactNode;
  className?: string;
}

function Articles({ articles, title, className }: IArticlesProps) {
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
            <Item article={article} type={article.category} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Articles;
