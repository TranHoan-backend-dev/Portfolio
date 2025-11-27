"use client";

import * as React from "react";

export type Locale = "en" | "vi";

type Translations = Record<Locale, Record<string, string>>;

const translations: Translations = {
  en: {
    welcome: "Welcome, I'm",
    intro:
      "Backend Developer with hands-on experience building scalable web and mobile applications. Skilled in frontend (React, TypeScript) and backend systems (Java, Spring Boot). Passionate about writing clean, maintainable code and improving system performance & reliability.",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    developer: "Backend Developer",
    full_name: "Trần Xuân Hoàn",
    about_title: "About Me",
    about_desc:
      "Backend Developer focusing on reliable, maintainable systems. Experienced with RESTful APIs, JWT auth, Docker-based development, relational and NoSQL databases, and component-driven frontends.",
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
      "Lập trình viên Backend với kinh nghiệm xây dựng các ứng dụng web và mobile có khả năng mở rộng. Thành thạo frontend (React, TypeScript) và backend (Java, Spring Boot). Đam mê viết mã sạch, dễ bảo trì và cải thiện hiệu năng, độ tin cậy của hệ thống.",
    viewProjects: "Xem dự án",
    contactMe: "Liên hệ",
    developer: "Lập trình viên Backend",
    full_name: "Trần Xuân Hoàn",
    about_title: "Về tôi",
    about_desc:
      "Lập trình viên Backend tập trung vào hệ thống đáng tin cậy và dễ bảo trì. Có kinh nghiệm với RESTful API, xác thực JWT, Docker, và cả cơ sở dữ liệu quan hệ lẫn NoSQL.",
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
