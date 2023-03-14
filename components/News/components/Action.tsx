import React from "react";
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from "rc-menu";
import classNames from "classnames";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Icon from "../../shared/icons";
import styles from "./style.module.scss";
import { ActionsEnum } from "../useNewsState";
import NewsDto from "../news.type";

interface IActionProps {
  news: NewsDto;
  handleSelectAction(news: NewsDto, action: ActionsEnum): void;
  handleShare(news: NewsDto): void;
  dropdownOptions: { label: string; value: ActionsEnum }[];
}

function Action({
  handleSelectAction,
  handleShare,
  news,
  dropdownOptions,
}: IActionProps) {
  const clipboardMapper = {
    [ActionsEnum.COPY_LINK_ADDRESS]: "website" as const,
    [ActionsEnum.COPY_LINK_TEXT]: "websiteTitle" as const,
  };
  return (
    <div className={classNames(styles.actions)}>
      <button className={styles.actionButton} onClick={() => handleShare(news)}>
        <Icon name="share" />
      </button>
      <Dropdown
        trigger={["click"]}
        placement="topLeft"
        overlay={
          <Menu
            onSelect={(option) =>
              handleSelectAction(news, option.key as ActionsEnum)
            }
          >
            {dropdownOptions.map((option) => (
              <React.Fragment key={option.value}>
                {option.value === ActionsEnum.OPEN_IN_NEW_TAB ? (
                  <MenuItem key={option.value} className={styles.actionMenuItem}>{option.label}</MenuItem>
                ) : (
                  <CopyToClipboard text={news[clipboardMapper[option.value]]} key={option.value}>
                    <MenuItem key={option.value} className={styles.actionMenuItem}>{option.label}</MenuItem>
                  </CopyToClipboard>
                )}
              </React.Fragment>
            ))}
          </Menu>
        }
      >
        <button className={styles.actionButton}>
          <Icon name="more" />
        </button>
      </Dropdown>
    </div>
  );
}

export default Action;
