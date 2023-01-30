import { readdir } from "node:fs/promises";
import { useEffect, useRef } from "react";
import md from "markdown-it";
import { useRouter } from "next/router";
import Articles, {
  ArticleType,
  IArticle,
  IArticlesProps,
  IFrontmatter,
} from "../../components/Articles";
import classNames from "classnames";
import styles from "./style.module.scss";
import Button from "../../components/shared/button";
import articleService from "../../services/articleService";
import Wrapper from "../../components/Wrapper";
import Head from "next/head";
import Layout from "../../components/Layout";

export async function getStaticPaths() {
  const dirs = await readdir("articles");
  const allDirs = dirs.map(async (dirname) => {
    const files = await readdir(`articles/${dirname}`);

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

  const { content, frontmatter } = await articleService.getSpecific(type, slug);

  const articles = await articleService.getAllByCategory(type);
  const filteredArticles = articles.filter((article) => article.slug !== slug);
  return {
    props: {
      type,
      content,
      currentArticle: { frontmatter, content },
      articles: filteredArticles,
    },
  };
}

export default function ArticlePage({
  type,
  currentArticle,
  articles,
}: {
  currentArticle: { content: string; frontmatter: IFrontmatter };
  type: ArticleType;
  articles: IArticle[];
}) {
  const container = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const pathname = router.asPath;
  const { content, frontmatter } = currentArticle;

  useEffect(() => {
    const images = container.current?.querySelectorAll("img");

    images?.forEach((image) => {
      image.parentElement?.classList.add("image-container");
    });
  }, [pathname]);

  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Wrapper>
          <div className={classNames("static-content", styles.content)}>
            <div
              ref={container}
              dangerouslySetInnerHTML={{ __html: md().render(content) }}
            />
          </div>
          <Articles
            type={type}
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