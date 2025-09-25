import {
  CATEGORY,
  type MANUAL_STATUS,
} from "@/entities/dashbord/dashboard.enum.ts";

export type ManualStatus = (typeof MANUAL_STATUS)[keyof typeof MANUAL_STATUS];

export type CategoryType = (typeof CATEGORY)[keyof typeof CATEGORY];

export interface Manual {
  id: string;
  name: string;
  description: string;
  category: CategoryType;
  status: ManualStatus;
  pageCount: number;
  lastModified: string;
}
