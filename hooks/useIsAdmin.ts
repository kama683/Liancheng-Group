"use client";

import { useSyncExternalStore } from "react";
import { subscribe } from "@/lib/admin/events";
import { isAdmin } from "@/lib/admin/session";
import { STORAGE_KEYS } from "@/lib/admin/storage-keys";

function getServerSnapshot() {
  return false;
}

/** Works anywhere on the site, no provider required. */
export function useIsAdmin(): boolean {
  return useSyncExternalStore(
    (callback) => subscribe("session", STORAGE_KEYS.session, callback),
    isAdmin,
    getServerSnapshot
  );
}
