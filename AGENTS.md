# Repository Guidelines

## Project Structure & Module Organization
- `app/`: Next.js App Router pages, layouts, and routes (e.g., `app/checkout/page.tsx`, API under `app/api/*`). Global styles in `app/globals.css` and cross‑site middleware in `middleware.ts`.
- `components/`: Reusable React components. Use PascalCase (e.g., `Header.tsx`, `components/ui/button.tsx`).
- `contexts/` and `hooks/`: Shared state and custom hooks (e.g., `CartContext.tsx`, `useAnalytics.ts`).
- `lib/`: Domain utilities (Stripe, tracking, products, currency). Public assets in `public/`.
- Config: `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`.

## Build, Test, and Development Commands
- `npm run dev`: Start local dev server with Turbopack.
- `npm run build`: Create production build.
- `npm start`: Run the built app.
Environment: create `.env.local` (git‑ignored). Example: `STRIPE_SECRET_KEY=...`, `NEXT_PUBLIC_FB_PIXEL_ID=...`. See `STRIPE_LIVE_IDS.md` and code under `lib/` for required values.

## Coding Style & Naming Conventions
- **Language**: TypeScript, React 19, Next.js 15 (App Router), Tailwind v4.
- **Indentation**: 2 spaces; use single quotes; trailing commas where valid.
- **Files**: Pages `page.tsx`, layouts `layout.tsx`; components in `components/` (PascalCase), hooks `use-*.tsx` or `use*.ts(x)`.
- **Client/Server**: Add `"use client"` only when needed (state/effects/events).
- **Styling**: Tailwind utility classes; prefer `components/ui/*` primitives for consistency.

## Testing Guidelines
- No test framework is configured yet. If adding tests, prefer Vitest + React Testing Library.
- Place tests alongside files (`Header.test.tsx`) or in `__tests__/` and add `"test"` script to `package.json`.
- Aim for coverage of critical flows: checkout, pricing, and tracking.

## Commit & Pull Request Guidelines
- **Commits**: Short, imperative subject (e.g., `Add apparel banner`, `Fix checkout server fetch`). Add a brief body explaining why when non‑trivial.
- **PRs**: Include summary, scope/impact, screenshots for UI, and linked issues. Note required env vars or migrations.
- **Branching**: Use descriptive branches like `feature/apparel-banner` or `fix/checkout-env`.

## Security & Configuration Tips
- Never commit secrets. Move any hard‑coded tokens in `lib/*` to `.env.local`. Use `NEXT_PUBLIC_*` only for safe, public values.
- Validate Stripe and tracking config in non‑prod first. Review `middleware.ts` and `next.config.ts` when changing routing or headers.

