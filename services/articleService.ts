import matter from "gray-matter";
import { readdir, readFile } from "node:fs/promises";

import { ArticleType } from "../components/Articles";

class ArticleService {
  public async getAllByCategory(type: ArticleType) {
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
  }

  public async getSpecific(type: ArticleType, slug: string) {
    const fileName = await readFile(`articles/${type}/${slug}.md`, "utf-8");
    const { content, data: frontmatter } = matter(fileName);
    return { content, frontmatter };
  }
}

export default new ArticleService();
