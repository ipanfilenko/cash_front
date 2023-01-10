import React from "react";
import classNames from "classnames";
import ShortcutModel, { Shortcut } from "./shortcuts.model";
import styles from "./style.module.scss";

function Shortcuts() {
  const shortcuts = ShortcutModel.favorite;

  const handleClick = (shortcut: Shortcut) => {};

  return (
    <div className={classNames(styles.shortcuts)}>
      <ul className={classNames(styles.list)}>
        {shortcuts.map((shortcut) => {
          const { iconPath, id, title, isFull } = shortcut;
          return (
            <li key={id} className={classNames(styles.item)}>
              <button
                className={classNames(styles.button)}
                onClick={() => handleClick(shortcut)}
              >
                <div
                  className={classNames(
                    styles.image,
                    isFull && styles.imageFull
                  )}
                >
                  <img src={iconPath} />
                </div>
                <span className={classNames(styles.title)}>{title}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Shortcuts;
