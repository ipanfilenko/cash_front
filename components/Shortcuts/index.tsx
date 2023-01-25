/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
import ShortcutModel, { Shortcut } from "./shortcuts.model";
import styles from "./style.module.scss";

import androidService from "../../services/androidService";
import ShortcutEnum from "./shortcut.enum";

function Shortcuts() {
  const shortcuts = ShortcutModel.favorite;
  const router = useRouter();

  const handleClick = (shortcut: Shortcut) => {
    if (shortcut.id === ShortcutEnum.EARNINGS) {
      androidService.openEarnings();
      return;
    }
    if (shortcut.url) {
      router.push(shortcut.url ?? "");
    }
  };

  return (
    <div className={classNames(styles.wrapper)}>
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
                    <img src={iconPath} alt="" />
                  </div>
                  <span className={classNames(styles.title)}>{title}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Shortcuts;
