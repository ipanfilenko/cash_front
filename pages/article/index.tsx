import classNames from "classnames";
import Head from "next/head";
import React from "react";
import { Adsense } from "@ctrl/react-adsense";

import Article from "../../components/Articles/item";
import Layout from "../../components/Layout";
import Wrapper from "../../components/Wrapper";
import articleService from "../../services/articleService";
import Navigation from "../../lib/articles/components/Navigation";
import useBlogState from "../../lib/articles/hooks/useBlogState";
import styles from "./style.module.scss";

export async function getStaticProps() {
  const articles = await articleService.getAll();

  const categories = await articleService.getCategories();
  return {
    props: {
      articles,
      categories,
    },
  };
}

interface IBlogProps {
  articles: Awaited<ReturnType<typeof articleService.getAll>>;
  categories: string[];
}

function Blog({ articles, categories }: IBlogProps) {
  const { currentCategory, data, setCurrentCategory } = useBlogState({
    articles,
  });
  return (
    <>
      <Head>
        <title>Octopus CashBack Browser: Blog</title>
      </Head>
      <Layout>
        <Wrapper>
          <div className={styles.adsenseWrapper}>
            <Adsense
              client={`${process.env.NEXT_PUBLIC_ADSENSE_KEY}`}
              slot="7466683631"
              format="auto"
              responsive="true"
              style={{ display: "block" }}
              key="adsense-banner"
            />
          </div>
          <div className={classNames("static-content", styles.blog)}>
            <h1 className={classNames(styles.title, "page-title")}>Blog</h1>
            <span className={classNames(styles.subtitle, "page-subtitle")}>
              We are constantly updating our blog with the latest news and
              promotions
            </span>
          </div>
          <Navigation
            setCategory={setCurrentCategory}
            currentCategory={currentCategory}
            categories={categories}
          />
          <div className={styles.blogList}>
            {data.map((article, index) => (
              <div key={index} className={styles.blogItem}>
                <Article article={article} type={article.category} />
              </div>
            ))}
          </div>
        </Wrapper>
      </Layout>
    </>
  );
}

export default Blog;
