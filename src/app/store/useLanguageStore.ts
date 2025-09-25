import { create } from "zustand";
import i18n from "@/shared/i18n/config.ts";

interface Language {
  code: string;
  name: string;
  flag: string;
}

interface State {
  language: string;
  availableLanguages: Language[];
}

interface Action {
  setLanguage: (lang: string) => void;
  getCurrentLanguage: () => Language;
}

export const useLanguageStore = create<State & Action>((set, get) => ({
  language: i18n.language || "ko", // i18n에서 감지된 언어 사용

  availableLanguages: [
    { code: "ko", name: "한국어", flag: "🇰🇷" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
  ],

  setLanguage: (lang: string) => {
    set({ language: lang });
    i18n.changeLanguage(lang); // i18n과 동기화
  },

  getCurrentLanguage: () => {
    const { language, availableLanguages } = get();
    return (
      availableLanguages.find((lang) => lang.code === language) ||
      availableLanguages[0]
    );
  },
}));
