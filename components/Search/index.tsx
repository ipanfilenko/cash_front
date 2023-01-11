import React from "react";
import classNames from "classnames";
import Icon from "../shared/icons";
import styles from "./style.module.scss";

import androidService from "../../services/androidService";

function Search() {
  const handleSearch = () => {
    androidService.search();
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
