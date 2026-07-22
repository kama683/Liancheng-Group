import { STORAGE_KEYS } from "@/lib/admin/storage-keys";
import { emit } from "@/lib/admin/events";
import type { ProductOverride } from "@/lib/admin/types";
import type { ProductDetail } from "@/lib/types";

type OverrideMap = Record<string, ProductOverride>;

/** Same stable-reference caching as submissions.ts — required so
 * useSyncExternalStore-based hooks (useProductOverride) don't see a "changed"
 * snapshot (and loop) on every render when nothing actually changed. */
let cache: OverrideMap | null = null;

if (typeof window !== "undefined") {
  window.addEventListener("storage", (e) => {
    if (e.key === null || e.key === STORAGE_KEYS.productOverrides) cache = null;
  });
}

function readAll(): OverrideMap {
  if (typeof window === "undefined") return {};
  if (cache) return cache;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEYS.productOverrides);
    const parsed = raw ? JSON.parse(raw) : {};
    cache = parsed && typeof parsed === "object" ? (parsed as OverrideMap) : {};
  } catch {
    cache = {};
  }
  return cache;
}

function writeAll(overrides: OverrideMap): void {
  cache = overrides;
  window.localStorage.setItem(STORAGE_KEYS.productOverrides, JSON.stringify(overrides));
  emit("product-overrides");
}

export function getOverride(slug: string): ProductOverride | undefined {
  return readAll()[slug];
}

export function listOverriddenSlugs(): string[] {
  return Object.keys(readAll());
}

export function setOverride(slug: string, partial: Omit<ProductOverride, "updatedAt">): void {
  const all = readAll();
  all[slug] = { ...partial, updatedAt: new Date().toISOString() };
  writeAll(all);
}

export function clearOverride(slug: string): void {
  const all = readAll();
  if (!(slug in all)) return;
  delete all[slug];
  writeAll(all);
}

/** Same shape as `applyProductTranslation` in lib/catalog.ts: canonical data
 * overlaid with whichever fields the override actually sets. `code`/`slug`/
 * `section`/`category` are never part of an override and are always kept
 * from the canonical product. */
export function applyOverride(
  product: ProductDetail,
  override: ProductOverride | undefined
): ProductDetail {
  if (!override) return product;
  return {
    ...product,
    ...(override.name !== undefined && { name: override.name }),
    ...(override.description !== undefined && { description: override.description }),
    ...(override.specs !== undefined && { specs: override.specs }),
    ...(override.applications !== undefined && { applications: override.applications }),
    ...(override.image !== undefined && { image: override.image }),
  };
}
