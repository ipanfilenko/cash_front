import { IconNames, allIcons, IconModel } from "./icons";

export const iconResolver = (name: IconNames): IconModel | null => {
  const icon = allIcons.find((i) => i.name === name);
  return icon ?? null;
};
