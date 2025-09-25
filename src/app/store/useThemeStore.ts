import { create } from "zustand";

export const ThemeKey = {
  LIGHT_THEME: "light",
  DARK_THEME: "dark",
} as const;

export type ThemeType = (typeof ThemeKey)[keyof typeof ThemeKey];
interface State {
  theme: ThemeType;
}

interface Actions {
  setTheme: (mode: ThemeType) => void;
}

export const useThemeStore = create<State & Actions>((set) => ({
  theme: ThemeKey.LIGHT_THEME,
  setTheme: (mode) => {
    set({ theme: mode });
  },
}));
