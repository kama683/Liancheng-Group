import { ASSETS } from "@/lib/assets";
import { CATALOG_NAV } from "@/lib/site";

const SUBMERSIBLE_SEWAGE_BASE = "/assets/catalog/Submersible Sewage";
const CATEGORY_HERO_BASE = "/assets/catalog/categories";

/** Product slug → catalog image path (Submersible Sewage folder). */
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

/**
 * Dedicated category hero images.
 * Add files to `public/assets/catalog/categories/{panel-id}.png` and register here.
 */
export const CATEGORY_PANEL_HERO_IMAGES: Record<string, string> = {
  "wastewater-submersible": `${SUBMERSIBLE_SEWAGE_BASE}/submer_1732707241_WNo_4167d4167 (1).png`,
  "single-suction-centrifugal": `${CATEGORY_HERO_BASE}/single-suction-centrifugal.png`,
  "double-suction-split-case": `${CATEGORY_HERO_BASE}/double-suction-split-case.png`,
  "vertical-long-shaft": `${CATEGORY_HERO_BASE}/vertical-long-shaft.png`,
  "axial-mixed-flow": `${CATEGORY_HERO_BASE}/axial-mixed-flow.png`,
  petrochemical: `${CATEGORY_HERO_BASE}/petrochemical.png`,
  "control-panel": `${CATEGORY_HERO_BASE}/control-panel.png`,
  "fire-pump": `${CATEGORY_HERO_BASE}/fire-pump.png`,
  "water-supply-complete": `${CATEGORY_HERO_BASE}/water-supply-complete.png`,
  valves: `${CATEGORY_HERO_BASE}/valves.png`,
  control: `${CATEGORY_HERO_BASE}/control.png`,
  "water-modular": `${CATEGORY_HERO_BASE}/water-modular.png`,
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
