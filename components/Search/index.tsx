import React from "react";
import classNames from "classnames";
import Icon from "../icons";
import styles from "./style.module.scss";

function Search() {
  const handleSearch = () => {
    console.log("search");
  };
  return (
    <div className={classNames(styles.search)}>
      <button className={classNames(styles.button)} onClick={handleSearch}>
        <Icon className={classNames(styles.svg)} name="search" />
        <span className={classNames(styles.text)}>Google or URL</span>
      </button>
    </div>
  );
}

export default Search;
