import { useEffect, useState } from "react";
import dayjs from "dayjs";

import articleService from "../../../services/articleService";

interface Props {
  articles: Awaited<ReturnType<typeof articleService.getAll>>;
}

const useBlogState = ({ articles }: Props) => {
  const [data, setData] = useState<Props["articles"]>([]);
  const [currentCategory, setCurrentCategory] = useState<"all" | string>("all");

  useEffect(() => {
    const filteredArticles = articles
      .filter((article) => {
        if (currentCategory === "all") { return true; }
        
        return article.category === currentCategory;
      })
      .sort((a, b) => (a.category >= b.category ? 1 : -1))

    setData(filteredArticles);
  }, [articles, currentCategory]);

  return { data, currentCategory, setCurrentCategory };
};

export default useBlogState;
