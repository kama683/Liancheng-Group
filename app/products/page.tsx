import type { Metadata } from "next";
import {
  createCatalogPageMetadata,
  PumpsCatalogPage,
} from "@/components/catalog/CatalogPage";

export const metadata: Metadata = createCatalogPageMetadata("Промышленные насосы");

export default function ProductsPage() {
  return <PumpsCatalogPage />;
}
