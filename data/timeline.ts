export type TimelineItem = {
  id: string;
  title: string;
  company: string;
  date: string;
  location?: string;
  bullets?: string[];
  tags?: string[];
};

export const TIMELINE: TimelineItem[] = [
  {
    id: "senior",
    title: "Lập Trình Viên Fullstack Cao Cấp",
    company: "Tech Solutions Inc",
    date: "2023 — Present",
    location: "San Francisco, CA",
    bullets: [
      "Led team of 8 developers in building enterprise applications",
      "Improved application performance by 60% through optimization",
      "Implemented CI/CD pipeline reducing deployment time by 75%",
      "Mentored 5 junior developers to senior level",
    ],
    tags: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"],
  },
  {
    id: "engineer",
    title: "Fullstack Engineer",
    company: "Startup Co",
    date: "2020 — 2023",
    location: "Remote",
    bullets: ["Built fullstack products", "Improved testing coverage"],
    tags: ["Next.js", "Prisma", "GraphQL"],
  },
  {
    id: "junior",
    title: "Junior Developer",
    company: "Web Agency",
    date: "2018 — 2020",
    location: "Hanoi, VN",
    bullets: [
      "Started building web apps",
      "Worked on multiple client projects",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

export default TIMELINE;
