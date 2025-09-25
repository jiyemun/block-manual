import type { MANUAL_STATUS } from "@/entities/dashbord/dashboard.enum.ts";

export type ManualStatus = (typeof MANUAL_STATUS)[keyof typeof MANUAL_STATUS];

export interface Manual {
  id: string;
  name: string;
  description: string;
  category: string;
  status: ManualStatus;
  pageCount: number;
  lastModified: string;
}
