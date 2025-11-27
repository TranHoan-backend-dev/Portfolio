"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
// import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { LanguageToggle } from "@/components/LanguageToggle";
import {
  GithubIcon,
  // HeartFilledIcon,
  // SearchIcon,
  // Logo,
} from "@/components/icons";

export const Navbar = () => {
  // search removed per design
  const pathname = usePathname() || "/";

  const isActive = (href: string) => {
    if (!href) return false;
    // treat root specially
    if (href === "/") return pathname === "/";

    return pathname === href || pathname.startsWith(href);
  };

  return (
    <HeroUINavbar
      className="fixed top-0 left-0 w-full z-50 bg-white/50 dark:bg-white/10 backdrop-blur-md shadow-sm hero-navbar-custom border-b border-transparent"
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex items-center gap-3" href="/">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg">
              {/* simple up/down chevrons */}
              <svg
                fill="none"
                height="20"
                viewBox="0 0 24 24"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 10l6-6 6 6"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                />
                <path
                  d="M6 14l6 6 6-6"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                />
              </svg>
            </div>
            <p className="font-bold text-inherit text-primary">
              {siteConfig.name}
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Center nav for large screens */}
      <NavbarContent
        className="hidden lg:flex basis-auto justify-center"
        justify="center"
      >
        <ul className="flex gap-6">
          {siteConfig.navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <NavbarItem key={item.href} className="list-none">
                <NextLink
                  className={clsx(
                    "group px-2 py-1 relative inline-block",
                    linkStyles({ color: active ? "primary" : "foreground" }),
                    active ? "text-primary font-medium" : "hover:text-primary",
                  )}
                  href={item.href}
                >
                  <span className="inline-block">{item.label}</span>
                  <span
                    className={clsx(
                      "absolute left-0 right-0 -bottom-2 h-0.5 bg-gradient-to-r from-primary to-secondary origin-left transition-transform duration-200",
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                </NextLink>
              </NavbarItem>
            );
          })}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden lg:flex gap-3 items-center">
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeSwitch />
          </div>

          <Button
            className="rounded-md bg-gradient-to-r from-primary to-secondary text-white shadow-md"
            size="sm"
          >
            Thuê Tôi
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
