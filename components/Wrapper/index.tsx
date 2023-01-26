import classNames from "classnames";
import React, { ReactNode, useContext, useEffect } from "react";
import { ThemeContext } from "../../context/theme";
import { Theme, theme } from "../../theme";
import styles from "./style.module.scss";

const setCSSVariables = (theme: Theme): void => {
  for (const value in theme) {
    document.documentElement.style.setProperty(
      `--${value}`,
      theme[value as keyof Theme]
    );
  }
};

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

function Wrapper({ children, className }: WrapperProps) {
  const themeName = useContext(ThemeContext);

  useEffect(() => {
    setCSSVariables(theme[themeName]);
  });

  return (
    <div className={classNames(styles.wrapper, className)}>{children}</div>
  );
}

export default Wrapper;
