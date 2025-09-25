# AG-BlockManual

메뉴얼 에디터


## FSD 아키텍처

- https://feature-sliced.design/kr/docs/get-started/overview

![Image](./fsd.jpg)

### Layer
Layer는 모든 FSD 프로젝트의 표준 최상위 폴더입니다.

- App* : Routing, Entrypoint, Global Styles, Provider 등 앱을 실행하는 모든 요소
- Processes(더 이상 사용되지 않음) : 페이지 간 복합 시나리오
- Pages : 전체 page 또는 중첩 Routing의 핵심 영역
- Widgets : 독립적으로 동작하는 대형 UI·기능 블록
- Features : 제품 전반에서 재사용되는 비즈니스 기능
- Entities : user, product 같은 핵심 도메인 Entity
- Shared* : 프로젝트 전반에서 재사용되는 일반 유틸리티

> App·Shared Layer는 Slice 없이 곧바로 Segment로 구성됩니다. 상위 Layer의 모듈은 자신보다 하위 Layer만 참조할 수 있습니다.

### Slice
Slice는 Layer 내부를 비즈니스 도메인별로 나눕니다. 이름·개수에 제한이 없으며, 같은 Layer 내 다른 Slice를 참조할 수 없습니다. 이 규칙이 높은 응집도와 낮은 결합도를 보장합니다.

### Segment
Slice와 App·Shared Layer는 Segment로 세분화되어, 기술적 목적에 따라 코드를 그룹화합니다. 일반적으로 다음과 같은 Segment를 사용합니다

- ui : UI components, date formatter, styles 등 UI 표현과 직접 관련된 코드
- api : request functions, data types, mappers 등 백엔드 통신 및 데이터 로직
- model : schema, interfaces, store, business logic 등 애플리케이션 도메인 모델
- lib : 해당 Slice에서 여러 모듈이 함께 사용하는 공통 library code
- config : configuration files, feature flags 등 환경·기능 설정

> 대부분의 Layer에서는 위 다섯 Segment로 충분합니다. 필요하다면 App 또는 Shared Layer에서만 추가 Segment를 정의하세요. (필수 규칙은 아닙니다.)