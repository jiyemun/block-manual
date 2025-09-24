// 데이터 인터페이스 정의
export interface Manual {
  id: string;
  name: string;
  description: string;
  category: string;
  status: "발행됨" | "초안" | "보관됨";
  pageCount: number;
  lastModified: string;
}

// 상태에 따라 색상을 매핑하는 객체
export const statusColorMap = {
  발행됨: "green",
  초안: "gold",
  보관됨: "default",
} as const;

// 예시 데이터
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
