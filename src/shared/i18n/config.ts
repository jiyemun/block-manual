import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// 번역 파일들 import
import ko from "./locales/ko.json";
import en from "./locales/en.json";
import zhCN from "./locales/zh-CN.json";
import ja from "./locales/ja.json";
import zhTW from "./locales/zh-TW.json";
import { LANGUAGE_CODE } from "@/shared/types/language.type.ts";

i18n
  .use(LanguageDetector) // 자동 언어 감지
  .use(initReactI18next) // React와 연결
  .init({
    resources: {
      [LANGUAGE_CODE.KO]: {
        translation: ko,
      },
      [LANGUAGE_CODE.EN]: {
        translation: en,
      },
      [LANGUAGE_CODE.CN]: {
        translation: zhCN,
      },
      [LANGUAGE_CODE.JA]: {
        translation: ja,
      },
      [LANGUAGE_CODE.TWN]: {
        translation: zhTW,
      },
    },
    fallbackLng: LANGUAGE_CODE.KO, // 기본 언어
    debug: import.meta.env.DEV, // 개발 모드에서만 디버그

    // 자동 언어 감지 설정
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"], // localStorage에 언어 저장
      lookupLocalStorage: "selectedLanguage", // 저장할 키 이름
    },

    interpolation: {
      escapeValue: false, // React가 이미 XSS 보호를 함
    },
  });

export default i18n;
