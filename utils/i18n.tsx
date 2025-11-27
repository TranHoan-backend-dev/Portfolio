"use client";

import * as React from "react";

export type Locale = "en" | "vi";

type Translations = Record<Locale, Record<string, string>>;

const translations: Translations = {
  en: {
    welcome: "Welcome, I'm",
    intro:
      "I build modern, fast, and beautiful web experiences. I specialize in full-stack applications with modern technologies.",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    developer: "Fullstack Developer",
    about_title: "About Me",
    about_desc:
      "I am a fullstack developer building modern web apps. I focus on performance, accessibility and great UX.",
    skills_title: "Skills & Technologies",
    projects_title: "Projects",
    projects_filter_all: "All",
    project_demo: "Live",
    project_github: "Code",
    experience_title: "Experience & Education",
    contact_title: "Contact",
    contact_name: "Your name",
    contact_email: "Your email",
    contact_message: "Your message",
    contact_send: "Send message",
    contact_fill_all: "Please fill all fields.",
    contact_sent: "Message sent (placeholder).",
    footer_rights: "All rights reserved.",
  },
  vi: {
    welcome: "Xin chào, tôi là",
    intro:
      "Tôi tạo ra những trải nghiệm web hiện đại, nhanh chóng và đẹp mắt. Chuyên xây dựng ứng dụng full-stack với công nghệ mới nhất.",
    viewProjects: "Xem dự án",
    contactMe: "Liên hệ",
    developer: "Fullstack Developer",
    about_title: "Về tôi",
    about_desc:
      "Tôi là một lập trình viên fullstack xây dựng các ứng dụng web hiện đại. Tôi chú trọng hiệu năng, truy cập và trải nghiệm người dùng.",
    skills_title: "Kỹ năng & Công nghệ",
    projects_title: "Dự án",
    projects_filter_all: "Tất cả",
    project_demo: "Trực tiếp",
    project_github: "Mã nguồn",
    experience_title: "Kinh nghiệm & Học vấn",
    contact_title: "Liên hệ",
    contact_name: "Tên của bạn",
    contact_email: "Email của bạn",
    contact_message: "Tin nhắn của bạn",
    contact_send: "Gửi tin",
    contact_fill_all: "Vui lòng điền đầy đủ thông tin.",
    contact_sent: "Đã gửi tin (placeholder).",
    footer_rights: "Bảo lưu mọi quyền.",
  },
};

interface LocaleContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
}

const LocaleContext = React.createContext<LocaleContextValue | undefined>(
  undefined,
);

export function LocaleProvider({
  children,
  defaultLocale = "en",
}: {
  children: React.ReactNode;
  defaultLocale?: Locale;
}) {
  const [locale, setLocale] = React.useState<Locale>(defaultLocale);

  const t = React.useCallback(
    (key: string) => {
      return translations[locale][key] ?? translations.en[key] ?? key;
    },
    [locale],
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = React.useContext(LocaleContext);

  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");

  return ctx;
}

export default translations;
