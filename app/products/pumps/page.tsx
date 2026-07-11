import type { Metadata } from "next";
import {
  CategoryCatalogPage,
  createCatalogPageMetadata,
} from "@/components/catalog/CatalogPage";

export const metadata: Metadata = createCatalogPageMetadata("Насосы");

export default function ProductsPumpsPage() {
  return (
    <CategoryCatalogPage
      category="pumps"
      title="Насосы"
      route="/products/pumps"
      defaultPanelId="wastewater-submersible"
    />
  );
}
