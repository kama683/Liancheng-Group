import type { CatalogNavItem } from "@/lib/types";

export const BRAND = "Bellery";
export const COMPANY_NAME = "Bellery pumps";

export { LOGO_PATH, HERO_BG_PATH, PRODUCT_IMAGE_PATH } from "@/lib/assets";

export const CATALOG_INTRO =
  "Bellery — ведущий производитель насосов в Китае. Продукция широко используется в таких национальных опорных областях, как муниципальное управление, водное хозяйство, строительство, противопожарная защита, электроэнергетика, охрана окружающей среды, нефтяная, химическая промышленность, горнодобывающая промышленность и медицина. Bellery предоставляет высококачественные решения в области центробежных насосов для предприятий и проектов по всему миру благодаря своему мощному техническому накоплению и возможностям НИОКР.";

// labelKey refers to the "Nav" message namespace (see messages/*.json).
export const MAIN_NAV = [
  { href: "/", labelKey: "home" },
  { href: "/about-us", labelKey: "aboutUs" },
  { href: "/products", labelKey: "catalog" },
  { href: "/projects", labelKey: "projects" },
  { href: "/contact", labelKey: "contacts" },
] as const;

export type MainNavHref = (typeof MAIN_NAV)[number]["href"];

export const CATALOG_NAV: CatalogNavItem[] = [
  {
    id: "wastewater-submersible",
    title: "НАСОСЫ, СМЕСИТЕЛИ И ОБОРУДОВАНИЕ ДЛЯ СТОЧНОЙ ВОДЫ",
    label: "НАСОСЫ, СМЕСИТЕЛИ И ОБОРУДОВАНИЕ ДЛЯ СТОЧНОЙ ВОДЫ",
    category: "pumps",
    page: "/products",
  },
  {
    id: "single-suction-centrifugal",
    title: "ОБЩЕПРОМЫШЛЕННОЕ ПРИМЕНЕНИЕ И СТРОИТЕЛЬСТВО",
    label: "ОБЩЕПРОМЫШЛЕННОЕ ПРИМЕНЕНИЕ И СТРОИТЕЛЬСТВО",
    category: "pumps",
    page: "/products",
  },
  {
    id: "double-suction-split-case",
    title: "ПРОМЫШЛЕННОЕ ПРИМЕНЕНИЕ И СЕЛЬСКОЕ ХОЗЯЙСТВО",
    label: "ПРОМЫШЛЕННОЕ ПРИМЕНЕНИЕ И СЕЛЬСКОЕ ХОЗЯЙСТВО",
    category: "pumps",
    page: "/products",
  },
  {
    id: "petrochemical",
    title: "НЕФТЯНАЯ И ХИМИЧЕСКАЯ ПРОМЫШЛЕННОСТЬ, API610",
    label: "НЕФТЯНАЯ И ХИМИЧЕСКАЯ ПРОМЫШЛЕННОСТЬ, API610",
    category: "pumps",
    page: "/products",
  },
  {
    id: "control-panel",
    title: "ЭЛЕКТРИЧЕСКИЕ ШКАФЫ УПРАВЛЕНИЯ",
    label: "ЭЛЕКТРИЧЕСКИЕ ШКАФЫ УПРАВЛЕНИЯ",
    category: "pumps",
    page: "/products",
  },
  {
    id: "fire-pump",
    title: "ПОЖАРНОЕ НАСОСНОЕ ОБОРУДОВАНИЕ ПО СТАНДАРТУ FM / UL",
    label: "ПОЖАРНОЕ НАСОСНОЕ ОБОРУДОВАНИЕ ПО СТАНДАРТУ FM / UL",
    category: "pumps",
    page: "/products",
  },
  {
    id: "water-supply-complete",
    title: "МОДУЛЬНЫЕ РЕШЕНИЯ",
    label: "МОДУЛЬНЫЕ РЕШЕНИЯ",
    category: "water",
    page: "/products/water",
  },
  {
    id: "valves",
    title: "ТРУБОПРОВОДНАЯ АРМАТУРА",
    label: "Трубопроводная арматура",
    category: "valves",
    page: "/products/valves",
  },
];

export const MAIN_CATEGORIES = [
  { id: "pumps" as const, title: "Насосы", slug: "pumps", route: "/products" },
  { id: "valves" as const, title: "Трубопроводная арматура", slug: "valves", route: "/products/valves" },
  { id: "water" as const, title: "Оборудование для водоснабжения", slug: "water", route: "/products/water" },
];

// Values are CatalogNavItem/CatalogSection ids (language-neutral), not display text.
export const CATEGORY_ANCHORS: Record<string, string> = {
  water: "water-supply-complete",
  valves: "valves",
};

export const HOME_STATS = [
  { value: "5", label: "промышленных парков" },
  { value: "550 000", label: "м² производственных площадей" },
  { value: "2000+", label: "комплектов оборудования" },
  { value: "30+", label: "филиалов" },
  { value: "1800+", label: "специалистов продаж и сервиса" },
];

export const HOME_FEATURED_PRODUCTS = ["sls", "slw", "gdl", "slg", "wq", "wqc"];

export const RESERVED_PRODUCT_SLUGS = new Set(["pumps", "valves", "control", "water"]);
