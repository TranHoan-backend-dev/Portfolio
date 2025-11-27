"use client";

import React from "react";
import { Card } from "@heroui/card";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { motion } from "framer-motion";

import { useLocale } from "@/utils/i18n";

type Project = {
  id: string;
  title: string;
  category: "frontend" | "backend" | "fullstack";
  description: string;
  demo?: string;
  github?: string;
};

const SAMPLE_PROJECTS: Project[] = [
  {
    id: "ims",
    title: "Interview Management System (IMS)",
    category: "fullstack",
    description:
      "IMS is a modern recruitment support platform for candidate & job position management, interview scheduling, role-based access, and internal messaging.",
    demo: "#",
    github:
      "https://github.com/TranHoan-backend-dev/Interview-Management-System",
  },
  {
    id: "labverse",
    title: "LabVerse — Research Paper Management",
    category: "fullstack",
    description:
      "LabVerse helps labs discover, organize, and collaborate on research papers; includes Android app and microservices.",
    demo: "#",
    github: "https://github.com/TranHoan-backend-dev/LabVerse",
  },
  {
    id: "quezee",
    title: "Quezee — Quiz Practice System",
    category: "backend",
    description:
      "Quezee is an online quiz platform with progress tracking, user auth, and study modules built with Java servlet tech.",
    demo: "#",
    github: "https://github.com/TranHoan-backend-dev/Quiz-Practice-System",
  },
];

export const ProjectsSection: React.FC = () => {
  const { t } = useLocale();
  const [filter, setFilter] = React.useState<string>("all");

  const filtered =
    filter === "all"
      ? SAMPLE_PROJECTS
      : SAMPLE_PROJECTS.filter((p) => p.category === filter);

  return (
    <motion.section
      className="w-full max-w-6xl my-16 px-4"
      id="projects"
      initial={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="w-12 h-1 bg-cyan-500" />
        <h2 className="text-2xl font-semibold">{t("projects_title")}</h2>
      </div>

      <div className="flex gap-2 mb-6">
        {(["all", "frontend", "backend", "fullstack"] as const).map((c) => (
          <Button
            key={c}
            size="sm"
            variant={filter === c ? "solid" : "flat"}
            onClick={() => setFilter(c)}
          >
            {c === "all" ? t("projects_filter_all") : c}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <Card
            key={p.id}
            className="p-4 relative hover:shadow-lg transition-shadow min-h-[160px]"
          >
            <div className="pb-14">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm mt-2 text-default-500">{p.description}</p>
            </div>

            <div className="absolute bottom-4 right-4 flex gap-2">
              {p.demo && (
                <Button
                  isExternal
                  as={Link}
                  href={p.demo}
                  size="sm"
                  variant="ghost"
                >
                  {t("project_demo")}
                </Button>
              )}
              {p.github && (
                <Button isExternal as={Link} href={p.github} size="sm">
                  {t("project_github")}
                </Button>
              )}
            </div>
          </Card>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
