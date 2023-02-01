import classNames from "classnames";
import Head from "next/head";
import React from "react";
import Article from "../../components/Articles/item";
import Layout from "../../components/Layout";
import Wrapper from "../../components/Wrapper";
import articleService from "../../services/articleService";
import Breadcrumbs from "../../lib/articles/components/Breadcrumbs";
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
          <Breadcrumbs
            setCategory={setCurrentCategory}
            currentCategory={currentCategory}
            categories={categories}
          />
          <div className={classNames("static-content", styles.blog)}>
            <h1 className={classNames(styles.title, "page-title")}>Blog</h1>
            <span className={classNames(styles.subtitle, "page-subtitle")}>
              We are constantly updating our blog with the latest news and
              promotions
            </span>
          </div>
          <div>
            {data.map((article, index) => (
              <div key={index}>
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
