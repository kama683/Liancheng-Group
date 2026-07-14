import type { CatalogNavItem } from "@/lib/types";

export const BRAND = "Liancheng";
export const COMPANY_NAME = "Shanghai Liancheng (Group) Co., Ltd.";

export { LOGO_PATH, HERO_BG_PATH, PRODUCT_IMAGE_PATH } from "@/lib/assets";

export const CATALOG_INTRO =
  "Liancheng — ведущий производитель насосов в Китае. Продукция широко используется в таких национальных опорных областях, как муниципальное управление, водное хозяйство, строительство, противопожарная защита, электроэнергетика, охрана окружающей среды, нефтяная, химическая промышленность, горнодобывающая промышленность и медицина. Liancheng предоставляет высококачественные решения в области центробежных насосов для предприятий и проектов по всему миру благодаря своему мощному техническому накоплению и возможностям НИОКР.";

export const MAIN_NAV = [
  { href: "/", label: "Дом" },
  { href: "/about-us", label: "О компании" },
  { href: "/products", label: "Каталог" },
  { href: "/projects", label: "Проекты" },
  { href: "/contact", label: "Контакты" },
] as const;

export type MainNavHref = (typeof MAIN_NAV)[number]["href"];

export const CATALOG_NAV: CatalogNavItem[] = [
  {
    id: "wastewater-submersible",
    title: "ПОГРУЖНОЙ НАСОС ДЛЯ СТОЧНЫХ ВОД",
    label: "Погружной насос для сточных вод",
    category: "pumps",
    page: "/products",
  },
  {
    id: "single-suction-centrifugal",
    title: "ЦЕНТРОБЕЖНЫЙ НАСОС С ОДНОСТОРОННИМ ВСАСЫВАНИЕМ",
    label: "Центробежный насос с односторонним всасыванием",
    category: "pumps",
    page: "/products",
  },
  {
    id: "double-suction-split-case",
    title: "ВОДЯНОЙ НАСОС С ДВОЙНЫМ ВСАСЫВАНИЕМ И РАЗДЕЛЬНЫМ КОРПУСОМ",
    label: "Водяной насос с двойным всасыванием и раздельным корпусом",
    category: "pumps",
    page: "/products",
  },
  {
    id: "vertical-long-shaft",
    title: "ВЕРТИКАЛЬНЫЙ НАСОС С ДЛИННЫМ ВАЛОМ",
    label: "Вертикальный насос с длинным валом",
    category: "pumps",
    page: "/products",
  },
  {
    id: "axial-mixed-flow",
    title: "ОСЕВОЙ ИЛИ ДИАГОНАЛЬНЫЙ НАСОС",
    label: "Осевой или диагональный насос",
    category: "pumps",
    page: "/products",
  },
  {
    id: "petrochemical",
    title: "НЕФТЕХИМИЧЕСКИЙ НАСОС",
    label: "Нефтехимический насос",
    category: "pumps",
    page: "/products",
  },
  {
    id: "control-panel",
    title: "ЭЛЕКТРИЧЕСКАЯ ПАНЕЛЬ УПРАВЛЕНИЯ",
    label: "Электрическая панель управления",
    category: "pumps",
    page: "/products",
  },
  {
    id: "fire-pump",
    title: "ПОЖАРНЫЙ НАСОС",
    label: "Пожарный насос",
    category: "pumps",
    page: "/products",
  },
  {
    id: "water-supply-complete",
    title: "ПОЛНОЕ ОБОРУДОВАНИЕ ДЛЯ ВОДОСНАБЖЕНИЯ",
    label: "Полное оборудование для водоснабжения",
    category: "pumps",
    page: "/products",
  },
  {
    id: "valves",
    title: "ТРУБОПРОВОДНАЯ АРМАТУРА",
    label: "Трубопроводная арматура",
    category: "valves",
    page: "/products/valves",
  },
  {
    id: "control",
    title: "ЭЛЕКТРИЧЕСКИЕ ШКАФЫ УПРАВЛЕНИЯ",
    label: "Электрические шкафы управления",
    category: "control",
    page: "/products/control",
  },
  {
    id: "water-modular",
    title: "МОДУЛЬНЫЕ РЕШЕНИЯ",
    label: "Оборудование для водоснабжения (модульные решения)",
    category: "water",
    page: "/products/water",
  },
];

export const MAIN_CATEGORIES = [
  { id: "pumps" as const, title: "Насосы", slug: "pumps", route: "/products" },
  { id: "valves" as const, title: "Трубопроводная арматура", slug: "valves", route: "/products/valves" },
  { id: "control" as const, title: "Электрические шкафы управления", slug: "control", route: "/products/control" },
  { id: "water" as const, title: "Оборудование для водоснабжения", slug: "water", route: "/products/water" },
];

export const CATEGORY_ANCHORS: Record<string, string> = {
  water: "ПОЛНОЕ ОБОРУДОВАНИЕ ДЛЯ ВОДОСНАБЖЕНИЯ",
  control: "ЭЛЕКТРИЧЕСКАЯ ПАНЕЛЬ УПРАВЛЕНИЯ",
  valves: "ТРУБОПРОВОДНАЯ АРМАТУРА",
};

export const HOME_STATS = [
  { value: "5", label: "промышленных парков" },
  { value: "550 000", label: "м² производственных площадей" },
  { value: "2000+", label: "комплектов оборудования" },
  { value: "30+", label: "филиалов" },
  { value: "1800+", label: "специалистов продаж и сервиса" },
];

export const HOME_FEATURED_PRODUCTS = ["sls", "slw", "gdl", "slg", "wq", "wqc"];

export const HOME_PROJECTS_PREVIEW = [
  "Столичный аэропорт",
  "Шанхайский международный аэропорт Хунцяо",
  "Шанхайский сад Луцзяцзуй",
  "Сад Гуандун Цзядуо",
  "Второй дом социального обеспечения в Шанхае",
  "Шанхайский центр Керри",
];

export const RESERVED_PRODUCT_SLUGS = new Set(["pumps", "valves", "control", "water"]);
