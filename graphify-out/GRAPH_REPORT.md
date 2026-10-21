# Graph Report - nteclandingpage  (2026-10-21)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 61 nodes · 67 edges · 8 communities (6 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0f2ddd16`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Community 0
- Community 1
- Community 2
- Community 3
- Community 4
- Community 5
- Community 6

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `App()` - 5 edges
3. `scripts` - 4 edges
4. `react` - 3 edges
5. `@vitejs/plugin-react` - 2 edges
6. `vite` - 2 edges
7. `react-dom` - 2 edges
8. `lucide-react` - 2 edges
9. `@tailwindcss/vite` - 2 edges
10. `Logo()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (8 total, 2 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.12
Nodes (16): compilerOptions, allowJs, allowSyntheticDefaultImports, esModuleInterop, forceConsistentCasingInFileNames, isolatedModules, jsx, lib (+8 more)

### Community 1 - "Community 1"
Cohesion: 0.18
Nodes (11): name, private, type, version, tailwindcss, @tailwindcss/vite, @types/react, @types/react-dom (+3 more)

### Community 2 - "Community 2"
Cohesion: 0.22
Nodes (10): lucide-react, react, react-dom, App(), Button(), faqs, Heading(), Logo() (+2 more)

### Community 3 - "Community 3"
Cohesion: 0.22
Nodes (9): dependencies, lucide-react, react, react-dom, tailwindcss, @tailwindcss/vite, typescript, vite (+1 more)

### Community 4 - "Community 4"
Cohesion: 0.50
Nodes (4): scripts, build, dev, preview

### Community 5 - "Community 5"
Cohesion: 0.67
Nodes (3): devDependencies, @types/react, @types/react-dom

## Knowledge Gaps
- **4 isolated node(s):** `typescript`, `tailwindcss`, `@types/react`, `@types/react-dom`
  These have ≤1 connection - possible missing edges. (Counts symbols only; 42 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Community 3` to `Community 1`?**
  _High betweenness centrality (0.165) - this node is a cross-community bridge._
- **What connects `typescript`, `tailwindcss`, `@types/react` to the rest of the system?**
  _4 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._
- **Why does `react` connect `Community 2` to `Community 1`?**
  _High betweenness centrality (0.082) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `Community 0` to `Community 6`?**
  _High betweenness centrality (0.076) - this node is a cross-community bridge._