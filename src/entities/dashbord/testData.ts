// 예시 데이터
import type { Manual } from "@/entities/dashbord/dashboard.type.ts";

export const dataSource: Manual[] = [
  {
    id: "1",
    name: "사용자 가이드",
    description: "기본적인 사용 방법을 설명하는 매뉴얼",
    category: "사용법",
    status: "발행됨",
    pageCount: 12,
    lastModified: "2024-01-15",
  },
  {
    id: "2",
    name: "관리자 매뉴얼",
    description: "시스템 관리를 위한 상세 가이드",
    category: "관리",
    status: "초안",
    pageCount: 8,
    lastModified: "2024-01-10",
  },
  {
    id: "3",
    name: "API 문서",
    description: "개발자들을 위한 API 참조 문서",
    category: "개발",
    status: "발행됨",
    pageCount: 25,
    lastModified: "2024-01-05",
  },
  {
    id: "4",
    name: "설치 가이드",
    description: "시스템 설치 및 초기 설정 방법",
    category: "설치",
    status: "보관됨",
    pageCount: 6,
    lastModified: "2023-12-20",
  },
  {
    id: "5",
    name: "문제 해결",
    description: "자주 발생하는 문제들의 해결 방법",
    category: "지원",
    status: "발행됨",
    pageCount: 15,
    lastModified: "2024-01-12",
  },
];
