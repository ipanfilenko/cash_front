import matter from "gray-matter";
import { readdir, readFile } from "node:fs/promises";
import { IFrontmatter } from "../components/Articles";

class ArticleService {
  public async getAllByCategory(type: string) {
    const files = await readdir(`lib/articles/data/${type}`);

    const promises = files.map(async (fileName) => {
      const slug = fileName.replace(".md", "");
      const file = await readFile(`lib/articles/data/${type}/${fileName}`, "utf-8");

      const { data: frontmatter } = matter(file);

      return {
        category: type,
        slug,
        frontmatter: frontmatter as IFrontmatter,
      };
    });
    const articles = await Promise.all(promises);
    return articles;
  }

  public async getSpecific(type: string, slug: string) {
    const fileName = await readFile(`lib/articles/data/${type}/${slug}.md`, "utf-8");
    const { content, data: frontmatter } = matter(fileName);
    return { content, frontmatter: frontmatter as IFrontmatter };
  }

  public async getCategories() {
    const categories = await readdir("lib/articles/data");
    return categories;
  }

  public async getAll() {
    const categories = await this.getCategories();
    const promises = categories.map(async (category) => {
      const articles = await this.getAllByCategory(category);
      return articles.map((article) => ({ ...article, category }));
    });
    const articles = await Promise.all(promises);
    const flattenedArticles = articles.flat();
    return flattenedArticles;
  }
}

export default new ArticleService();
