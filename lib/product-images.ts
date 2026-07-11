import { ASSETS } from "@/lib/assets";
import { CATALOG_NAV } from "@/lib/site";

const SUBMERSIBLE_SEWAGE_BASE = "/assets/catalog/submersible-sewage";

/** Product slug → catalog image path (submersible-sewage folder). */
export const PRODUCT_IMAGE_BY_SLUG: Record<string, string> = {
  lpt: `${SUBMERSIBLE_SEWAGE_BASE}/LP-T-_1677202957_WNo_800d450.jpg`,
  qz: `${SUBMERSIBLE_SEWAGE_BASE}/QZ-QH_1677373119_WNo_800d450.jpg`,
  yw: `${SUBMERSIBLE_SEWAGE_BASE}/1675924789021_1675925578_WNo_252d408.png`,
  zhlbq: `${SUBMERSIBLE_SEWAGE_BASE}/Z-H-LB_1675844417_WNo_800d450.jpg`,
  wqx: `${SUBMERSIBLE_SEWAGE_BASE}/WQX_1675841251_WNo_800d450.jpg`,
  "wq-ii": `${SUBMERSIBLE_SEWAGE_BASE}/WQ-II-_1675840944_WNo_800d450.jpg`,
  wl: `${SUBMERSIBLE_SEWAGE_BASE}/WL_1675840886_WNo_800d450.jpg`,
  wqc: `${SUBMERSIBLE_SEWAGE_BASE}/WQC-2-_1675840434_WNo_800d450.jpg`,
  wq: `${SUBMERSIBLE_SEWAGE_BASE}/WQ_1675840180_WNo_800d450.jpg`,
};

/** Dedicated category hero banners that exist in public/assets. */
export const CATEGORY_PANEL_HERO_IMAGES: Record<string, string> = {
  "wastewater-submersible": `${SUBMERSIBLE_SEWAGE_BASE}/submer.png`,
};

export function getCategoryPanelHeroImage(
  panelId: string,
  fallbackProductSlug?: string
): string {
  if (CATEGORY_PANEL_HERO_IMAGES[panelId]) {
    return CATEGORY_PANEL_HERO_IMAGES[panelId];
  }

  if (fallbackProductSlug) {
    return getProductImageSrc({ slug: fallbackProductSlug });
  }

  return ASSETS.pump.src;
}

export function getCategoryPanelHeroAlt(panelId: string): string {
  return CATALOG_NAV.find((item) => item.id === panelId)?.label ?? "Каталог";
}

export function getProductImageSrc(
  product: { slug: string; image?: string }
): string {
  return (
    product.image ??
    PRODUCT_IMAGE_BY_SLUG[product.slug] ??
    ASSETS.pump.src
  );
}
