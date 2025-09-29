// 예시 데이터
import type { Manual } from "@/entities/dashbord/dashboard.type.ts";

export const dataSource: Manual[] = [
  {
    id: "1",
    name: "사용자 가이드",
    description: "기본적인 사용 방법을 설명하는 매뉴얼",
    category: "사용법",
    saveStatus: 1,
    publishStatus: 2,
    documentStatus: 2,
    pageCount: 12,
    lastModified: "2024-01-15",
  },
  {
    id: "2",
    name: "관리자 매뉴얼",
    description: "시스템 관리를 위한 상세 가이드",
    category: "사용법",
    saveStatus: 0,
    publishStatus: 1,
    documentStatus: 1,
    pageCount: 8,
    lastModified: "2024-01-10",
  },
];
