import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Space_Grotesk as FontDisplay,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontDisplay = FontDisplay({
  subsets: ["latin"],
  variable: "--font-display",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
