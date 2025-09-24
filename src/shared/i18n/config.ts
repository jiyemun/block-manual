import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// 번역 파일들 import
import ko from "./locales/ko.json";
import en from "./locales/en.json";
import zh from "./locales/zh.json";

i18n
  .use(LanguageDetector) // 자동 언어 감지
  .use(initReactI18next) // React와 연결
  .init({
    resources: {
      ko: {
        translation: ko,
      },
      en: {
        translation: en,
      },
      zh: {
        translation: zh,
      },
    },
    fallbackLng: "ko", // 기본 언어
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
