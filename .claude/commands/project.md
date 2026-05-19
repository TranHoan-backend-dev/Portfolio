# Command: @project

## 🎯 Purpose
Generates a new Markdown/MDX file in the `./projects/` directory to showcase a portfolio case study.

## ⚙️ Execution Steps
When the user types `@project [Project_Name]`:

1.  **Context Retrieval:** Silently read `CLAUDE.local.md` and scan the root CV file (`./*.pdf`) to cross-reference Hoan's actual work experience, role, and timeline related to this project.
2.  **Schema Generation:** Create the MDX Frontmatter including: `title`, `slug`, `date`, `role`, `techStack` (array), `thumbnail`, and `status` (Draft/Published).
3.  **Content Structure (STAR Method):** Draft the content structured for Recruiters:
    -   **TL;DR:** 2-sentence summary.
    -   **Situation & Task:** The problem solved.
    -   **Action:** Technical approach (mentioning specific tools like YOLO, Next.js, etc.).
    -   **Result:** Quantifiable impact (if available) or key features delivered.
4.  **Bilingual Output:** Provide the full MDX content with both English and Vietnamese sections (or instruct on how it fits the project's i18n MDX strategy).