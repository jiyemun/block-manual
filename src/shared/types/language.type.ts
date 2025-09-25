export const LANGUAGE_CODE = {
  KO: "ko",
  EN: "en",
  CN: "zh-CN",
  JA: "ja",
  TWN: "zh-TW",
} as const;

export type LanguageCode = (typeof LANGUAGE_CODE)[keyof typeof LANGUAGE_CODE];

export interface Language {
  code: LanguageCode;
  name: string;
  flag: string;
}

export const AVAILABLE_LANGUAGES: Language[] = [
  { code: LANGUAGE_CODE.KO, name: "KOR", flag: "🇰🇷" },
  { code: LANGUAGE_CODE.EN, name: "ENG", flag: "🇺🇸" },
  { code: LANGUAGE_CODE.CN, name: "CHN", flag: "🇨🇳" },
  { code: LANGUAGE_CODE.JA, name: "JPN", flag: "🇯🇵" },
  { code: LANGUAGE_CODE.TWN, name: "TWN", flag: "🇹🇼" },
] as const;
