import { Manrope, Noto_Sans_SC, PT_Sans } from "next/font/google";

export const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600", "700", "800"],
});

export const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  weight: ["400", "700"],
});

export const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sc",
  weight: ["400", "500", "700"],
});
