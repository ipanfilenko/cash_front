export const theme = {
  light: {
    mainBackground: "#fff",
    searchBackground: "#F3F3F3",
    textColor: "#000",
    shortcutText: "#1B1918",
    divider: "#E6E6E6",
  },
  dark: {
    mainBackground: "#000",
    searchBackground: "#272727",
    textColor: "#fff",
    shortcutText: "#fff",
    divider: "#272727",
  },
};

export type Theme = typeof theme["dark"];
