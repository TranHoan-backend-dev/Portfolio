"use client";

import React, { useState, useEffect } from "react";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { Terminal, Server } from "lucide-react";

import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "hero", label: "Trang Chủ" },
    { id: "about", label: "Giới Thiệu" },
    { id: "projects", label: "Dự Án" },
    { id: "contact", label: "Liên Hệ" },
  ];

  return (
    <HeroUINavbar
      className={`fixed top-0 transition-all duration-300 ${scrolled
          ? "bg-white/80 dark:bg-brand-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-brand-gray"
          : "bg-transparent"
        }`}
      classNames={{
        wrapper: "px-4 sm:px-6 lg:px-8 h-20",
      }}
      id="main-nav"
      isMenuOpen={isMenuOpen}
      maxWidth="xl"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <button
            className="flex items-center space-x-2 cursor-pointer group border-none bg-transparent p-0 text-left"
            onClick={() => scrollToSection("hero")}
          >
            <div className="relative">
              <Terminal className="w-8 h-8 text-brand-teal dark:text-brand-cyan transition-transform group-hover:rotate-12" />
              <Server className="w-4 h-4 text-brand-gold absolute -bottom-1 -right-1" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter text-gray-900 dark:text-white uppercase">
              TRANHOAN<span className="text-brand-teal dark:text-brand-cyan">.DEV</span>
            </span>
          </button>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-8" justify="center">
        {navLinks.map((link) => (
          <NavbarItem key={link.id}>
            <Link
              className="font-sans text-sm font-medium text-gray-600 dark:text-brand-light hover:text-brand-teal dark:hover:text-brand-cyan transition-colors relative group cursor-pointer"
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-teal dark:bg-brand-cyan transition-all group-hover:w-full" />
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="flex gap-4 items-center">
          <ThemeSwitch />
          <Button
            className="hidden md:flex border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white dark:border-brand-cyan dark:text-brand-cyan dark:hover:bg-brand-cyan dark:hover:text-brand-dark transition-all duration-300 shadow-[0_0_15px_rgba(69,162,158,0.3)] dark:shadow-[0_0_15px_rgba(102,252,241,0.3)]"
            radius="full"
            variant="bordered"
            onPress={() => scrollToSection("contact")}
          >
            Kết Nối
          </Button>
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden text-gray-600 dark:text-brand-light"
        />
      </NavbarContent>

      <NavbarMenu className="bg-white/95 dark:bg-brand-dark/95 backdrop-blur-xl pt-6">
        {navLinks.map((link) => (
          <NavbarMenuItem key={link.id}>
            <Link
              className="w-full text-gray-600 dark:text-brand-light hover:text-brand-teal dark:hover:text-brand-cyan py-4 text-lg font-medium border-b border-gray-200 dark:border-brand-gray/30"
              size="lg"
              onClick={() => scrollToSection(link.id)}
            >
              {link.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="pt-4">
          <Button
            fullWidth
            className="bg-brand-teal text-white dark:bg-brand-cyan dark:text-brand-dark font-bold py-6"
            radius="lg"
            onPress={() => scrollToSection("contact")}
          >
            Kết Nối Ngay
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
