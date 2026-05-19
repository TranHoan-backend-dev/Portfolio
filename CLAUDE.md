<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## 🚦 Context Routing Rules

- **Standard Requests:** If the prompt contains project keywords (e.g., "Next.js", "HeroUI", "Portfolio", "i18n", "ATS", "Resume"), strictly prioritize documentation from `./.claude/`.
- **Slash Commands (Antigravity):** ONLY scan the `./.agent/` directory when a command starts with `@` (e.g., `@brainstorming`, `@skill-name`).
- **Conflict Resolution:** If a `@` command is used, instructions in `./.agent/` override standard rules for that specific response only.

<!-- BEGIN:project-context -->
# Project Context & Business Logic

This is a **Job-Hunting Oriented Developer Portfolio**, architected to showcase professional expertise, projects, and skills to recruiters and hiring managers. The application is built to land high-quality job offers globally and locally.

All AI agents MUST strictly adhere to the following core concepts:

## 🛠 Tech Stack & Environment

- **Package Manager:** `pnpm`
- **Framework:** Next.js 15+ (App Router - Utilizing Dynamic Routing for i18n)
- **Internationalization (i18n):** Dual-language support (**English - `en`** as default, **Vietnamese - `vi`**).
- **UI System:** HeroUI v2.x, Tailwind CSS & Framer Motion (Professional, clean, high-contrast animations)
- **Content System:** MDX / Contentlayer (For multi-language blogs and case studies)
- **Language:** TypeScript (Strict Mode)

## 💻 Critical Commands

- **Development:** `pnpm dev`
- **Build:** `pnpm build`
- **Linting:** `pnpm lint` (Must run before finalizing any task)
- **Type Check:** `pnpm tsc`

## 📋 Operational Workflow (Mandatory)

**CRITICAL:** You are PROHIBITED from modifying or creating files until Step 6 is explicitly confirmed by the user.

1. **Pre-flight Check:**
   - Execute `chmod +x .claude/hooks/*.sh`.
   - Scan `.eslintrc` to avoid linting violations.
2. **Analyze Context:** Deep read of task requirements (Ensure any new text/UI supports both `en` and `vi`).
3. **Explore & Propose:** Present 2-3 technical/UI approaches (e.g., Global state switcher vs. URL-based routing `/[lang]/...`, layout optimizations for recruiters).
4. **User Decision:** **STOP.** Wait for the user to select an approach or provide feedback.
5. **Final Implementation Plan:** After an approach is selected, document a step-by-step technical plan (file paths, strict types for bilingual dictionaries, mock data).
6. **FINAL APPROVAL GATE:** **STOP & WAIT.** Ask: *"Do you approve this plan? (Yes/No)"*. Do NOT proceed to coding without a "Yes" or "Proceed".
7. **Execution:** Implement code ONLY after the plan is approved. Follow HeroUI v2 Compound patterns.
8. **Quality Assurance:** Run `pnpm lint` and `pnpm tsc`. Verify Multi-language SEO tags, responsive layout, and CTA conversion paths.

## 📐 Engineering Standards

- **Component Pattern:** Utilize **HeroUI Compound Components** exclusively. Ensure language switchers are fully accessible.
- **Bilingual Architecture (i18n):** Every visual component must accept translation dictionaries. Never hardcode text. Default language route is `/` (English) or `/en`, with `/vi` for Vietnamese.
- **Recruiter UI/UX Optimization:** 
  - One-click PDF Resume download (Bilingual options).
  - High-visibility Call-to-Action (CTA) buttons: "Hire Me", "Contact", "View GitHub".
  - Clean, scannable layouts tailored for 6-second recruiter scans.
- **Performance & ATS SEO:** Maximize Lighthouse scores (Target: 95+). Ensure text is completely indexable by search engines and Applicant Tracking Systems (ATS) — avoid rendering crucial text inside complex web canvases or un-selectable imagery.
- **Type Safety:** 100% TypeScript coverage. Strict typing for localization dictionary keys to prevent missing translation errors during build.
- **Business Logic:** Toggle features for "Draft/Archive" states on projects, and "Open to Work" badges dynamically triggered via global config.

## 📂 Navigation & References

- **Agents & Roles:** [./.claude/agents/portfolio-expert.md]
- **Specific Rules:** [./.claude/rules/i18n-and-seo.md]
- **Response Style:** [./.claude/output-styles/terse.md]
- **Next.js Architecture:** [./.claude/rules/nextjs-architecture.md]
<!-- END:project-context -->