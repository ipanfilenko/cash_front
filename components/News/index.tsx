import React from "react";
import useNewsState from "./useNewsState";

function News() {
  useNewsState();
  return <div>News</div>;
}

export default News;
