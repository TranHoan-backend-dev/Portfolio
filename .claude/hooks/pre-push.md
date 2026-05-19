# Hook: Pre-Push Standards

## 🎯 Purpose
Acts as the final gatekeeper before code is pushed to the remote repository and deployed to production. This focuses on build integrity and SEO performance.

## ⚙️ Execution Rules for AI
When instructed to create or run a pre-push check, enforce the following pipeline:

1. **Production Build (`pnpm build`):** The code MUST compile successfully. This catches Next.js App Router hydration errors, missing dynamic routes, or MDX parsing failures.
2. **Bundle Size Warning:** Highlight if any new dependency heavily increases the First Load JS size (crucial for maintaining the 95+ Lighthouse score for recruiters).
3. **SEO Metadata Check:** Ensure `robots.txt`, `sitemap.xml` generation scripts, and standard OpenGraph tags are not accidentally removed or broken.

**Action:** If `pnpm build` fails, automatically block the push and display the specific terminal error to the user for fixing.