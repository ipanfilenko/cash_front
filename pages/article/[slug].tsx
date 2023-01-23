import { readdir, readFile } from "node:fs/promises";
import { useEffect, useRef } from "react";
import matter from "gray-matter";
import md from "markdown-it";
import Articles, { IArticlesProps } from "../../components/Articles";
import classNames from "classnames";
import styles from "./style.module.scss";
import Button from "../../components/shared/button";
import { useRouter } from "next/router";
import articleService from "../../services/articleService";

export async function getStaticPaths(context: any) {
  const dirs = await readdir("articles");
  const allDirs = dirs.map(async (dirname) => {
    const files = await readdir(`articles/${dirname}`);
    return files.map((file) => `${dirname}_${file.replace(".md", "")}`);
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
  const [type, slug] = context.params.slug.split("_");

  const content = await articleService.getSpecific(type, slug);

  const articles = await articleService.getAllByCategory(type);
  const filteredArticles = articles.filter((article) => article.slug !== slug);
  return {
    props: {
      content,
      articles: filteredArticles,
    },
  };
}

export default function ArticlePage({
  content,
  articles,
}: { content: string } & IArticlesProps) {
  const router = useRouter();
  const data = router;
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const images = container.current?.querySelectorAll("img");
    images?.forEach((image) => {
      image.parentElement?.classList.add("image-container");
    });
  }, []);

  return (
    <div>
      <div className={classNames("static-content", styles.content)}>
        <div
          ref={container}
          dangerouslySetInnerHTML={{ __html: md().render(content) }}
        />
      </div>
      <Articles
        type="cashback"
        className={classNames(styles.list)}
        title="Other Articles"
        articles={articles}
      />
      <Button as="link" href="/" className={classNames(styles.button)}>
        Main page
      </Button>
    </div>
  );
}