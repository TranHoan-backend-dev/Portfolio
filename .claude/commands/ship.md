# Command: @ship

**Description:** Execute a comprehensive quality check and prepare the portfolio project for production deployment.

## 🚀 Execution Steps

1. **Linting Check:** Run `pnpm lint` to ensure no styling or syntax violations based on `.eslintrc`.
2. **Type Verification:** Run `pnpm tsc` to confirm 100% TypeScript integrity (specifically check strict types for i18n dictionaries).
3. **SEO, i18n & Content Audit (Critical):** 
   - Verify that all translation keys (en/vi) are fully mapped and no hardcoded text exists.
   - Ensure all public projects have proper SEO metadata (Title, Description, OpenGraph).
   - Ensure projects or blogs marked as "Draft" are filtered out of the production build.
4. **Production Build:** Execute `pnpm build` to verify the project can be successfully compiled and statically generated.
5. **Final Report:**
   - If all steps pass: Output "Portfolio is ready to ship 🚀" and summarize Lighthouse/SEO readiness.
   - If any step fails: List all errors and blockers that must be resolved.