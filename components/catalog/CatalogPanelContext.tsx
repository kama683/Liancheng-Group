"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  type ReactNode,
} from "react";
import { useHashPanel } from "@/hooks/useHashPanel";

interface CatalogPanelContextValue {
  activePanel: string;
  panelIds: string[];
  showPanel: (id: string) => void;
}

const CatalogPanelContext = createContext<CatalogPanelContextValue | null>(null);

export function CatalogPanelProvider({
  defaultPanelId,
  panelIds,
  children,
}: {
  defaultPanelId: string;
  panelIds: string[];
  children: ReactNode;
}) {
  const activePanel = useHashPanel(defaultPanelId, panelIds);

  const showPanel = useCallback((id: string) => {
    const url = `${window.location.pathname}${window.location.search}#${id}`;
    history.replaceState(null, "", url);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
  }, []);

  const value = useMemo(
    () => ({ activePanel, panelIds, showPanel }),
    [activePanel, panelIds, showPanel]
  );

  return (
    <CatalogPanelContext.Provider value={value}>
      {children}
    </CatalogPanelContext.Provider>
  );
}

export function useCatalogPanel() {
  const context = useContext(CatalogPanelContext);
  if (!context) {
    throw new Error("useCatalogPanel must be used within CatalogPanelProvider");
  }
  return context;
}
