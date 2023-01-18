const axios = require("axios");
const dayjs = require("dayjs");

const xml2js = require("xml2js");

const api = axios.create({});

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

const parseToJson = async (xml) => {
  const parser = new xml2js.Parser({ explicitArray: false, mergeAttrs: true });
  const json = await parser.parseStringPromise(xml);

  return json;
};

const createNews = (channel, item) => {
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

const resolveNews = (channel, items) => {
  const news = items.map((item) => createNews(channel, item));
  return news;
};

const sortNews = (news) => {
  const result = news.sort((a, b) => {
    const timeA = +dayjs(a.lastUpdated);
    const timeB = +dayjs(b.lastUpdated);

    return timeB - timeA;
  });

  return result;
};

const filterByUniqueNews = (news) => {
  const result = news.filter((item, index, array) => {
    return index === array.findIndex((o) => item.id === o.id);
  });
  return result;
};

const formattNews = async (source) => {
  const jsonNews = source.map(async (xml) => {
    const json = await parseToJson(xml.data);
    const items = json.rss.channel?.item;
    const news = resolveNews(json.rss.channel, items);

    return news;
  });

  const news = await Promise.all(jsonNews);
  const flatNews = news.flat();

  const filteredNews = filterByUniqueNews(flatNews);
  const result = sortNews(filteredNews);

  return result;
};

async function handler(req, res) {
  const recoursePromises = resources.map((url) => {
    return api.get(`${newsHost}/${url}`);
  });

  const result = await Promise.all(recoursePromises);

  const formattedNews = await formattNews(result);
  const limitedNews = formattedNews.slice(0, 15);

  res.status(200).send(limitedNews);
}

module.exports = handler;
