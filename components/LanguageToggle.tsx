"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

import { useLocale } from "@/utils/i18n";

export const LanguageToggle: React.FC<{ className?: string }> = ({
  className,
}) => {
  const { locale, setLocale } = useLocale();

  const toggleLanguage = () => {
    const newLang = locale === "en" ? "vi" : "en";

    setLocale(newLang);
  };

  const isEnglish = locale === "en";

  return (
    <motion.button
      aria-label="Toggle language"
      className={clsx(
        "relative w-20 h-9 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 p-1 shadow-lg hover:shadow-xl transition-shadow duration-300",
        className,
      )}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
    >
      {/* Background glow */}
      <motion.div
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 blur-md"
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Toggle circle */}
      <motion.div
        layout
        animate={{
          x: isEnglish ? 0 : 36,
        }}
        className="relative z-10 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center"
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      >
        <AnimatePresence mode="wait">
          {isEnglish ? (
            <motion.span
              key="en"
              animate={{ scale: 1, rotate: 0 }}
              className="text-xs font-bold text-blue-600"
              exit={{ scale: 0, rotate: 180 }}
              initial={{ scale: 0, rotate: -180 }}
              transition={{ duration: 0.2 }}
            >
              EN
            </motion.span>
          ) : (
            <motion.span
              key="vi"
              animate={{ scale: 1, rotate: 0 }}
              className="text-xs font-bold text-indigo-600"
              exit={{ scale: 0, rotate: 180 }}
              initial={{ scale: 0, rotate: -180 }}
              transition={{ duration: 0.2 }}
            >
              VI
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Language labels */}
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <motion.span
          animate={{
            opacity: isEnglish ? 0 : 1,
            scale: isEnglish ? 0.8 : 1,
          }}
          className="text-xs font-semibold text-white"
        >
          EN
        </motion.span>
        <motion.span
          animate={{
            opacity: isEnglish ? 1 : 0,
            scale: isEnglish ? 1 : 0.8,
          }}
          className="text-xs font-semibold text-white"
        >
          VI
        </motion.span>
      </div>
    </motion.button>
  );
};

export default LanguageToggle;
