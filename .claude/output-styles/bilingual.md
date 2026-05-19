# Output Style: Bilingual Delivery (Trình bày Song ngữ)

## 🎯 Core Philosophy
Since this project mandates dual-language support (English and Vietnamese) for Job-Hunting, the AI must present translations clearly and symmetrically.

## 📝 Rules for AI Responses
1. **Dictionary JSON Format:** When extracting hardcoded text from a component, ALWAYS provide the output in two distinct JSON blocks for easy copying:
   - One labeled `🇺🇸 English (en/common.json)`
   - One labeled `🇻🇳 Vietnamese (vi/common.json)`
2. **Key Consistency:** The JSON keys must be identical across both languages. Use camelCase or nested structures as appropriate (e.g., `hero.title`, `hero.downloadCV`).
3. **MDX Content Generation:** When writing project case studies or blog posts:
   - Present the English content first under a clear `### 🇺🇸 English Version` heading.
   - Present the Vietnamese content immediately after under a `### 🇻🇳 Vietnamese Version` heading.
4. **Contextual Translation:** Translate professional tech terms accurately. E.g., "Software Engineer" -> "Kỹ sư Phần mềm", "Open to work" -> "Sẵn sàng nhận việc", instead of literal word-by-word translations.