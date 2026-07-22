import { STORAGE_KEYS } from "@/lib/admin/storage-keys";
import { emit } from "@/lib/admin/events";
import type { ContactSubmission, NewContactSubmission } from "@/lib/admin/types";

/** In-memory cache so `list()` returns a stable array reference between
 * actual changes — required by useSyncExternalStore (a getSnapshot that
 * returns a new array identity on every call causes an infinite render
 * loop). Invalidated on local writes and on cross-tab `storage` events. */
let cache: ContactSubmission[] | null = null;

if (typeof window !== "undefined") {
  window.addEventListener("storage", (e) => {
    if (e.key === null || e.key === STORAGE_KEYS.submissions) cache = null;
  });
}

function readAll(): ContactSubmission[] {
  if (typeof window === "undefined") return [];
  if (cache) return cache;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEYS.submissions);
    const parsed = raw ? JSON.parse(raw) : [];
    cache = Array.isArray(parsed) ? (parsed as ContactSubmission[]) : [];
  } catch {
    cache = [];
  }
  return cache;
}

function writeAll(submissions: ContactSubmission[]): void {
  cache = submissions;
  window.localStorage.setItem(STORAGE_KEYS.submissions, JSON.stringify(submissions));
  emit("submissions");
}

export function list(): ContactSubmission[] {
  return readAll();
}

export function get(id: string): ContactSubmission | undefined {
  return readAll().find((s) => s.id === id);
}

export function create(input: NewContactSubmission): ContactSubmission {
  const submission: ContactSubmission = {
    ...input,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    status: "new",
  };
  writeAll([submission, ...readAll()].sort((a, b) => b.createdAt.localeCompare(a.createdAt)));
  return submission;
}

export function markRead(id: string): void {
  const all = readAll();
  const next = all.map((s) => (s.id === id ? { ...s, status: "read" as const } : s));
  writeAll(next);
}
