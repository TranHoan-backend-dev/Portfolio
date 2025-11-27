export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Trần Xuân Hoàn",
  description:
    "Backend Developer — building scalable web & mobile applications. Java, Spring Boot, React, and modern backend systems.",
  navItems: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
    { label: "About", href: "#about" },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/TranHoan-backend-dev",
    twitter: "https://twitter.com/",
    docs: "",
    discord: "",
    sponsor: "",
    email: "mailto:hoana5k44nknd@gmail.com",
    portfolio: "https://tranhoan-dev.vercel.app",
  },
};
