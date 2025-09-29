export const SAVE_STATUS = {
  DRAFT: "검토중",
  SAVED: "작성 완료",
  DRAFT_WORKING: "작성중",
} as const;

// 발행 상태
export const PUBLISH_STATUS = {
  PUBLISHED: "발행됨",
  DRAFT: "숨김",
  UNPUBLISHED: "미발행",
} as const;

// 문서 상태
export const DOCUMENT_STATUS = {
  IN_REVIEW: "보관중",
  DRAFT: "수정중",
  USER_VIEW: "사용자 공개",
} as const;

// 저장 상태별 컬러 매핑
export const saveStatusColorMap = {
  [SAVE_STATUS.DRAFT]: "magenta",
  [SAVE_STATUS.SAVED]: "cyan",
  [SAVE_STATUS.DRAFT_WORKING]: "cyan",
  default: "blue",
} as const;

// 발행 상태별 컬러 매핑
export const publishStatusColorMap = {
  [PUBLISH_STATUS.PUBLISHED]: "green",
  [PUBLISH_STATUS.DRAFT]: "blue",
  [PUBLISH_STATUS.UNPUBLISHED]: "red",
  default: "blue",
} as const;

// 문서 상태별 컬러 매핑
export const documentStatusColorMap = {
  [DOCUMENT_STATUS.IN_REVIEW]: "default",
  [DOCUMENT_STATUS.DRAFT]: "gold",
  [DOCUMENT_STATUS.USER_VIEW]: "purple",
  default: "blue",
} as const;
