# Command: @review

## 🎯 Purpose
Audits the current file or provided code snippet for Tech Recruitment Standards, ATS SEO, and Next.js Performance.

## ⚙️ Execution Steps
When the user types `@review [File/Code]`:

1.  **Recruiter 6-Second Test:**
    -   Is the core information (Role, Tech Stack, CTA) instantly visible?
    -   Are CTAs (e.g., "Hire Me", "Download CV") prominent and accessible?
2.  **ATS & SEO Check:**
    -   Is semantic HTML used properly (`<article>`, `<section>`, `<h1>` to `<h6>`)?
    -   Is crucial text machine-readable (not hidden in SVGs, canvas, or complex ARIA-hidden elements)?
3.  **Performance Check (Lighthouse 95+ Goal):**
    -   Are Client Components (`"use client"`) isolated to the smallest possible leaf nodes in the tree?
    -   Are images optimized using Next.js `<Image>`?
4.  **Actionable Output:** Do NOT just praise the code. Output a bulleted, prioritized list of STRICT, actionable fixes.