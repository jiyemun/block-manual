export const LANGUAGE_CODE = {
  KO: "ko",
  EN: "en",
  ZH: "zh",
  JA: "ja",
} as const;

export type LanguageCode = (typeof LANGUAGE_CODE)[keyof typeof LANGUAGE_CODE];

export interface Language {
  code: LanguageCode;
  name: string;
  flag: string;
}

export const AVAILABLE_LANGUAGES: Language[] = [
  { code: LANGUAGE_CODE.KO, name: "한국어", flag: "🇰🇷" },
  { code: LANGUAGE_CODE.EN, name: "English", flag: "🇺🇸" },
  { code: LANGUAGE_CODE.ZH, name: "中文", flag: "🇨🇳" },
  { code: LANGUAGE_CODE.JA, name: "日本語", flag: "🇯🇵" },
] as const;
