"use client";

import { useMemo, useSyncExternalStore } from "react";
import { subscribe } from "@/lib/admin/events";
import { applyOverride, getOverride } from "@/lib/admin/product-overrides";
import { STORAGE_KEYS } from "@/lib/admin/storage-keys";
import type { ProductOverride } from "@/lib/admin/types";
import type { ProductDetail } from "@/lib/types";

function getServerSnapshot() {
  return undefined;
}

/** Reactive read of the raw override for a slug — works even when only a
 * `{ code, name, slug }` ref is available (catalog list/search entries),
 * not a full ProductDetail. */
export function useRawProductOverride(slug: string): ProductOverride | undefined {
  return useSyncExternalStore(
    (callback) => subscribe("product-overrides", STORAGE_KEYS.productOverrides, callback),
    () => getOverride(slug),
    getServerSnapshot
  );
}

/** Canonical product + whatever admin override exists for its slug, merged
 * reactively. Falls back to the canonical product untouched if there's no
 * override. */
export function useProductOverride(product: ProductDetail): ProductDetail {
  const override = useRawProductOverride(product.slug);
  return useMemo(() => applyOverride(product, override), [product, override]);
}
