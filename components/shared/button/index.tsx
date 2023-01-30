import React, { ReactNode } from "react";
import Link from "next/link";

import styles from "./style.module.scss";
import classNames from "classnames";

interface IButtonProps {
  as: "button" | "link";
  onClick?(): void;
  type?: React.ButtonHTMLAttributes<unknown>["type"];
  href?: string;
  children: ReactNode;
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
}

function Button({
  as = "button",
  children,
  onClick,
  href = "",
  className,
  target,
  type,
}: IButtonProps) {
  if (as === "button") {
    return (
      <button
        type={type}
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
        target={target}
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
