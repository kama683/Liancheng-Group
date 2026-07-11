import type { Metadata } from "next";
import { CatalogPageShell } from "@/components/catalog/CatalogPageShell";
import {
  buildCatalogPanels,
  getSearchIndex,
} from "@/lib/catalog";
import type { ProductCategory } from "@/lib/types";

interface CatalogPageConfig {
  title: string;
  metadataTitle: string;
  categoryFilter: ProductCategory | null;
  route: string;
  defaultPanelId: string;
  searchPlaceholder: string;
  breadcrumb: { label: string; href?: string }[];
}

function CatalogPageView({
  config,
}: {
  config: CatalogPageConfig;
}) {
  const panels = buildCatalogPanels(config.categoryFilter);
  const searchIndex = getSearchIndex(config.categoryFilter);
  const defaultPanelId =
    panels.find((p) => p.id === config.defaultPanelId)?.id ??
    panels[0]?.id ??
    "wastewater-submersible";

  return (
    <CatalogPageShell
      title={config.title}
      panels={panels}
      searchIndex={searchIndex}
      currentRoute={config.route}
      defaultPanelId={defaultPanelId}
      searchPlaceholder={config.searchPlaceholder}
      breadcrumb={config.breadcrumb}
    />
  );
}

export function createCatalogPageMetadata(title: string): Metadata {
  return { title };
}

export function PumpsCatalogPage() {
  return (
    <CatalogPageView
      config={{
        title: "Промышленные насосы",
        metadataTitle: "Промышленные насосы",
        categoryFilter: null,
        route: "/products",
        defaultPanelId: "wastewater-submersible",
        searchPlaceholder: "Поиск насоса по модели…",
        breadcrumb: [
          { label: "Главная", href: "/" },
          { label: "Продукция" },
        ],
      }}
    />
  );
}

export function CategoryCatalogPage({
  category,
  title,
  route,
  defaultPanelId,
}: {
  category: ProductCategory;
  title: string;
  route: string;
  defaultPanelId: string;
}) {
  return (
    <CatalogPageView
      config={{
        title,
        metadataTitle: title,
        categoryFilter: category,
        route,
        defaultPanelId,
        searchPlaceholder: "Поиск по модели или названию…",
        breadcrumb: [
          { label: "Главная", href: "/" },
          { label: "Продукция", href: "/products" },
          { label: title },
        ],
      }}
    />
  );
}
