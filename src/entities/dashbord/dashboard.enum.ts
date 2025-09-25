export const MANUAL_STATUS = {
  PUBLISHED: "발행됨",
  DRAFT: "초안",
  ARCHIVED: "보관됨",
} as const;

export const statusColorMap = {
  [MANUAL_STATUS.PUBLISHED]: "green",
  [MANUAL_STATUS.DRAFT]: "gold",
  [MANUAL_STATUS.ARCHIVED]: "default",
} as const;
