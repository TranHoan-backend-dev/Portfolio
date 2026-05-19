# Command: @component

## 🎯 Purpose
Scaffolds a new UI Component strictly adhering to the project's engineering standards.

## ⚙️ Execution Steps
When the user types `@component [Name] [Options]`:

1.  **Architecture:** Default to a Server Component. Add `"use client"` ONLY if the user specifies interactive features (like onClick, forms, or heavy Framer Motion animations).
2.  **UI Library:** Use **HeroUI 2.x** Compound Component patterns exclusively. Do NOT use standard HTML tags if a HeroUI equivalent exists.
3.  **Styling & Motion:** Use Tailwind CSS for styling. Integrate `framer-motion` for subtle entrance animations (e.g., `initial={{ opacity: 0 }} animate={{ opacity: 1 }}`).
4.  **Type Safety:** Generate 100% strict TypeScript interfaces for Props.
5.  **i18n (Crucial):** DO NOT hardcode any text strings. Abstract all text into an assumed `t()` function or dictionary prop (e.g., `{t('hero.title')}`). Provide the JSON dictionary updates (en/vi) required for this component at the end of your response.