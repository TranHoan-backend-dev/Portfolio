"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "@heroui/card";
import { Badge } from "@heroui/badge";

import { useLocale } from "@/utils/i18n";
import TIMELINE from "@/data/timeline";

export const TimelineSection: React.FC = () => {
  const { t } = useLocale();

  return (
    <motion.section
      className="w-full max-w-6xl my-16 px-4"
      id="experience"
      initial={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="w-12 h-1 bg-cyan-500" />
        <h2 className="text-2xl font-semibold">{t("experience_title")}</h2>
      </div>

      <div className="relative py-8">
        {/* center line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-default-200 dark:bg-gradient-to-b dark:from-[#3b0fbf]/30 dark:to-[#5a0fd8]/30 transform -translate-x-1/2" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10">
          {TIMELINE.map((item, idx) => {
            const isLeft = idx % 2 === 0;

            const verticalOffset = (idx % 5) * 48; // stagger vertically

            return (
              <div
                key={item.id}
                className={`md:px-6 ${isLeft ? "md:pr-8 md:pl-0" : "md:pl-8 md:pr-0"} relative`}
                style={{ marginTop: `${verticalOffset}px` }}
              >
                {/* connector dot */}
                <motion.div
                  className={`absolute top-6 md:top-6 ${isLeft ? "md:right-[-12px]" : "md:left-[-12px]"} w-5 h-5 rounded-full bg-foreground/90 ring-4 ring-[#5a0fd8]/18`}
                  initial={{ scale: 0 }}
                  viewport={{ once: true }}
                  whileInView={{ scale: 1 }}
                />

                <motion.div
                  className="transition-shadow"
                  initial={{ x: isLeft ? -60 : 60, opacity: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.06 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileInView={{ x: 0, opacity: 1 }}
                >
                  <Card className="portfolio-card p-6 rounded-2xl shadow-xl border border-default-200 dark:border-default-800 bg-default-50 dark:bg-gradient-to-br dark:from-[#0d0d0d] dark:to-[#5a0fd8] dark:bg-opacity-8">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold leading-tight">
                          {item.title}
                        </h3>
                        <div className="mt-2 flex items-center gap-3">
                          <span className="text-primary font-medium">
                            {item.company}
                          </span>
                          <span className="text-default-500">•</span>
                          <span className="text-default-500">{item.date}</span>
                          {item.location && (
                            <span className="text-default-500">
                              • {item.location}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2 text-default-700">
                      {item.bullets?.map((b, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="mt-1 text-green-500">✔</span>
                          <p className="text-sm">{b}</p>
                        </div>
                      ))}
                    </div>

                    {item.tags && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <Badge key={tag} className="text-sm">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </Card>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default TimelineSection;
