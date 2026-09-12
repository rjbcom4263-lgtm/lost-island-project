# 월드 설계

## 기본 단위

```text
World
└─ Island
   └─ Region
      └─ Chunk
         ├─ Terrain
         ├─ Natural Resource
         ├─ Building
         ├─ Animal
         └─ Container
```

## 초기 MVP

- 섬 1개
- 3~4개 작은 생태 지역
- 청크 기반 스트리밍
- 주요 자원 위치는 월드 상태로 관리
- 건축물과 상자는 영속 저장

## 장기 확장

- 여러 섬
- 배/이동 수단
- 섬별 자원과 기후
- 위험도와 희귀 자원의 지역화
