/** Asset paths and dimensions — mirrors `site/assets/` originals. */

export const ASSETS = {
  logo: {
    src: "/assets/logo/updated-logo.png",
    width: 470,
    height: 575,
    alt: "Bellery",
  },
  heroBg: {
    src: "/assets/logo/chatgpt-image-8-2026-10_18_08-mrc55t9q-removebg-preview.png",
    width: 500,
    height: 500,
    alt: "",
  },
  logoBackground: {
    src: "/assets/logo/background logo.png",
    width: 1024,
    height: 1536,
    alt: "",
  },
  logoColor: {
    src: "/assets/logo/logo-color.png",
    width: 1024,
    height: 1024,
    alt: "Bellery",
  },
  logoFaint: {
    src: "/assets/logo/logo-faint.png",
    width: 1024,
    height: 1024,
    alt: "",
  },
  pump: {
    src: "/assets/pump.png",
    width: 1666,
    height: 944,
    alt: "Промышленный насос",
  },
  heroPump: {
    src: "/assets/pump without background.png",
    width: 1666,
    height: 944,
    alt: "",
  },
  aboutPhoto: {
    src: "/assets/hero/lainc.jpg",
    width: 1200,
    height: 800,
    alt: "Bellery pumps",
  },
} as const;

export const LOGO_PATH = ASSETS.logo.src;
export const HERO_BG_PATH = ASSETS.heroBg.src;
export const PRODUCT_IMAGE_PATH = ASSETS.pump.src;
