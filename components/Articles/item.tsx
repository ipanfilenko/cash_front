/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import { IArticle } from ".";
import Icon from "../shared/icons";
import styles from "./style.module.scss";

interface IItemProps {
  article: IArticle;
  type: string;
}

function Item({ article, type }: IItemProps) {
  return (
    <div className={classNames(styles.itemBox)}>
      <img
        className={classNames(styles.image)}
        src={article.frontmatter.image}
        alt=""
      />
      <Link
        href={`/article/${type}/${article.slug}`}
        className={classNames(styles.bottom)}
      >
        <span className={classNames(styles.title)}>
          {article.frontmatter.title}
        </span>
        <span className={classNames(styles.description)}>
          {article.frontmatter.description}
        </span>
        <span className={classNames(styles.link)}>
          <span className={classNames(styles.linkText)}>Read article</span>
          <Icon className={classNames(styles.arrow)} name="right-arrow" />
        </span>
      </Link>
    </div>
  );
}

export default Item;
