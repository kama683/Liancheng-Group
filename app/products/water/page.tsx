import type { Metadata } from "next";
import {
  CategoryCatalogPage,
  createCatalogPageMetadata,
} from "@/components/catalog/CatalogPage";

export const metadata: Metadata = createCatalogPageMetadata(
  "Оборудование для водоснабжения"
);

export default function ProductsWaterPage() {
  return (
    <CategoryCatalogPage
      category="water"
      title="Оборудование для водоснабжения"
      route="/products/water"
      defaultPanelId="water-modular"
    />
  );
}
