"use client";

import React from "react";
import { Card } from "@heroui/card";
import { Badge } from "@heroui/badge";
import { motion } from "framer-motion";

import { useLocale } from "@/utils/i18n";

export const AboutSection: React.FC = () => {
  const { t } = useLocale();

  return (
    <motion.section
      className="w-full max-w-4xl my-16 px-4"
      id="about"
      initial={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="w-12 h-1 bg-cyan-500" />
        <h2 className="text-2xl font-semibold">{t("about_title")}</h2>
        <Badge className="ml-3">2025</Badge>
      </div>

      <Card className="p-6 bg-default-50 dark:bg-default-900">
        <p className="leading-relaxed text-lg">{t("about_desc")}</p>

        <div className="mt-6">
          <h4 className="font-semibold mb-2">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            <img
              alt="HTML5"
              src="https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white&style=for-the-badge"
            />
            <img
              alt="CSS3"
              src="https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white&style=for-the-badge"
            />
            <img
              alt="JS"
              src="https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge"
            />
            <img
              alt="TS"
              src="https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge"
            />
            <img
              alt="React"
              src="https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black&style=for-the-badge"
            />
            <img
              alt="Next"
              src="https://img.shields.io/badge/-Next.js-000000?logo=next.js&logoColor=white&style=for-the-badge"
            />
            <img
              alt="Java"
              src="https://img.shields.io/badge/-Java-007396?logo=java&logoColor=white&style=for-the-badge"
            />
            <img
              alt="Spring"
              src="https://img.shields.io/badge/-Spring%20Boot-6DB33F?logo=spring&logoColor=white&style=for-the-badge"
            />
            <img
              alt="Node"
              src="https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge"
            />
            <img
              alt="Kotlin"
              src="https://img.shields.io/badge/-Kotlin-0095D5?logo=kotlin&logoColor=white&style=for-the-badge"
            />
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold mb-2">Professional Highlights</h4>
          <ul className="list-disc ml-5 space-y-2 text-default-700">
            <li>Designed RESTful APIs with secure JWT authentication.</li>
            <li>
              Built responsive, component-driven UIs with React & TypeScript.
            </li>
            <li>
              Experienced with relational & NoSQL databases for OLTP and
              document-based storage.
            </li>
            <li>
              Comfortable with Docker-based development and containerization.
            </li>
          </ul>
        </div>
      </Card>
    </motion.section>
  );
};

export default AboutSection;
