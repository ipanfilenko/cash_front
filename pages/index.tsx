import Head from "next/head";
import matter from "gray-matter";
import { readdir, readFile } from "node:fs/promises";
import Search from "../components/Search";
import Shortcuts from "../components/Shortcuts";
import News from "../components/News";
import Articles, { IArticlesProps } from "../components/Articles";

export async function getServerSideProps() {
  const files = await readdir("articles");

  const promises = files.map(async (fileName) => {
    const slug = fileName.replace(".md", "");
    const file = await readFile(`articles/${fileName}`, "utf-8");

    const { data: frontmatter } = matter(file);

    return {
      slug,
      frontmatter,
    };
  });
  const articles = await Promise.all(promises);
  return {
    props: {
      articles,
    },
  };
}

export default function Home({ articles }: IArticlesProps) {
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
      <Articles articles={articles} />
    </>
  );
}
