import type { Metadata } from "next";
import {
  CategoryCatalogPage,
  createCatalogPageMetadata,
} from "@/components/catalog/CatalogPage";

export const metadata: Metadata = createCatalogPageMetadata(
  "Трубопроводная арматура"
);

export default function ProductsValvesPage() {
  return (
    <CategoryCatalogPage
      category="valves"
      title="Трубопроводная арматура"
      route="/products/valves"
      defaultPanelId="valves"
    />
  );
}
