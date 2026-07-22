"use client";

import { useSyncExternalStore } from "react";
import { subscribe } from "@/lib/admin/events";
import { list } from "@/lib/admin/submissions";
import { STORAGE_KEYS } from "@/lib/admin/storage-keys";
import type { ContactSubmission } from "@/lib/admin/types";

const EMPTY: ContactSubmission[] = [];

function getServerSnapshot() {
  return EMPTY;
}

export function useContactSubmissions(): ContactSubmission[] {
  return useSyncExternalStore(
    (callback) => subscribe("submissions", STORAGE_KEYS.submissions, callback),
    list,
    getServerSnapshot
  );
}
