"use client";

import { useSyncExternalStore } from "react";

export function useHashPanel(defaultId: string, panelIds: string[]) {
  return useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener("hashchange", onStoreChange);
      return () => window.removeEventListener("hashchange", onStoreChange);
    },
    () => {
      const hash = window.location.hash.replace("#", "");
      const normalized = hash.replace(/_/g, "-");
      if (panelIds.includes(normalized)) return normalized;
      if (panelIds.includes(hash)) return hash;
      return defaultId;
    },
    () => defaultId
  );
}
