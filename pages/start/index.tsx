import Head from "next/head";
import { useQuery } from "react-query";

import Search from "../../components/Search";
import Shortcuts from "../../components/Shortcuts";
import News from "../../components/News";
import Articles, { IArticlesProps } from "../../components/Articles";
import articleService from "../../services/articleService";
import { setCacheForKey, getCacheForKey } from "../../services/cacheService";
import Wrapper from "../../components/Wrapper";
import NewsDto from "../../components/News/news.type";

import styles from "./style.module.scss";

export async function getStaticProps() {
  const cashbackArticles = await articleService.getAllByCategory("cashback");
  const cricketkArticles = await articleService.getAllByCategory("cricket");
  return {
    props: {
      cashbackArticles,
      cricketkArticles,
    },
  };
}

const nodeEnv = process.env.NODE_ENV;

const apiHost =
  nodeEnv === "production"
    ? process.env.NEXT_PUBLIC_API_HOST
    : "http://localhost:3000";

export default function Start({
  cashbackArticles,
  cricketkArticles,
}: {
  cashbackArticles: IArticlesProps["articles"];
  cricketkArticles: IArticlesProps["articles"];
}) {

  const { data: newsList = [] } = useQuery<NewsDto[]>("repoData", async () => {
    const cacheKey = 'news';
    const cache = getCacheForKey(cacheKey);

    if (cache) {
      return JSON.parse(cache);
    }

    const result = await fetch(`${apiHost}/api/news`).then(
      async (response) => await response.json()
    );

    setCacheForKey(cacheKey, JSON.stringify(result));

    return result;
  });

  return (
    <>
      <Head>
        <title>Cash</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Wrapper className={styles.wrapper}>
        <Search />
        <Shortcuts />
        {
          newsList.length > 0 && (
            <>
              <News newsList={newsList} />
              <Articles
                title={
                  <span>
                    Learn more about <span className="mark">Cashback</span>
                  </span>
                }
                articles={cashbackArticles}
              />
              <Articles
                title={
                  <span>
                    Learn more about <span className="mark">Cricket</span>
                  </span>
                }
                articles={cricketkArticles}
              />
            </>
          )
        }
      </Wrapper>
    </>
  );
}
