import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const catalogPath = path.join(__dirname, "../data/catalog.json");
const data = JSON.parse(fs.readFileSync(catalogPath, "utf8"));

const SECTION_TITLES = {
  wastewater: "ПОГРУЖНОЙ НАСОС ДЛЯ СТОЧНЫХ ВОД",
  singleSuction: "ЦЕНТРОБЕЖНЫЙ НАСОС С ОДНОСТОРОННИМ ВСАСЫВАНИЕМ",
  doubleSuction: "ВОДЯНОЙ НАСОС С ДВОЙНЫМ ВСАСЫВАНИЕМ И РАЗДЕЛЬНЫМ КОРПУСОМ",
  longShaft: "ВЕРТИКАЛЬНЫЙ НАСОС С ДЛИННЫМ ВАЛОМ",
  axial: "ОСЕВОЙ ИЛИ ДИАГОНАЛЬНЫЙ НАСОС",
  petrochemical: "НЕФТЕХИМИЧЕСКИЙ НАСОС",
  control: "ЭЛЕКТРИЧЕСКАЯ ПАНЕЛЬ УПРАВЛЕНИЯ",
  fire: "ПОЖАРНЫЙ НАСОС",
  waterSupply: "ПОЛНОЕ ОБОРУДОВАНИЕ ДЛЯ ВОДОСНАБЖЕНИЯ",
};

function nameIncludesControl(product) {
  return (product.name || "").toUpperCase().includes("ШКАФ");
}

function classifyPump(product) {
  const slug = product.slug.toLowerCase();
  const code = product.code.toUpperCase();
  const section = (product.section || "").toUpperCase();

  const controlSlugs = new Set([
    "lec",
    "lbp",
    "hv-control-cabinet",
    "lfb",
  ]);
  const waterSupplySlugs = new Set([
    "zwlv",
    "smart-pump-room",
    "smart-pump-station",
  ]);

  if (controlSlugs.has(slug) || code.includes("ШКАФ") || nameIncludesControl(product)) {
    return SECTION_TITLES.control;
  }

  if (
    waterSupplySlugs.has(slug) ||
    code.startsWith("LCZ") ||
    code.startsWith("ZWL(I)")
  ) {
    return SECTION_TITLES.waterSupply;
  }

  if (
    product.category === "control" ||
    section.includes("ЭЛЕКТРИЧЕСК")
  ) {
    return SECTION_TITLES.control;
  }

  if (product.category === "water" || section.includes("МОДУЛЬНЫЕ")) {
    return SECTION_TITLES.waterSupply;
  }

  if (
    slug.startsWith("xbd") ||
    slug === "xbc" ||
    slug === "fire-stable-water" ||
    slug === "xbd-w" ||
    code.startsWith("XBD") ||
    code.startsWith("XBC") ||
    section.includes("ПОЖАР")
  ) {
    return SECTION_TITLES.fire;
  }

  if (slug === "lpt") {
    return SECTION_TITLES.longShaft;
  }

  if (slug === "qgls" || slug === "zhlbq" || slug === "qz") {
    return SECTION_TITLES.axial;
  }

  if (["wq", "wl", "wqc", "wqx", "yw", "wq-ii"].includes(slug)) {
    return SECTION_TITLES.wastewater;
  }

  if (
    [
      "slnc",
      "sls",
      "slw",
      "gdl",
      "dg",
      "sld",
      "md",
      "slg",
      "ktl",
      "sll",
      "is",
      "zw",
      "qjb",
    ].includes(slug)
  ) {
    return SECTION_TITLES.singleSuction;
  }

  if (
    section.includes("ХИМИЧ") ||
    [
      "ay",
      "ay-multistage",
      "slza",
      "slzae",
      "slzaf",
      "slcz",
      "ayg",
      "ly",
      "slda",
      "sldc",
      "sldtd",
      "slmc",
      "slpp",
      "tmc",
      "xl",
      "model-626113",
      "slfz",
    ].includes(slug)
  ) {
    return SECTION_TITLES.petrochemical;
  }

  if (
    ["slown", "slow", "slow-2stage", "slow-multistage", "s", "n"].includes(
      slug
    ) ||
    code.startsWith("SLO") ||
    code === "S" ||
    section.includes("ПРОМЫШЛЕННОЕ ПРИМЕНЕНИЕ")
  ) {
    return SECTION_TITLES.doubleSuction;
  }

  return SECTION_TITLES.singleSuction;
}

for (const product of Object.values(data.products)) {
  if (product.category === "pumps") {
    product.section = classifyPump(product);
  } else if (product.category === "control") {
    product.section = SECTION_TITLES.control;
  } else if (product.category === "water") {
    product.section = SECTION_TITLES.waterSupply;
  }
}

const titleSet = new Set(Object.values(SECTION_TITLES));
data.sections = data.sections.map((section) => {
  const oldTitle = section.title;
  if (titleSet.has(oldTitle)) return section;

  const products = section.products ?? [];
  if (!products.length) return section;

  const sample = data.products[products[0].slug];
  if (!sample) return section;

  return { ...section, title: sample.section };
});

const grouped = {};
for (const title of Object.values(SECTION_TITLES)) {
  grouped[title] = {
    title,
    products: [],
    paragraphs: [],
    project_list: [],
  };
}

for (const product of Object.values(data.products)) {
  if (!titleSet.has(product.section)) continue;
  const seen = new Set(grouped[product.section].products.map((p) => p.slug));
  if (!seen.has(product.slug)) {
    grouped[product.section].products.push({
      code: product.code,
      name: product.name,
      slug: product.slug,
    });
  }
}

data.sections = [
  ...Object.values(grouped),
  ...data.sections.filter((s) => !titleSet.has(s.title) && s.title === "ТРУБОПРОВОДНАЯ АРМАТУРА"),
  ...data.sections.filter(
    (s) =>
      !titleSet.has(s.title) &&
      s.title !== "ТРУБОПРОВОДНАЯ АРМАТУРА" &&
      !["СТРОИТЕЛЬСТВО ЗДАНИЙ", "ПРОМЫШЛЕННЫЕ И ГОРНОДОБЫВАЮЩИЕ ПРЕДПРИЯТИЯ"].includes(
        s.title
      ) &&
      /^\d+$/.test(s.title)
  ),
];

fs.writeFileSync(catalogPath, JSON.stringify(data, null, 2) + "\n", "utf8");

const counts = {};
for (const p of Object.values(data.products)) {
  if (titleSet.has(p.section)) {
    counts[p.section] = (counts[p.section] ?? 0) + 1;
  }
}
console.log(counts);
