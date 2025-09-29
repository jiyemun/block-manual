import {
  DOCUMENT_STATUS,
  PUBLISH_STATUS,
  SAVE_STATUS,
} from "@/entities/dashbord/dashboard.enum.ts";

export type SaveStatus = (typeof SAVE_STATUS)[keyof typeof SAVE_STATUS];

export type DocumentStatus =
  (typeof DOCUMENT_STATUS)[keyof typeof DOCUMENT_STATUS];

export type PublishStatus =
  (typeof PUBLISH_STATUS)[keyof typeof PUBLISH_STATUS];

export interface Manual {
  id: string;
  name: string;
  description: string;
  category: string;
  saveStatus: SaveStatus;
  publishStatus: PublishStatus;
  documentStatus: DocumentStatus;
  pageCount: number;
  lastModified: string;
}

export interface ManualFormValues {
  title?: string;
  category?: string;
  publishStatus?: PublishStatus[];
}
