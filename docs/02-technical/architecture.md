# 기술 아키텍처

## 목표 구조

```text
Game Client
    │
    ▼
IGameSession
    │
    ├─ LocalGameSession       ← 싱글
    │      │
    │      ▼
    │   Local Server
    │
    └─ NetworkGameSession     ← 멀티
           │
           ▼
      Dedicated Server

              ↓
        Game Simulation
       /      |       \
    World   Player   Animal
       \      |       /
              ↓
          Persistence
```

## 가장 중요한 규칙

싱글플레이에서도 게임 규칙을 UI나 캐릭터 MonoBehaviour에 직접 박아 넣지 않는다.

예:

```text
나무 클릭
  ↓
GatherRequest
  ↓
Game Simulation 검증
  ↓
World Resource 상태 감소
  ↓
Item 지급
  ↓
결과 이벤트
```

멀티플레이에서도 같은 흐름을 사용한다.

## 추천 초기 기술 선택

아직 엔진은 확정하지 않는다. 3D 생존 게임의 개발 편의성과 에셋 생태계를 고려하면 Unity를 우선 검토하되, 엔진 결정 문서는 ADR로 남긴다.
