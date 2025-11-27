"use client";

import React from "react";
import { Progress } from "@heroui/progress";
import { Badge } from "@heroui/badge";
import { motion } from "framer-motion";

import { useLocale } from "@/utils/i18n";

const SKILLS = [
  { name: "React", value: 90 },
  { name: "Node.js", value: 85 },
  { name: "TypeScript", value: 88 },
  { name: "GraphQL", value: 75 },
];

export const SkillsSection: React.FC = () => {
  const { t } = useLocale();

  return (
    <motion.section
      className="w-full max-w-4xl my-16 px-4"
      id="skills"
      initial={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="w-12 h-1 bg-cyan-500" />
        <h2 className="text-2xl font-semibold">{t("skills_title")}</h2>
        <Badge className="ml-3">Pro</Badge>
      </div>

      <div className="grid gap-4">
        {SKILLS.map((s) => (
          <div key={s.name} className="space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">{s.name}</span>
              <span className="text-sm text-default-500">{s.value}%</span>
            </div>
            <Progress isStriped className="h-3" value={s.value} />
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default SkillsSection;
