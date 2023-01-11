// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import api from "../../services/axios";
import { AxiosResponse } from "axios";
import dayjs from "dayjs";
import NewsDto from "../../components/News/news.type";

const xml2js = require("xml2js");

const newsHost = "https://feeds.skynews.com";

const worldResource = "feeds/rss/world.xml";
const businessResource = "feeds/rss/business.xml";
const politicsResource = "feeds/rss/politics.xml";
const technologyResource = "feeds/rss/technology.xml";

const resources = [
  worldResource,
  businessResource,
  politicsResource,
  technologyResource,
];

const parseToJson = async (xml: string) => {
  const parser = new xml2js.Parser({ explicitArray: false, mergeAttrs: true });
  const json = await parser.parseStringPromise(xml);

  return json;
};

const createNews = (channel: any, item: any): NewsDto => {
  return {
    title: channel.category ?? "",
    websiteTitle: item.title ?? "",
    website: item.link ?? "",
    iconUrl: channel.image?.url ?? "",
    coverUrl: item.content?.url ?? "",
    description: item["media:description"]?._ ?? "",
    visualUrl: item.link ?? "",
    lastUpdated: item.pubDate ?? "",
    id: item.guid,
    mediaThumbnail: item["media:thumbnail"],
    type: 1,
  };
};

const resolveNews = (channel: any, items: any[]) => {
  const news = items.map((item) => createNews(channel, item));
  return news;
};

const sortNews = (news: NewsDto[]): NewsDto[] => {
  const result = news.sort((a, b) => {
    const timeA = +dayjs(a.lastUpdated);
    const timeB = +dayjs(b.lastUpdated);
    return timeB - timeA;
  });
  return result;
};

const filterByUniqueNews = (news: NewsDto[]): NewsDto[] => {
  const result = news.filter((item, index, array) => {
    return index === array.findIndex((o) => item.id === o.id);
  });
  return result;
};

const formattNews = async (source: AxiosResponse<string, any>[]) => {
  const jsonNews = source.map(async (xml) => {
    const json = await parseToJson(xml.data);
    const items = json.rss.channel?.item;
    const news = resolveNews(json.rss.channel, items);
    const sortedNews = sortNews(news);
    const result = filterByUniqueNews(sortedNews);
    return result;
  });

  const flatNews = await Promise.all(jsonNews);
  return flatNews.flat();
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<NewsDto[]>
) {
  const recoursePromises = resources.map((url) => {
    return api.get<string>(`${newsHost}/${url}`);
  });

  const result = await Promise.all(recoursePromises);

  const formattedNews = await formattNews(result);
  const limitedNews = formattedNews.slice(0, 15);

  res.status(200).json(limitedNews);
}
