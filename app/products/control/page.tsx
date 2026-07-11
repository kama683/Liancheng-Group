import type { Metadata } from "next";
import {
  CategoryCatalogPage,
  createCatalogPageMetadata,
} from "@/components/catalog/CatalogPage";

export const metadata: Metadata = createCatalogPageMetadata(
  "Электрические шкафы управления"
);

export default function ProductsControlPage() {
  return (
    <CategoryCatalogPage
      category="control"
      title="Электрические шкафы управления"
      route="/products/control"
      defaultPanelId="control"
    />
  );
}
