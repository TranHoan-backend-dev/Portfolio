"use client";

import React from "react";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Terminal, Mail, Globe, Heart } from "lucide-react";

import { GithubIcon as Github } from "@/components/icons";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-brand-dark border-t border-gray-200 dark:border-brand-gray/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-x-2">
              <Terminal className="w-6 h-6 text-brand-teal dark:text-brand-cyan" />
              <span className="font-display font-bold text-xl text-gray-900 dark:text-white">
                TRANHOAN<span className="text-brand-teal dark:text-brand-cyan">.DEV</span>
              </span>
            </div>
            <p className="text-gray-600 dark:text-brand-light text-sm max-w-xs text-center md:text-left">
              Backend Developer specializing in scalable systems and clean
              architecture.
            </p>
          </div>

          {/* Links using HeroUI Button and Link */}
          <div className="flex space-x-4">
            <Button
              isExternal
              isIconOnly
              as={Link}
              className="bg-gray-100 dark:bg-brand-gray/20 text-gray-600 dark:text-brand-light hover:text-brand-teal dark:hover:text-brand-cyan hover:bg-gray-200 dark:hover:bg-brand-gray/40 transition-all rounded-full"
              href="https://github.com/TranHoan-backend-dev"
              variant="flat"
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button
              isIconOnly
              as={Link}
              className="bg-gray-100 dark:bg-brand-gray/20 text-gray-600 dark:text-brand-light hover:text-brand-teal dark:hover:text-brand-cyan hover:bg-gray-200 dark:hover:bg-brand-gray/40 transition-all rounded-full"
              href="mailto:hoana5k44nknd@gmail.com"
              variant="flat"
            >
              <Mail className="w-5 h-5" />
            </Button>
            <Button
              isExternal
              isIconOnly
              as={Link}
              className="bg-gray-100 dark:bg-brand-gray/20 text-gray-600 dark:text-brand-light hover:text-brand-teal dark:hover:text-brand-cyan hover:bg-gray-200 dark:hover:bg-brand-gray/40 transition-all rounded-full"
              href="https://tranhoan-dev.vercel.app"
              variant="flat"
            >
              <Globe className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-brand-gray/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 dark:text-brand-light/40 text-xs">
            © {new Date().getFullYear()} Tran Xuan Hoan. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-gray-500 dark:text-brand-light/40 text-xs">
            <span>Built with</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            <span>using HeroUI, Next.js & Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
