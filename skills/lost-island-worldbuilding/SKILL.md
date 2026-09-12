---
name: lost-island-worldbuilding
description: Create, revise, and organize canonical worldbuilding for the 사라진섬 프로젝트, including Astro Lore MDX and YAML publishing. Use for Lost Island lore and continuity tasks; do not use for general game design or third-party research alone.
---

# Lost Island Worldbuilding Skill

## Purpose
Use this skill for the **사라진섬 프로젝트 (Lost Island Project)** when creating, revising, or organizing worldbuilding content.
The goal is to maintain a coherent original IP while publishing canonical lore into the Astro Lore wiki format.

## Core principles
1. **Canon first**: read existing canonical lore before inventing new facts.
2. **No silent retcons**: if a new idea conflicts with canon, flag the conflict and propose options instead of overwriting it.
3. **Research is not canon**: inspiration and analysis of other games belong in `docs/03-research/` and must never be treated as setting facts.
4. **Original IP only**: do not copy proprietary names, characters, maps, story text, art, data tables, or other protected expression from Durango or any other game.
5. **Extract principles, not assets**: research may inform abstract design principles such as expedition loops, transient regions, ecology simulation, persistence, and social structures.
6. **Link everything useful**: important entities should cross-link to related locations, factions, events, creatures, technologies, and characters.
7. **Prefer playable lore**: worldbuilding should support exploration, survival, crafting, conflict, discovery, and player choice.

## Canon hierarchy
Treat information using the following priority:

1. `world/` or Astro Lore published content — **canonical**
2. `docs/01-game-design/` and approved ADRs — **design canon**
3. `drafts/` — **proposal, not canon**
4. `docs/03-research/` — **reference only, never canon**

When sources disagree, report the discrepancy.

## Worldbuilding workflow
For every worldbuilding task:

1. Identify whether the request concerns a **location, character, organization, creature, culture, language, historic event, technology/system, document, map, or timeline**.
2. Check existing canon for names, dates, causes, relationships, and terminology.
3. Separate:
   - confirmed canon
   - proposed additions
   - open questions
4. Create a lowercase kebab-case slug.
5. Write the canonical page in Astro Lore-compatible MDX/YAML.
6. Add cross-links to related entities.
7. If the entry is historical, add it to the appropriate timeline.
8. If the entry changes another page, list the pages that should also be updated.
9. If a setting change affects gameplay, add a short **Gameplay implications** section.
10. Run a final consistency check for contradictions and duplicated names.

## Astro Lore targets
Use this structure:

```text
src/content/lost-island/
├── articles/
├── categories/
├── documents/
├── handouts/
├── maps/
├── statblocks/
├── tables/
└── timelines/
```

### Article frontmatter
Use only fields relevant to the entity.

```yaml
---
title: "Display Name"
aliases: []
tags: []
category: world
meta:
  type: location
  kind: region
---
```

Supported core meta types for this project:
- `location`
- `character`
- `organization`
- `historic`
- `creature`
- `culture`
- `language`
- `family`
- `title`

For game-specific concepts not covered by Astro Lore metadata, keep the article normal and use tags such as `technology`, `phenomenon`, `resource`, `system`, or `artifact`.

## Writing style
- Write in Korean unless the project page requires English metadata.
- Keep names distinctive and internally consistent.
- Explain causes and consequences rather than listing trivia.
- Avoid encyclopedic filler that has no gameplay or narrative value.
- Use wiki links for known entries: `[[Anchor Island]]` or normal Markdown links when slugs are known.
- Clearly mark uncertain material as **초안**, **가설**, or **미확정**.

## Lost Island setting anchors
These are current project concepts and must be treated as canon unless later ADRs explicitly replace them:

- **대공백 (The Blank Tide)**: the world-altering phenomenon associated with the reappearance and disappearance of anomalous islands.
- **닻섬 (Anchor Island)**: relatively persistent settlement space used for long-term habitation and infrastructure.
- **표류섬 (Drift Island)**: transient expedition spaces with changing ecology, resources, and risk.
- **심층섬 (Deep Island)**: rare, dangerous, high-value regions tied to deeper mysteries of the setting.
- Core loop: **정착 → 탐험 → 채집/사냥 → 귀환 → 가공/제작 → 건축/연구 → 더 위험한 탐험**.

Do not expand these anchors into detailed facts unless the user asks or existing canon already establishes them.

## Durango research boundary
Durango may be analyzed only as research material.
Allowed transformation examples:
- stable vs transient spaces → persistent settlement vs transient expedition regions
- persistent world simulation → server-owned world state
- ecology activation near players → simulation LOD
- expedition/resource return loop → original Lost Island progression loop

Do not transfer:
- Durango proper nouns
- original maps
- narrative text
- proprietary game data
- character names
- copied item/skill/animal tables
- Nexon artwork, music, UI, logos, or assets

## Output template
When creating a new canonical concept, provide or generate:

```text
Title
Slug
Status: Canon / Draft
Entity type
One-line concept

Overview
Origin / history
Relationships
Gameplay implications
Open questions
Related pages
```

Then create the Astro Lore page when requested.

## Consistency checklist
Before finalizing a lore change, verify:
- [ ] no conflict with existing dates
- [ ] no duplicate or confusing name
- [ ] location hierarchy still makes sense
- [ ] faction motivations remain coherent
- [ ] ecology fits the region
- [ ] technology level remains consistent
- [ ] gameplay consequences are identified
- [ ] research material has not been promoted to canon accidentally
- [ ] proprietary third-party expression has not been copied

