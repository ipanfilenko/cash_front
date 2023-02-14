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
      action: (news: NewsDto) => androidService.loadUrlInNewTab(news.website),
    },
    {
      label: "Copy link address",
      value: ActionsEnum.COPY_LINK_ADDRESS,
      action: (news: NewsDto) => androidService.copyLinkAddress(news.visualUrl),
    },
    {
      label: "Copy link text",
      value: ActionsEnum.COPY_LINK_TEXT,
      action: (news: NewsDto) => androidService.copyLinkText(news.websiteTitle),
    },
  ];

  const handleSelectAction = (news: NewsDto, action: ActionsEnum) => {
    const selectedOption = dropdownOptions.find(option => option.value === action);

    if (selectedOption) {
      selectedOption.action(news);
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
