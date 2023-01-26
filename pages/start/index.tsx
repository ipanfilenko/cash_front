import Head from "next/head";

import Search from "../../components/Search";
import Shortcuts from "../../components/Shortcuts";
import News from "../../components/News";
import Articles, { IArticlesProps } from "../../components/Articles";
import articleService from "../../services/articleService";
import Wrapper from "../../components/Wrapper";
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

export default function Start({
  cashbackArticles,
  cricketkArticles,
}: {
  cashbackArticles: IArticlesProps["articles"];
  cricketkArticles: IArticlesProps["articles"];
}) {
  return (
    <>
      <Head>
        <title>Cash</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Wrapper className={styles.wrapper}>
        <Search />
        <Shortcuts />
        <News />
        <Articles
          type="cashback"
          title={
            <span>
              Learn more about <span className="mark">Cashback</span>
            </span>
          }
          articles={cashbackArticles}
        />
        <Articles
          type="cricket"
          title={
            <span>
              Learn more about <span className="mark">Cricket</span>
            </span>
          }
          articles={cricketkArticles}
        />
      </Wrapper>
    </>
  );
}
