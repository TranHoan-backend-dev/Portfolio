# Hook: Pre-Commit Standards

## 🎯 Purpose
Defines the mandatory checks that must pass before any code is committed to the repository. This ensures the portfolio maintains high code quality and i18n integrity.

## ⚙️ Execution Rules for AI
When instructed to create or run a pre-commit check, enforce the following pipeline:

1. **Format Code:** Run Prettier or standard formatter.
2. **Linting (`pnpm lint`):** Ensure there are no ESLint warnings or errors.
3. **Type Checking (`pnpm tsc`):** Must pass strict TypeScript compilation (No `any` or implicit any).
4. **i18n Hardcode Check (Custom):** Scan newly added `.tsx` components in the staging area. Flag an error if direct Vietnamese or English text is detected in the UI instead of the `t('...')` dictionary function.
5. **Commit Message Format:** Ensure the user's commit message follows Conventional Commits (e.g., `feat: add hero section`, `fix: i18n hydration error`).