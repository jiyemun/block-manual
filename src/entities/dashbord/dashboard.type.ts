export interface Manual {
  id: string;
  name: string;
  description: string;
  category: string;
  status: "발행됨" | "초안" | "보관됨";
  pageCount: number;
  lastModified: string;
}
