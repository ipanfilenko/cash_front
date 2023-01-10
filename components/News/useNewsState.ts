import { useQuery } from "react-query";
// import axios from "axios";

// "https://cors-anywhere.herokuapp.com/https://www.treasury.gov/resource-center/data-chart-center/interest-rates/Datasets/yield.xml"

function useNewsState() {
  const { data } = useQuery("repoData", async () => {
    const result = await fetch("/api/feeds/rss/world.xml", {
      // mode: "no-cors",
    }).then(async (response) => await response.text());
    // .then((str) => new window.DOMParser().parseFromString(str, "text/xml"))
    // .then((data) => console.log(data));
    return result;
    // const result = await axios.get("https://feeds.skynews.com/feeds/rss/world.xml", {
    //   headers: {
    //     // "Host": 'feeds.skynews.com'
    //     'Access-Control-Allow-Origin' : '*',
    //   },      
    // });
    // return result;
  });
  console.log("data", data);

  return {};
}

export default useNewsState;
