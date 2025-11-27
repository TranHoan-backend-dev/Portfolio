"use client";

import React from "react";
import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";
import { useLocale } from "@/utils/i18n";

export const Footer: React.FC = () => {
  const { t } = useLocale();

  return (
    <footer className="w-full border-t dark:border-default-800 mt-16 py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm">
          © {new Date().getFullYear()} {siteConfig.name}. {t("footer_rights")}
        </div>
        <div className="flex gap-3 items-center">
          <Link isExternal href={siteConfig.links.github}>
            GitHub
          </Link>
          {siteConfig.links.email && (
            <Link isExternal href={siteConfig.links.email}>
              Email
            </Link>
          )}
          {siteConfig.links.portfolio && (
            <Link isExternal href={siteConfig.links.portfolio}>
              Portfolio
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
