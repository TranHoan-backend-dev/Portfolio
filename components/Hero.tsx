"use client";

import React from "react";
import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";

import { useLocale } from "@/utils/i18n";

export const Hero: React.FC = () => {
  const { t } = useLocale();

  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="pt-50 flex flex-col items-center"
      initial={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.6 }}
    >
      <Avatar
        className="w-30 h-30 text-large"
        name="Me"
        src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
      />
      <h1 className="max-w-lg break-words pt-5 text-5xl text-center">
        {t("welcome")} <span className="text-cyan-500">{t("developer")}</span>
      </h1>
      <div className="text-1xl max-w-lg pt-5 text-center break-words">
        {t("intro")}
      </div>
      <div className="pt-10 flex flex-row items-center justify-between gap-5">
        <Button color="primary" size="lg">
          {t("viewProjects")}
        </Button>
        <Button
          className="border border-primary dark:text-white dark:bg-gray-800 bg-white text-primary"
          size="lg"
        >
          {t("contactMe")}
        </Button>
      </div>
    </motion.section>
  );
};

export default Hero;
