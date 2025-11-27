"use client";

import React from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useIsSSR } from "@react-aria/ssr";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ className }) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted || isSSR) {
    return (
      <div
        className={
          className ?? "w-14 h-7 rounded-full bg-default-200 animate-pulse"
        }
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      aria-label="Toggle theme"
      className={
        "relative w-14 h-7 rounded-full p-1 shadow-lg hover:shadow-xl transition-shadow duration-300 " +
        (className ?? "")
      }
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {/* Background glow */}
      <motion.div
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary blur-md"
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Toggle circle */}
      <motion.div
        layout
        animate={{ x: isDark ? 0 : 24 }}
        className="relative z-10 w-5 h-5 rounded-full bg-white shadow-md flex items-center justify-center"
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="moon"
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              initial={{ scale: 0, rotate: -180 }}
              transition={{ duration: 0.18 }}
            >
              <MoonFilledIcon className="text-xs text-primary" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              initial={{ scale: 0, rotate: -180 }}
              transition={{ duration: 0.18 }}
            >
              <SunFilledIcon className="text-xs text-yellow-500" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Stars/ornaments for dark mode */}
      {isDark && (
        <motion.div
          animate={{ opacity: 1 }}
          className="absolute inset-0 flex items-center justify-end pr-2"
          initial={{ opacity: 0 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ scale: [0.5, 1, 0.5], opacity: [0.3, 1, 0.3] }}
              className="w-0.5 h-0.5 bg-white rounded-full mx-0.5"
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.28 }}
            />
          ))}
        </motion.div>
      )}
    </motion.button>
  );
};

export default ThemeSwitch;
