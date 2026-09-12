# 사라진섬 프로젝트 (Project Lost Island)

싱글플레이를 중심으로 하되 같은 월드를 친구들과 공유할 수 있는 소규모 협동 멀티플레이 생존 게임 프로젝트입니다.

> 현재 단계: **Phase 0 — 지식베이스 / 기술 설계 / MVP 범위 확정**

## 프로젝트 원칙

- 특정 기존 게임의 상표, 로고, 에셋, 원본 데이터나 코드를 제품에 복제하지 않는다.
- 기존 게임/서버 프로젝트 분석은 **연구 자료**로 분리한다.
- 싱글플레이와 멀티플레이는 별도 게임으로 만들지 않고 같은 게임 규칙을 공유한다.
- 게임 상태의 권위(authority)는 월드/서버 계층이 가진다.
- 첫 목표는 거대한 오픈월드가 아니라 **10~20분짜리 완전한 생존 루프**다.

## 저장소 구조

```text
lost-island-project/
├─ docker-compose.yml       # Wiki.js + PostgreSQL
├─ docs/                    # Git으로 관리하는 원본 설계/세계관/연구 문서
├─ wiki/                    # Wiki.js 운영 + Astro Lore 공개 위키 콘텐츠
└─ scripts/                 # 로컬 실행 스크립트
```

## 위키 로컬 실행

### 1. 준비

Docker Desktop을 설치합니다.

### 2. 환경 파일 생성

Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

macOS / Linux:

```bash
cp .env.example .env
```

`.env`의 `POSTGRES_PASSWORD`를 긴 임의 문자열로 바꿉니다.

### 3. 실행

```bash
docker compose up -d
```

브라우저에서 아래 주소로 접속합니다.

```text
http://localhost:8080
```

첫 접속 시 Wiki.js 관리자 계정을 생성하면 됩니다.

### 종료

```bash
docker compose down
```

DB 데이터까지 완전히 지우려면:

```bash
docker compose down -v
```

## 첫 MVP

**Lost Island 0.1 — First Camp**

1. 플레이어 이동 / 체력 / 스태미나
2. 나무, 돌, 풀 채집
3. 돌도끼, 칼, 창 제작
4. 모닥불, 바닥, 벽, 상자 건축
5. 초식동물 2종 + 포식자 1종
6. 기본 근접 전투
7. 플레이어 / 인벤토리 / 건축물 저장
8. 로컬 싱글플레이
9. 이후 2~4인 호스트/전용 서버 테스트

## 문서 시작점

- [프로젝트 비전](docs/00-project/vision.md)
- [핵심 게임 루프](docs/01-game-design/core-loop.md)
- [세계관 바이블 v0.1](docs/01-worldbuilding/world-bible.md)
- [세계 구조](docs/01-worldbuilding/world-structure.md)
- [듀랑고 구조 해부](docs/03-research/durango-structure-analysis.md)
- [Astro Lore 연동](wiki/astrolore-integration.md)
- [기술 아키텍처](docs/02-technical/architecture.md)
- [MVP 0.1](docs/04-development/mvp-0.1.md)
- [연구 자료 운영 원칙](docs/03-research/research-policy.md)

## 라이선스

아직 프로젝트 라이선스를 확정하지 않았습니다. 외부 공개/기여를 받기 전에 라이선스를 결정합니다.

## Worldbuilding Skill

Reusable worldbuilding rules for the project live at:
`skills/lost-island-worldbuilding/SKILL.md`

Use this skill when creating or revising canonical lore and Astro Lore content. It keeps research separate from canon, checks continuity, and defines the MDX/YAML publishing workflow.
