import { create } from "zustand";
import i18n from "@/shared/i18n/config";
import {
  LANGUAGE_CODE,
  AVAILABLE_LANGUAGES,
  type Language,
  type LanguageCode,
} from "@/shared/types/language.type";

interface State {
  language: LanguageCode;
  availableLanguages: Language[];
}

interface Action {
  setLanguage: (lang: LanguageCode) => void;
  getCurrentLanguage: () => Language;
}

export const useLanguageStore = create<State & Action>((set, get) => ({
  language: (i18n.language as LanguageCode) || LANGUAGE_CODE.KO, // i18n에서 감지된 언어 사용

  availableLanguages: AVAILABLE_LANGUAGES,

  setLanguage: (lang: LanguageCode) => {
    set({ language: lang });
    i18n.changeLanguage(lang);
  },

  getCurrentLanguage: () => {
    const { language, availableLanguages } = get();
    return (
      availableLanguages.find((lang) => lang.code === language) ||
      availableLanguages[0]
    );
  },
}));
