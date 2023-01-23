import { readdir, readFile } from "node:fs/promises";
import matter from "gray-matter";
import md from "markdown-it";
import Articles, { IArticlesProps } from "../../components/Articles";
import classNames from "classnames";
import styles from "./style.module.scss";
import Button from "../../components/shared/button";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

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
  console.log("paths", paths);

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

  const fileName = await readFile(`articles/${type}/${slug}.md`, "utf-8");
  const { content } = matter(fileName);

  const files = await readdir("articles/cashback");

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
