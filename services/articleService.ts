import matter from "gray-matter";
import { readdir, readFile, stat } from "node:fs/promises";
import dayjs from "dayjs";
import { IArticle, IFrontmatter } from "../components/Articles";

const fileDir = "lib/articles/data";

const sortArticles = (articles: IArticle[]) => {
  const result = [...articles].sort((a, b) => (dayjs(a.frontmatter.createdAt).isAfter(dayjs(b.frontmatter.createdAt)) ? -1 : 1));

  return result;
};

class ArticleService {
  public async getAllByCategory(type: string) {
    const files = await readdir(`${fileDir}/${type}`);

    const promises = files.map(async (fileName) => {
      const slug = fileName.replace(".md", "");
      const filePath = `${fileDir}/${type}/${fileName}`;

      const file = await readFile(filePath, "utf-8");
      const fileStat = await stat(filePath);

      const { data: frontmatter } = matter(file);

      return {
        category: type,
        slug,
        updatedTime: fileStat.ctimeMs,
        frontmatter: frontmatter as IFrontmatter,
      };
    });
    const articles = await Promise.all(promises);
    const sortedArticles = sortArticles(articles);
    return sortedArticles;
  }

  public async getSpecific(type: string, slug: string) {
    const filePath = `${fileDir}/${type}/${slug}`;

    const fileName = await readFile(`${filePath}.md`, "utf-8");
    const fileStat = await stat(`${filePath}.md`);

    const { content, data: frontmatter } = matter(fileName);
    return {
      content,
      updatedTime: fileStat.ctimeMs,
      frontmatter: frontmatter as IFrontmatter,
    };
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
    const sortedArticles = sortArticles(flattenedArticles);
    return sortedArticles;
  }
}

export default new ArticleService();
