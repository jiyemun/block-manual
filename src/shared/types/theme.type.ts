export const ThemeKey = {
  LIGHT_THEME: "light",
  DARK_THEME: "dark",
} as const;

export type ThemeType = (typeof ThemeKey)[keyof typeof ThemeKey];
