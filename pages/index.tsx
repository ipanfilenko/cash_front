import Head from "next/head";


import Search from "../components/Search";
import Shortcuts from "../components/Shortcuts";
import News from "../components/News";
import Articles, { IArticlesProps } from "../components/Articles";
import articleService from "../services/articleService";

export async function getServerSideProps() {
  const cashbackArticles = await articleService.getAllByCategory("cashback");
  const cricketkArticles = await articleService.getAllByCategory("cricket");
  return {
    props: {
      cashbackArticles,
      cricketkArticles,
    },
  };
}

export default function Home({
  cashbackArticles,
  cricketkArticles,
}: {
  cashbackArticles: IArticlesProps["articles"];
  cricketkArticles: IArticlesProps["articles"];
}) {
  const NEXT_PUBLIC_ADSENSE_KEY = process.env.NEXT_PUBLIC_ADSENSE_KEY;

  return (
    <>
      <Head>
        <title>Cash</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${NEXT_PUBLIC_ADSENSE_KEY}`}
          crossOrigin="anonymous"
        ></script>
      </Head>
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
    </>
  );
}
