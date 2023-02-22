type NewsDto = {
    title: string;
    websiteTitle: string;
    website: string;
    iconUrl: string;
    coverUrl: string;
    description: string;
    visualUrl: string;
    lastUpdated: string;
    // lastUpdated = it.pubDate?.toTimeStamp() ?: System.currentTimeMillis(),
    id: string;
    mediaThumbnail?: {
      url: string;
      width: string;
      height: string;
    };
    type?: number;
  };
  
  export default NewsDto;
  