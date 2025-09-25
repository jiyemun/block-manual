import { create } from "zustand";
import { ThemeKey, type ThemeType } from "@/shared/types/theme.type.ts";

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
