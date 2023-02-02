import { readdir } from "node:fs/promises";
import { useEffect, useRef } from "react";
import md from "markdown-it";
import { useRouter } from "next/router";
import Articles, { IArticlesProps } from "../../components/Articles";
import classNames from "classnames";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Button from "../../components/shared/button";
import articleService from "../../services/articleService";
import Wrapper from "../../components/Wrapper";
import Head from "next/head";
import Layout from "../../components/Layout";
import Icon from "../../components/shared/icons";
import styles from "./style.module.scss";

dayjs.extend(relativeTime);

export async function getStaticPaths() {
  const dirs = await readdir("lib/articles/data");
  const allDirs = dirs.map(async (dirname) => {
    const files = await readdir(`lib/articles/data/${dirname}`);

    return files.map((file) => [dirname, file.replace(".md", "")]);
  });

  const files = await Promise.all(allDirs);
  const flatFiles = files.flat();
  const paths = flatFiles.map((file) => ({
    params: {
      slug: file,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(
  context: {
    params: any;
  } & IArticlesProps
) {
  const [type, slug] = context.params.slug;

  const {
    content,
    frontmatter,
    updatedTime,
  } = await articleService.getSpecific(type, slug);

  const articles = await articleService.getAllByCategory(type);
  const filteredArticles = articles.filter((article) => article.slug !== slug);
  return {
    props: {
      currentArticle: { frontmatter, content, updatedTime },
      articles: filteredArticles,
    },
  };
}

export default function ArticlePage({
  currentArticle,
  articles,
}: Awaited<ReturnType<typeof getStaticProps>>["props"]) {
  const container = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const pathname = router.asPath;
  const { content, frontmatter, updatedTime } = currentArticle;

  useEffect(() => {
    const images = container.current?.querySelectorAll("img");

    images?.forEach((image) => {
      image.parentElement?.classList.add("image-container");
    });
  }, [pathname]);

  const diffTime = dayjs(updatedTime).fromNow();
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
      </Head>
      <Layout>
        <Wrapper>
          <div className={classNames(styles.author)}>
            <Icon className={classNames(styles.authorIcon)} name="admin" />
            <div className={classNames(styles.authorBox)}>
              <span className={classNames(styles.authorName)}>Admin</span>
              <span className={classNames(styles.authorTime)}>
                {dayjs(updatedTime).format("DD/MM/YYYY")} - {diffTime}
              </span>
            </div>
          </div>
          <div className={classNames("static-content", styles.content)}>
            <div
              ref={container}
              dangerouslySetInnerHTML={{ __html: md().render(content) }}
            />
          </div>
          <Articles
            className={classNames(styles.list)}
            title="Other Articles"
            articles={articles}
          />
          <Button as="link" href="/" className={classNames(styles.button)}>
            Main page
          </Button>
        </Wrapper>
      </Layout>
    </>
  );
}
