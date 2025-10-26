# ToCheon Admin Front

## 개요

**ToCheon**은 천호역 금복빌딩을 중심으로 반경 500m 내에 존재하는 음식점 정보를 공유하는 플랫폼이다.  
이 프로젝트의 핵심은 **“경일게임아카데미 내부 구성원들이 함께 만드는 로컬 맛집 지도”**에 있다.

학생, 교강사, 운영팀 등 **건물 안에 있는 누구나** 자신이 알고 있는 맛집을 등록할 수 있으며,  
관리자는 이 등록 요청을 검토하여 승인 또는 거절한다.  
승인된 맛집은 메인 페이지와 지도에 노출되어, 다른 사용자들이 점심 메뉴를 결정하는 데 도움을 준다.

## 세팅자

주병현 교강사

---

## 실행 정보

- **PORT:** 3001
- **Template Engine:** Nunjucks
- **Server:** Express
- **Dependencies:**

```json
{
  "cookie-parser": "^1.4.7",
  "dotenv": "^17.2.3",
  "express": "^5.1.0",
  "jsonwebtoken": "^9.0.2",
  "nunjucks": "^3.2.4"
}
```

---

## 디렉토리 구조

```
front
├─ README.md
├─ auth
│  ├─ auth.controller.js
│  └─ auth.route.js
├─ dashboard
│  ├─ dashboard.controller.js
│  └─ dashboard.route.js
├─ dummy-data.js
├─ middleware
│  └─ auth.middleware.js
├─ package-lock.json
├─ package.json
├─ public
│  ├─ css
│  │  ├─ common.css
│  │  ├─ dashboard.css
│  │  ├─ font.css
│  │  ├─ inner.css
│  │  └─ login.css
│  ├─ image
│  │  ├─ cafe.png
│  │  ├─ down-arrow.png
│  │  ├─ food-marker.jpg
│  │  ├─ github-icon.png
│  │  ├─ google-Marker.png
│  │  ├─ kakaoLogin-logo.png
│  │  └─ toodayChoen-Marker.png
│  └─ js
│     └─ login.js
├─ server.js
└─ views
   ├─ auth.html
   └─ dashboard.html

```

---

## 페이지 구성

### 1. 로그인 페이지 (`auth.html`)

- 관리자 전용 로그인 화면
- 아이디/비밀번호 입력 후 JWT 기반 인증
- 인증 성공 시 `/dashboards`로 이동

---

### 2. 대시보드 페이지 (`dashboards.html`)

#### 역할

- 사용자가 등록 요청한 맛집 리스트를 한눈에 확인
- 승인/거절 처리 및 영업시간 보완 작업 수행
- 모든 작업은 API를 통해 서버와 연동됨

#### 테이블 항목

| 항목명                  | 설명                                            |
| ----------------------- | ----------------------------------------------- |
| **index**               | 순번 (1, 2, 3...)                               |
| **유저 아이디**         | 등록 요청을 보낸 사용자 ID (예: `wnqudgus1234`) |
| **맛집 이름**           | 등록 요청된 맛집 이름 (예: `스타벅스 천호점`)   |
| **주소**                | 맛집의 실제 위치 주소                           |
| **카테고리 (optional)** | 디저트, 국밥 등 분류                            |
| **설명 (optional)**     | “누구누구가 좋아하는 맛집” 등 간단한 코멘트     |
| **영업 시간**           | 관리자가 직접 입력 (사용자 입력값은 없음)       |
| **승인 버튼**           | 클릭 시 `/api/admin/stores/:id/approve` 호출    |
| **거절 버튼**           | 클릭 시 `/api/admin/stores/:id/reject` 호출     |

> DB 구조상
>
> - `0` = 승인
> - `1` = 거절
>   로 저장된다.

---

## API 연동 정보

| 구분           | HTTP Method | API Path                     | 설명                          |
| -------------- | ----------- | ---------------------------- | ----------------------------- |
| 승인 대기 목록 | GET         | /api/admin/stores/pending    | 승인 대기 중인 맛집 목록 조회 |
| 승인           | POST        | /api/admin/stores/id/approve | 특정 맛집 승인 처리           |
| 거부           | POST        | /api/admin/stores/id/reject  | 특정 맛집 거절 처리           |
| 리뷰 삭제      | DELETE      | /api/admin/reviews/id        | 특정 리뷰 삭제                |
| 맛집 삭제      | DELETE      | /api/admin/stores/id         | 특정 맛집 정보 삭제           |

---

## 유저 스토리

1. 관리자가 `/auth` 페이지에 접속한다.
2. 로그인 성공 시 JWT 토큰이 발급되어 세션에 저장된다.
3. `/dashboards` 페이지로 이동한다.
4. 승인 대기 중인 맛집 요청 테이블이 표시된다.
5. 관리자는 특정 맛집을 클릭해 상세 정보를 확인한다.
6. 필요 시 직접 영업시간을 기입한다.
7. “승인” 또는 “거절” 버튼을 클릭하여 요청을 처리한다.
8. 변경된 상태는 실시간으로 테이블에 반영된다.

---

## 요약

모든 맛집 등록 요청은 **신뢰성 있는 정보만 노출하기 위한 마지막 검증 절차**를 거친다.
결국, 이 페이지는 “경일 내부 구성원들이 함께 만드는 천호 맛집 지도”의 완성도를 결정짓는다.
