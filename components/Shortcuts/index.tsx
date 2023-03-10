/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import classNames from "classnames";
import Slider from "react-slick";

import ShortcutModel, { Shortcut } from "./shortcuts.model";
import styles from "./style.module.scss";

import androidService from "../../services/androidService";
import ShortcutEnum from "./shortcut.enum";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  centerPadding: "0",
  centerMode: false,
  swipeToSlide: true,
};

function Shortcuts() {
  const shortcuts = ShortcutModel.favorite;
  const router = useRouter();

  const handleClick = (shortcut: Shortcut) => {
    if (shortcut.id === ShortcutEnum.EARNINGS) {
      androidService.openEarnings();
      return;
    }

    if (shortcut.url && (shortcut.id === ShortcutEnum.GAME || shortcut.id === ShortcutEnum.QUIZ)) {
      androidService.loadUrlOutsideBrowser(shortcut.url);
      return;
    }

    if (shortcut.url) {
      router.push(shortcut.url ?? "");
    }
  };

  return (
    <div className={classNames(styles.wrapper)}>
      <div className={classNames(styles.shortcuts)}>
        <Slider {...settings}>
          {shortcuts.map((shortcut) => {
            const { iconPath, id, title, isFull } = shortcut;
            return (
              <div key={id} className={classNames(styles.item)}>
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
              </div>
            );
          })}
      </Slider>  
      </div>
    </div>
  );
}

export default Shortcuts;
