import { readdir } from "node:fs/promises";
import { useEffect, useRef, useState } from "react";
import md from "markdown-it";
import { useRouter } from "next/router";
import classNames from "classnames";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Image from "next/image";
import Head from "next/head";
import { Adsense } from "@ctrl/react-adsense";

import articleService from "../../services/articleService";
import Button from "../../components/shared/button";
import Wrapper from "../../components/Wrapper";
import Articles, { IArticlesProps } from "../../components/Articles";
import Layout from "../../components/Layout";
import Icon from "../../components/shared/icons";
import androidService from "../../services/androidService";

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
  const [isDevice, setIsDevice] = useState(false);

  const router = useRouter();
  const pathname = router.asPath;
  const { content, frontmatter } = currentArticle;

  useEffect(() => {
    const images = container.current?.querySelectorAll("img");

    images?.forEach((image) => {
      image.parentElement?.classList.add("image-container");
    });
  }, [pathname]);

  useEffect(() => {
    const isMovile = androidService.isDevice();
    setIsDevice(isMovile);
  }, []);

  const diffTime = dayjs(frontmatter.createdAt).fromNow();

  const mainPagePath = isDevice ? "/start" : "/";
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
      </Head>
      <Layout>
        <Wrapper>
          <div className={styles.adsenseWrapper}>
              <Adsense
                style={{ display: "block", textAlign: "center" }}
                layout="in-article"
                format="fluid"
                client={`${process.env.NEXT_PUBLIC_ADSENSE_KEY}`}
                slot="2713050408"
              />
          </div>

          <div className={classNames(styles.author)}>
            <div className={classNames(styles.authorIcon)}>
            {
              frontmatter.authorIcon
             ? <Image
                  alt={frontmatter.author || 'Admin'}
                  src={frontmatter.authorIcon}
                  width="32"
                  height="32" 
                  className={classNames(styles.authorIcon)}
                  priority
                />
             : <Icon name="logo" />
          }
            </div>
            <div className={classNames(styles.authorBox)}>
              <span className={classNames(styles.authorName)}>{frontmatter.author || 'Admin'}</span>
              <span className={classNames(styles.authorTime)}>
                {dayjs(frontmatter.createdAt).format("DD/MM/YYYY")} - {diffTime}
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
          <Button
            as="link"
            href={mainPagePath}
            className={classNames(styles.button)}
          >
            Main page
          </Button>
        </Wrapper>
      </Layout>
    </>
  );
}
