export const MANUAL_STATUS = {
  PUBLISHED: "발행됨",
  DRAFT: "초안",
  ARCHIVED: "보관됨",
} as const;

// 상태별 컬러 매핑
export const statusColorMap = {
  [MANUAL_STATUS.PUBLISHED]: "green",
  [MANUAL_STATUS.DRAFT]: "gold",
  [MANUAL_STATUS.ARCHIVED]: "blue",
  default: "blue",
} as const;

// 수정 예정
export const CATEGORY = {
  USER_MANAGEMENT: "사용법",
  MANAGEMENT: "관리",
  DEVELOPMENT: "개발",
  SETUP: "설치",
  SUPPORT: "지원",
} as const;

// 카테고리별 컬러 매핑
export const categoryColorMap = {
  [CATEGORY.USER_MANAGEMENT]: "blue",
  [CATEGORY.MANAGEMENT]: "blue",
  [CATEGORY.DEVELOPMENT]: "blue",
  [CATEGORY.SETUP]: "blue",
  [CATEGORY.SUPPORT]: "blue",
  default: "blue",
} as const;
