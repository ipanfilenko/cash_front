import Head from "next/head";
import matter from "gray-matter";
import { readdir, readFile } from "node:fs/promises";

import Search from "../components/Search";
import Shortcuts from "../components/Shortcuts";
import News from "../components/News";
import Articles, { ArticleType, IArticlesProps } from "../components/Articles";

const getCashbackArticles = async (type: ArticleType) => {
  const files = await readdir(`articles/${type}`);

  const promises = files.map(async (fileName) => {
    const slug = fileName.replace(".md", "");
    const file = await readFile(`articles/${type}/${fileName}`, "utf-8");

    const { data: frontmatter } = matter(file);

    return {
      slug,
      frontmatter,
    };
  });
  const articles = await Promise.all(promises);
  return articles;
};

export async function getServerSideProps() {
  const cashbackArticles = await getCashbackArticles("cashback");
  const cricketkArticles = await getCashbackArticles("cricket");
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
