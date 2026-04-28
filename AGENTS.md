# AGENTS.md

## Quick Start Commands
- `npm run dev` - start the Vite dev server.
- `npm run lint` - run ESLint across `*.ts` and `*.tsx` files.
- `npm run build` - run `tsc -b` (project-reference typecheck) then `vite build`.
- `npm run preview` - preview the production build.

## Verification Order
- Run `npm run lint` then `npm run build` before handing off changes.
- There is no `test` script configured in `package.json`.

## Project Shape
- Single-package app (not a monorepo): React + TypeScript + Vite.
- Main entrypoint: `src/main.tsx`, which renders `src/App.tsx`.
- Pomodoro execution flow is centered in:
  - `src/hooks/usePomodoro.tsx` (cycle progression)
  - `src/hooks/useTimer.tsx` (countdown interval)
  - `src/lib/pomodoro.ts` (cycle generation)
  - `src/lib/time.ts` (convert/format/zero checks)

## Toolchain Quirks That Matter
- Pomodoro and timer durations are modeled in milliseconds throughout (`PomodoroConfig`, hooks, and time utils).
- Type-checking is tied to the build command via `tsc -b`; there is no separate `typecheck` script.
- React Compiler is enabled in `vite.config.ts` via `@rolldown/plugin-babel` + `reactCompilerPreset()`; keep this unless intentionally changing compile behavior.
- Tailwind CSS v4 is enabled via `@tailwindcss/vite` and `@import "tailwindcss";` in `src/index.css`.

## Styling Reality Check
- `App.tsx` uses Tailwind utility classes plus the custom `.tomato-container` rules in `src/index.css`.
- `src/App.css` still contains large Vite-template-era styles; verify selectors are actually used before editing there.
