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

## 기술 선택

| 항목 | 결정 | 근거 |
|---|---|---|
| 엔진 | Unity 6 LTS + HDRP, PC (Windows) 우선 | [ADR-0003](../05-decisions/ADR-0003-engine-unity-hdrp.md) |
| Game Simulation | `UnityEngine`을 참조하지 않는 순수 C# 코드, `dotnet test`로 테스트 | [ADR-0004](../05-decisions/ADR-0004-pure-csharp-simulation.md) |
| 콘텐츠 데이터 | 규칙 데이터는 JSON이 원본, 시각 데이터는 ScriptableObject, 콘텐츠 id로 연결 | [ADR-0005](../05-decisions/ADR-0005-content-data-json.md) |
| 세이브 | JSON, 청크별 저장, 세이브 버전 번호 | [ADR-0005](../05-decisions/ADR-0005-content-data-json.md) |
| 저장소 | 이 저장소의 `game/`, Git LFS, 역할별 씬 분리 | [ADR-0006](../05-decisions/ADR-0006-game-repo-layout.md) |
| 멀티 네트워크 | Phase 3에서 결정 | — |

용어는 [CONTEXT.md](../../CONTEXT.md)를 따른다.
