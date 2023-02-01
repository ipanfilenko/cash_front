import { useQuery } from "react-query";
import { useRouter } from "next/router";
import NewsDto from "./news.type";
import androidService from "../../services/androidService";

const nodeEnv = process.env.NODE_ENV;

const apiHost =
  nodeEnv === "production"
    ? process.env.NEXT_PUBLIC_API_HOST
    : "http://localhost:3000";

export enum ActionsEnum {
  OPEN_IN_NEW_TAB = "open-in-new-tab",
  COPY_LINK_ADDRESS = "copy-link",
  COPY_LINK_TEXT = "copy-text",
}

function useNewsState() {
  const router = useRouter();
  const { data, isLoading } = useQuery<NewsDto[]>("repoData", async () => {
    const result = await fetch(`${apiHost}/api/news`).then(
      async (response) => await response.json()
    );

    return result;
  });

  const dropdownOptions = [
    {
      label: "Open in new tab",
      value: ActionsEnum.OPEN_IN_NEW_TAB,
    },
    {
      label: "Copy link address",
      value: ActionsEnum.COPY_LINK_ADDRESS,
    },
    {
      label: "Copy link text",
      value: ActionsEnum.COPY_LINK_TEXT,
    },
  ];

  const handleSelectAction = (news: NewsDto, action: ActionsEnum) => {
    if (action === ActionsEnum.OPEN_IN_NEW_TAB) {
      androidService.loadUrlInNewTab(news.website);
    }
  };

  const handleOpenNews = (news: NewsDto) => {
    router.push(news.visualUrl ?? news.website);
  };

  const handleShare = (news: NewsDto) => {
    androidService.share(news.websiteTitle, news.website);
  };

  return {
    newsList: data,
    isLoading,
    dropdownOptions,
    handleSelectAction,
    handleOpenNews,
    handleShare,
  };
}

export default useNewsState;
