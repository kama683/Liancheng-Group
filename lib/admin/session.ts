import { STORAGE_KEYS } from "@/lib/admin/storage-keys";
import { emit } from "@/lib/admin/events";
import type { AdminSession } from "@/lib/admin/types";

/** Demo-only credential check. Not a real auth boundary — see plan caveats.
 * Kept in one place so both the hidden contact-form trigger and the
 * fallback /admin/login form share the exact same rule. */
const HIDDEN_NAME = "amin";
const HIDDEN_COMPANY = "123456";

export function getSession(): AdminSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEYS.session);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed.token !== "string") return null;
    return parsed as AdminSession;
  } catch {
    return null;
  }
}

export function isAdmin(): boolean {
  return getSession() !== null;
}

export function login(): AdminSession {
  const session: AdminSession = {
    token: crypto.randomUUID(),
    loggedInAt: new Date().toISOString(),
  };
  window.localStorage.setItem(STORAGE_KEYS.session, JSON.stringify(session));
  emit("session");
  return session;
}

export function logout(): void {
  window.localStorage.removeItem(STORAGE_KEYS.session);
  emit("session");
}

/** Returns true and logs in if the credentials match the hidden demo trigger;
 * otherwise returns false and leaves any existing session untouched. */
export function attemptHiddenLogin(name: string, company: string): boolean {
  if (name.trim() === HIDDEN_NAME && company.trim() === HIDDEN_COMPANY) {
    login();
    return true;
  }
  return false;
}
