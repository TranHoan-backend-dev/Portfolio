"use client";

import React from "react";
import { Avatar } from "@heroui/avatar";
import { Button } from "@heroui/button";
import { motion, Variants } from "framer-motion";

import { useLocale } from "@/utils/i18n";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const Hero: React.FC = () => {
  const { t } = useLocale();

  return (
    <section className="w-full">
      <motion.div
        className="min-h-[72vh] flex flex-col items-center justify-center py-20 px-4"
        initial="hidden"
        variants={container}
        viewport={{ once: true }}
        whileInView="show"
      >
        <motion.div className="mb-6" variants={itemUp}>
          <div className="w-36 h-36 rounded-full overflow-hidden ring-4 ring-white dark:ring-black shadow-xl">
            <Avatar
              className="w-full h-full object-cover"
              name="Me"
              src="https://i.pravatar.cc/300?u=a042581f4e29026024d"
            />
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center leading-tight max-w-3xl"
          variants={itemUp}
        >
          {t("welcome")} <span className="text-primary">{t("developer")}</span>
        </motion.h1>

        <motion.p
          className="mt-4 text-base md:text-lg text-default-600 text-center max-w-2xl"
          variants={itemUp}
        >
          {t("intro")}
        </motion.p>

        <motion.div className="mt-8 flex gap-4" variants={itemUp}>
          <Button className="shadow-md" color="primary" size="lg">
            {t("viewProjects")}
          </Button>
          <Button
            className="border border-default-200"
            size="lg"
            variant="bordered"
          >
            {t("contactMe")}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
