import React from "react";
import Image from "next/image";
import useNewsState, { ActionsEnum } from "./useNewsState";
import styles from "./style.module.scss";
import classNames from "classnames";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import { Adsense } from "@ctrl/react-adsense";
import Action from "./components/Action";

dayjs.extend(relativeTime);

const NEXT_PUBLIC_ADSENSE_KEY = process.env.NEXT_PUBLIC_ADSENSE_KEY;

function News() {
  const {
    isLoading,
    newsList,
    dropdownOptions,
    handleSelectAction,
    handleOpenNews,
  } = useNewsState();

  if (isLoading || !newsList) {
    return null;
  }

  return (
    <div className={classNames(styles.news)}>
      <Adsense
        client={`${NEXT_PUBLIC_ADSENSE_KEY}`}
        slot="7466683631"
        format="auto"
        responsive="true"
        style={{ display: "block" }}
        key="adsense-banner"
        
      />

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
              {index === 1 && (
                <li key="adsense-news" className={styles.item}>
                  <div className={styles.itemBox}>
                    <Adsense
                      style={{ display: "block", textAlign: "center" }}
                      layout="in-article"
                      format="fluid"
                      client={`${NEXT_PUBLIC_ADSENSE_KEY}`}
                      slot="2713050408"
                    />
                  </div>
                </li>
              )}
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
                      />
                      <span className={classNames(styles.siteTitle)}>
                        {title} - {updatedTime}
                      </span>
                    </div>
                    <Action
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
