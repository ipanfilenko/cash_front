/* eslint-disable @next/next/no-img-element */
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { IArticle } from ".";
import Icon from "../shared/icons";
import styles from "./style.module.scss";

dayjs.extend(relativeTime);

interface IItemProps {
  article: IArticle;
  type: string;
}

function Item({ article, type }: IItemProps) {
  const updatedTime = dayjs(article.updatedTime).fromNow();
  return (
    <div className={classNames(styles.itemBox)}>
      <img
        className={classNames(styles.image)}
        src={article.frontmatter.image}
        alt=""
      />
      <div className={classNames(styles.author)}>
        <div className={classNames(styles.authorIcon)}>
          <Icon name="logo" />
        </div>
        <div className={classNames(styles.authorBox)}>
          <span className={classNames(styles.authorName)}>Admin</span>
          <span className={classNames(styles.authorTime)}>
            {dayjs(article.updatedTime).format("DD/MM/YYYY")} - {updatedTime}
          </span>
        </div>
      </div>
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
