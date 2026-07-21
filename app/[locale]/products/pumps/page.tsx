import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CategoryCatalogPage } from "@/components/catalog/CatalogPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CategoryPage" });
  return { title: t("pumpsTitle") };
}

export default async function ProductsPumpsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CategoryPage" });
  return (
    <CategoryCatalogPage
      category="pumps"
      title={t("pumpsTitle")}
      route="/products/pumps"
      defaultPanelId="wastewater-submersible"
    />
  );
}
