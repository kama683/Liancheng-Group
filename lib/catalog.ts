import catalogJson from "@/data/catalog.json";
import {
  CATALOG_NAV,
  CATEGORY_ANCHORS,
  CATALOG_INTRO,
} from "@/lib/site";
import type {
  CatalogData,
  CatalogPanel,
  CatalogSection,
  ProductCategory,
  ProductDetail,
  SearchIndexItem,
} from "@/lib/types";

const data = catalogJson as CatalogData;

export function getCompanyParagraphs(): string[] {
  return data.company;
}

export function getAllProducts(): ProductDetail[] {
  return Object.values(data.products);
}

export function getProductBySlug(slug: string): ProductDetail | undefined {
  return data.products[slug];
}

export function getProductSlugs(): string[] {
  return Object.keys(data.products);
}

function mergedCatalogSections(products: ProductDetail[]): Record<string, CatalogSection> {
  const merged: Record<string, CatalogSection> = {};
  const navTitles = new Set(CATALOG_NAV.map((n) => n.title));

  for (const section of data.sections) {
    if (!navTitles.has(section.title)) continue;
    if (!merged[section.title]) {
      merged[section.title] = {
        title: section.title,
        products: [],
        paragraphs: section.paragraphs ?? [],
        project_list: section.project_list ?? [],
        bullets: section.bullets,
      };
    }
    const seen = new Set(merged[section.title].products.map((p) => p.slug));
    for (const p of section.products) {
      if (!seen.has(p.slug)) {
        merged[section.title].products.push(p);
        seen.add(p.slug);
      }
    }
  }

  for (const p of products) {
    const secTitle = p.section;
    if (secTitle && navTitles.has(secTitle)) {
      if (!merged[secTitle]) {
        merged[secTitle] = {
          title: secTitle,
          products: [],
          paragraphs: [],
          project_list: [],
        };
      }
      const seen = new Set(merged[secTitle].products.map((x) => x.slug));
      if (!seen.has(p.slug)) {
        merged[secTitle].products.push({
          code: p.code,
          name: p.name,
          slug: p.slug,
        });
      }
    }
  }

  for (const [cat, title] of Object.entries(CATEGORY_ANCHORS)) {
    if (!merged[title]) {
      merged[title] = {
        title,
        products: [],
        paragraphs: [],
        project_list: [],
      };
    }
    const seen = new Set(merged[title].products.map((x) => x.slug));
    for (const p of products) {
      if (p.category === cat && !seen.has(p.slug)) {
        merged[title].products.push({
          code: p.code,
          name: p.name,
          slug: p.slug,
        });
        seen.add(p.slug);
      }
    }
  }

  return merged;
}

export function buildCatalogPanels(
  categoryFilter: ProductCategory | null
): CatalogPanel[] {
  const products = getAllProducts();
  const merged = mergedCatalogSections(products);

  const navItems = categoryFilter
    ? CATALOG_NAV.filter((n) => n.category === categoryFilter)
    : CATALOG_NAV.filter((n) => n.category === "pumps");

  return navItems.map((nav) => ({
    ...nav,
    section: merged[nav.title] ?? {
      title: nav.title,
      products: [],
      paragraphs: [],
      project_list: [],
    },
  }));
}

export function getSearchIndex(
  categoryFilter: ProductCategory | null
): SearchIndexItem[] {
  let products = getAllProducts();
  if (categoryFilter) {
    products = products.filter((p) => p.category === categoryFilter);
  } else {
    products = products.filter((p) => p.category === "pumps");
  }
  return products.map((p) => ({
    code: p.code,
    name: p.name,
    slug: p.slug,
  }));
}

export function getCategoryIntro(category: ProductCategory): string {
  const merged = mergedCatalogSections(getAllProducts());
  const anchor = CATEGORY_ANCHORS[category];
  if (anchor && merged[anchor]?.paragraphs.length) {
    return merged[anchor].paragraphs.join(" ");
  }
  return CATALOG_INTRO;
}

export function getWaterProducts(): ProductDetail[] {
  return getAllProducts().filter((p) => p.category === "water");
}

export function getProjectEquipmentProducts(
  equipmentType: "building" | "industrial",
  limit = 3
): ProductDetail[] {
  const products = getAllProducts();

  const matched =
    equipmentType === "building"
      ? products.filter(
          (p) =>
            p.section.includes("пожар") ||
            p.section.includes("ПОЖАРНЫЙ") ||
            p.code.toUpperCase().startsWith("XBD")
        )
      : products.filter(
          (p) =>
            p.category === "pumps" &&
            (p.section.includes("ЦЕНТРОБЕЖНЫЙ") ||
              p.section.includes("ОДНОСТОРОННИМ"))
        );

  return matched.slice(0, limit);
}

export function getProductsBySlugs(slugs: string[]): ProductDetail[] {
  return slugs
    .map((slug) => getProductBySlug(slug))
    .filter((product): product is ProductDetail => Boolean(product));
}

export function parseSpecRow(spec: string): { key: string; value: string } {
  if (spec.includes(":")) {
    const [key, ...rest] = spec.split(":");
    return { key: key.trim(), value: rest.join(":").trim() };
  }
  return { key: spec, value: "" };
}
