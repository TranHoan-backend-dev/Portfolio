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
      </Card>
    </motion.section>
  );
};

export default AboutSection;
