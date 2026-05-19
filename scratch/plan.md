# 🚀 Implementation Plan: Developer Portfolio Core UI

**Goal:** Build a premium, high-performance bilingual (en/vi) developer portfolio optimized for Tech Recruiters and ATS, using HeroUI 2.x, Next.js 15, and Framer Motion.

---

## 🛠 Phase 1: Foundation Setup

- [ ] **Permission Check:** Run `chmod +x .claude/hooks/*.sh` to ensure all automation hooks (`Pre-Commit`, `SessionStart`) are active.
- [ ] **Environment Verification:** Ensure `pnpm` is used and strict TypeScript mode is enabled for i18n dictionaries.
- [ ] **Global Styling:** Configure `app/globals.css` with Tailwind CSS variables for Tech Blue (`#3b82f6`), Success Green (`#10b981`), and a professional Slate/Zinc Light/Dark theme.

---

## 🎨 Phase 2: High-End Component Development

Focusing on the **Tech Recruiters** (Scannability & 6-second rule) and **Engineering Managers** (Technical depth & MDX case studies).

### 1. Bilingual Navigation Bar (Glassmorphism)

- **Concept:** Floating header with 70% opacity and 12px blur for a modern, clean look.
- **Tech:** HeroUI 2.x `Navbar` (Compound Pattern).
- **Features:** Prominent CTA ("Hire Me" / "Download CV") and a seamless Language Switcher (EN/VI) that doesn't disrupt the UI flow.

### 2. Professional Hero & Experience Timeline

- **Content:** Highlight current role ("Intern at MISA"), education ("FPT University"), and past experience ("CMC Research Institute").
- **Media:** Integrate Cloudinary via `.claude/plugin/cloudinary.md` for profile picture and CV PDF hosting. Ensure `q_auto,f_auto` and `priority={true}` for LCP optimization.
- **Interactions:** Subtle Framer Motion entrance animations (e.g., staggered fade-ins). No bouncy/distracting effects.

### 3. Project Showcase (MDX integration)

- **Design:** Grid/List layout using HeroUI 2.x `Card` system.
- **Data Source:** Dynamically parsed from `./projects/*.md` files.
- **Architecture:** Server Components by default. Use `"use client"` strictly for filter tabs or interactive media modals.

---

## 🛡️ Phase 3: Validation & Shipping

- [ ] **Audit:** Run `@review` command to ensure **NO** `"use client"` at the layout level, verify ATS/SEO semantic HTML (`<article>`, `<section>`), and check i18n dictionary mapping.
- [ ] **Lighthouse Target:** Verify image optimization and bundle size to guarantee a 95+ Core Web Vitals score.
- [ ] **Ship:** Final execution of `@ship` command for `pnpm lint`, `pnpm tsc` (strict type-check), and production build.

---

## 💡 Notes for AI Operator

- **Persona Trigger:** Act under the `@portfolio` expert persona.
- **Output Style:** Use `style: terse` for fast code generation. ALWAYS provide bilingual JSON blocks for extracted text.
- **Context Routing:** Utilize `@component` and `@project` slash commands for standardized scaffolding.
- **Memory:** If context gets heavy, trigger `PreCompact.sh` to save state and clear cache.