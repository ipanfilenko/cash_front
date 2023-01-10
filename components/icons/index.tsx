import React from "react";
import classNames from "classnames";
import { iconResolver } from "./icon.resolver";
import { IconNames } from "./icons";

interface IconProps {
  name: IconNames;
  className?: string;
}

function Icon({ name, className }: IconProps) {
  const icon = iconResolver(name);
  if (icon == null) return null;

  return (
    <svg
      className={classNames(className)}
      viewBox={icon.viewBox}
      width={icon.width}
      height={icon.height}
    >
      {icon.path}
    </svg>
  );
}

export default Icon;
