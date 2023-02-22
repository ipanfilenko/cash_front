import React from "react";
import Image from "next/image";
import useNewsState from "./useNewsState";
import styles from "./style.module.scss";
import classNames from "classnames";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import Action from "./components/Action";
import NewsDto from "./news.type";

dayjs.extend(relativeTime);

// news on /start page
function News({ newsList }: { newsList: NewsDto[]}) {
  const {
    dropdownOptions,
    handleSelectAction,
    handleOpenNews,
    handleShare,
  } = useNewsState();

  if (!newsList) {
    return null;
  }

  return (
    <div className={classNames(styles.news)}>
      <ul className={styles.list} key="list">
        {newsList.map((news, index) => {
          const {
            id,
            websiteTitle,
            iconUrl,
            mediaThumbnail,
            title,
            lastUpdated,
          } = news;

          const updatedTime = dayjs(lastUpdated).fromNow();

          return (
            <React.Fragment key={id + websiteTitle}>
              <li className={styles.item} key={id + websiteTitle}>
                <div className={styles.itemBox}>
                  <div
                    className={styles.top}
                    onClick={() => handleOpenNews(news)}
                    role="button"
                  >
                    <span className={styles.title}>{websiteTitle}</span>
                    {mediaThumbnail && (
                      <Image
                        className={classNames(styles.image)}
                        src={mediaThumbnail.url}
                        alt=""
                        width={Number(mediaThumbnail.width)}
                        height={Number(mediaThumbnail.height)}
                        priority
                      />
                    )}
                  </div>
                  <div className={classNames(styles.bottom)}>
                    <div>
                      <Image
                        className={classNames(styles.logo)}
                        src={iconUrl}
                        alt=""
                        width={16}
                        height={8}
                        priority
                      />
                      <span className={classNames(styles.siteTitle)}>
                        {title} - {updatedTime}
                      </span>
                    </div>
                    <Action
                      handleShare={handleShare}
                      handleSelectAction={handleSelectAction}
                      news={news}
                      dropdownOptions={dropdownOptions}
                    />
                  </div>
                </div>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}

export default News;
