import React, { ReactNode } from "react";
import Link from "next/link";

import styles from "./style.module.scss";
import classNames from "classnames";

interface IButtonProps {
  as: "button" | "link";
  onClick?(): void;
  href?: string;
  children: ReactNode;
  className?: string;
}

function Button({
  as = "button",
  children,
  onClick,
  href = "",
  className,
}: IButtonProps) {
  if (as === "button") {
    return (
      <button
        className={classNames(styles.button, className)}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  if (as === "link") {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={classNames(styles.button, className)}
      >
        {children}
      </Link>
    );
  }

  return null;
}

export default Button;