# Astro Lore 연동 설계

## 선택 이유

`ravvio/astrolore`는 Markdown/MDX 기반의 정적 세계관 위키다.

지원 기능:

- 세계관 Article
- Category
- 상호 링크 및 Wikilink
- Interactive Map
- Timeline
- Custom Calendar
- Document/Handout
- Full-text Search
- GitHub Pages / Cloudflare Pages / Netlify / Docker 배포

라이선스는 MIT다.

## 운영 구조

사라진섬에서는 역할을 둘로 나눈다.

```text
GitHub Repository
      │
      ├ docs/              ← 설계/연구 원본
      │
      └ wiki/astrolore-content/
             │
             └ Astro Lore 공개 세계관

Wiki.js
 └ 팀 회의 / 작업 문서 / 개발 운영

Astro Lore
 └ 정리된 정식 세계관 / 공개 백과사전
```

### Source of Truth

- **게임 설계와 기술 문서:** `docs/`
- **확정 Canon 세계관:** `wiki/astrolore-content/`
- **토론/초안:** Wiki.js

확정되지 않은 아이디어를 공개 위키에 바로 넣지 않는다.

## Astro Lore에 복사할 위치

이 저장소의:

```text
wiki/astrolore-content/src/content/
```

내용을 Astro Lore 프로젝트의:

```text
src/content/
```

아래에 복사한다.

## 추천 배포

초기: GitHub Pages

이후:

- `wiki.example.com` → Astro Lore 공개 세계관
- `dev.example.com` → Wiki.js 내부 개발 위키

## Upstream

- Astro Lore: https://github.com/ravvio/astrolore
