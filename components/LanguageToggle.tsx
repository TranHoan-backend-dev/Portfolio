"use client";

import * as React from "react";
import { Button } from "@heroui/button";
import clsx from "clsx";

import { useLocale } from "@/utils/i18n";

export const LanguageToggle: React.FC<{ className?: string }> = ({
  className,
}) => {
  const { locale, setLocale } = useLocale();

  return (
    <div className={clsx("flex gap-2 items-center", className)}>
      <Button
        aria-pressed={locale === "en"}
        size="sm"
        variant={locale === "en" ? "solid" : "flat"}
        onClick={() => setLocale("en")}
      >
        EN
      </Button>
      <Button
        aria-pressed={locale === "vi"}
        size="sm"
        variant={locale === "vi" ? "solid" : "flat"}
        onClick={() => setLocale("vi")}
      >
        VI
      </Button>
    </div>
  );
};

export default LanguageToggle;
