import catalogJson from "@/data/catalog.json";
import {
  CATALOG_INTRO_TRANSLATIONS,
  PRODUCT_TRANSLATIONS,
  SECTION_TEXT_TRANSLATIONS,
} from "@/data/catalog-i18n";
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

export function getCompanyParagraphs(locale: string = "ru"): string[] {
  return data.company[locale] ?? data.company.ru;
}

export function getCatalogIntro(locale: string = "ru"): string {
  return CATALOG_INTRO_TRANSLATIONS[locale as "en" | "kk" | "zh"] ?? CATALOG_INTRO;
}

/** Overlays a translated name/description/specs/applications onto the canonical Russian
 * product. `section`/`category`/`slug`/`code`/`image` stay Russian — they're internal join
 * keys (matched against catalog.json section titles), never displayed directly. */
function applyProductTranslation(product: ProductDetail, locale: string): ProductDetail {
  if (locale === "ru") return product;
  const t = PRODUCT_TRANSLATIONS[product.slug]?.[locale as "en" | "kk" | "zh"];
  if (!t) return product;
  return {
    ...product,
    name: t.name,
    description: t.description,
    specs: t.specs,
    applications: t.applications,
  };
}

export function getAllProducts(locale: string = "ru"): ProductDetail[] {
  return Object.values(data.products).map((p) => applyProductTranslation(p, locale));
}

export function getProductBySlug(
  slug: string,
  locale: string = "ru"
): ProductDetail | undefined {
  const product = data.products[slug];
  return product ? applyProductTranslation(product, locale) : undefined;
}

export function getProductSlugs(): string[] {
  return Object.keys(data.products);
}

function translatedSectionText(sectionId: string, locale: string) {
  if (locale === "ru") return null;
  return SECTION_TEXT_TRANSLATIONS[sectionId]?.[locale as "en" | "kk" | "zh"] ?? null;
}

function mergedCatalogSections(
  products: ProductDetail[],
  locale: string = "ru"
): Record<string, CatalogSection> {
  const merged: Record<string, CatalogSection> = {};
  // Ids are language-neutral (CatalogNavItem.id / CatalogSection.id); titles are
  // catalog.json display text and are matched against them only via this table,
  // never used as a lookup key themselves — so translating CATALOG_NAV labels
  // doesn't break the merge.
  const navIds = new Set(CATALOG_NAV.map((n) => n.id));
  const sectionTitleToId = new Map(data.sections.map((s) => [s.title, s.id]));

  for (const section of data.sections) {
    if (!navIds.has(section.id)) continue;
    if (!merged[section.id]) {
      const textOverride = translatedSectionText(section.id, locale);
      merged[section.id] = {
        id: section.id,
        title: section.title,
        products: [],
        paragraphs: textOverride?.paragraphs ?? section.paragraphs ?? [],
        project_list: section.project_list ?? [],
        bullets: textOverride?.bullets ?? section.bullets,
      };
    }
    const seen = new Set(merged[section.id].products.map((p) => p.slug));
    for (const p of section.products) {
      if (!seen.has(p.slug)) {
        const translated = getProductBySlug(p.slug, locale);
        merged[section.id].products.push(
          translated ? { code: translated.code, name: translated.name, slug: translated.slug } : p
        );
        seen.add(p.slug);
      }
    }
  }

  for (const p of products) {
    const secId = p.section ? sectionTitleToId.get(p.section) : undefined;
    if (secId && navIds.has(secId)) {
      if (!merged[secId]) {
        merged[secId] = {
          id: secId,
          title: p.section,
          products: [],
          paragraphs: [],
          project_list: [],
        };
      }
      const seen = new Set(merged[secId].products.map((x) => x.slug));
      if (!seen.has(p.slug)) {
        merged[secId].products.push({
          code: p.code,
          name: p.name,
          slug: p.slug,
        });
      }
    }
  }

  for (const [cat, anchorId] of Object.entries(CATEGORY_ANCHORS)) {
    if (!merged[anchorId]) {
      merged[anchorId] = {
        id: anchorId,
        title: CATALOG_NAV.find((n) => n.id === anchorId)?.title ?? anchorId,
        products: [],
        paragraphs: [],
        project_list: [],
      };
    }
    const seen = new Set(merged[anchorId].products.map((x) => x.slug));
    for (const p of products) {
      if (p.category === cat && !seen.has(p.slug)) {
        merged[anchorId].products.push({
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
  categoryFilter: ProductCategory | null,
  locale: string = "ru"
): CatalogPanel[] {
  const products = getAllProducts(locale);
  const merged = mergedCatalogSections(products, locale);

  const navItems = categoryFilter
    ? CATALOG_NAV.filter((n) => n.category === categoryFilter)
    : CATALOG_NAV.filter((n) => n.category === "pumps");

  return navItems.map((nav) => ({
    ...nav,
    section: merged[nav.id] ?? {
      id: nav.id,
      title: nav.title,
      products: [],
      paragraphs: [],
      project_list: [],
    },
  }));
}

export function getSearchIndex(
  categoryFilter: ProductCategory | null,
  locale: string = "ru"
): SearchIndexItem[] {
  let products = getAllProducts(locale);
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

export function getCategoryIntro(category: ProductCategory, locale: string = "ru"): string {
  const merged = mergedCatalogSections(getAllProducts(locale), locale);
  const anchor = CATEGORY_ANCHORS[category];
  if (anchor && merged[anchor]?.paragraphs.length) {
    return merged[anchor].paragraphs.join(" ");
  }
  return getCatalogIntro(locale);
}

export function getWaterProducts(locale: string = "ru"): ProductDetail[] {
  return getAllProducts(locale).filter((p) => p.category === "water");
}

export function getProjectEquipmentProducts(
  equipmentType: "building" | "industrial",
  limit = 3,
  locale: string = "ru"
): ProductDetail[] {
  // Matched against the Russian-canonical `section`/`code` fields (never translated),
  // so this keyword matching works the same regardless of display locale.
  const products = getAllProducts(locale);

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

export function getProductsBySlugs(slugs: string[], locale: string = "ru"): ProductDetail[] {
  return slugs
    .map((slug) => getProductBySlug(slug, locale))
    .filter((product): product is ProductDetail => Boolean(product));
}

/** Some catalog entries (e.g. modular water-supply systems) have no real model
 * code — `code` is just a copy of `name`. Guards the UI from showing the same
 * text twice (as an eyebrow/model tag next to the title).
 *
 * Always checked against the canonical Russian entry: `code` is never
 * translated, but `name` is, so comparing the already-localized fields would
 * falsely report a "real" code once `name` diverges from `code` in any other
 * locale. */
export function hasModelCode(product: { slug: string }): boolean {
  const canonical = data.products[product.slug];
  if (!canonical) return true;
  return canonical.code.trim() !== canonical.name.trim();
}

export function parseSpecRow(spec: string): { key: string; value: string } {
  if (spec.includes(":")) {
    const [key, ...rest] = spec.split(":");
    return { key: key.trim(), value: rest.join(":").trim() };
  }
  return { key: spec, value: "" };
}
