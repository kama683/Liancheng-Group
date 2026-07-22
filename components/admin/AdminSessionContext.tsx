"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import { useIsAdmin } from "@/hooks/useIsAdmin";
import { getSession, logout as logoutSession } from "@/lib/admin/session";
import type { AdminSession } from "@/lib/admin/types";

interface AdminSessionContextValue {
  isAdmin: boolean;
  session: AdminSession | null;
  logout: () => void;
}

const AdminSessionContext = createContext<AdminSessionContextValue | null>(null);

export function AdminSessionProvider({ children }: { children: ReactNode }) {
  const isAdmin = useIsAdmin();
  const session = isAdmin ? getSession() : null;

  const value = useMemo(
    () => ({ isAdmin, session, logout: logoutSession }),
    [isAdmin, session]
  );

  return (
    <AdminSessionContext.Provider value={value}>
      {children}
    </AdminSessionContext.Provider>
  );
}

export function useAdminSession() {
  const context = useContext(AdminSessionContext);
  if (!context) {
    throw new Error("useAdminSession must be used within AdminSessionProvider");
  }
  return context;
}
