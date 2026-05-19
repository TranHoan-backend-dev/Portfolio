# Command: @clean

**Description:** Wipe development artifacts, clear cache, and perform a fresh environment setup.

## 🧹 Cleanup Steps

1. **Process Management:** Instruct the user to stop any active development servers (`Ctrl/Cmd + C`).
2. **Directory Cleanup:** Delete `.next/` (Next.js cache), `node_modules/`, and any other build artifacts (like `.contentlayer` if using MDX).
3. **Fresh Installation:** Execute `pnpm install` to ensure all dependencies are correctly linked and resolved.
4. **Environment Check:** Run `pnpm dev` to verify the environment is restored and the portfolio compiles correctly.