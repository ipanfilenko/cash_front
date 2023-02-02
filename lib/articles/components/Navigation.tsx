import classNames from "classnames";
import React from "react";
import styles from "./style.module.scss";

interface INavigationProps {
  categories: string[];
  currentCategory: "all" | string;
  setCategory(type: "all" | string): void;
  className?: string;
}

function Navigation({
  categories,
  currentCategory,
  setCategory,
  className,
}: INavigationProps) {
  return (
    <div className={classNames(className, styles.navigation)}>
      <ul>
        <li
          onClick={() => setCategory("all")}
          className={classNames({
            [styles.isActive]: currentCategory === "all",
          })}
        >
          All
        </li>
        {categories.map((category, index) => (
          <li
            key={category}
            onClick={() => setCategory(category)}
            className={classNames({
              [styles.isActive]: currentCategory === category,
            })}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navigation;
