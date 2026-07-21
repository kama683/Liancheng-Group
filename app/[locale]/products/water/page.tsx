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
  return { title: t("waterTitle") };
}

export default async function ProductsWaterPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "CategoryPage" });
  return (
    <CategoryCatalogPage
      category="water"
      title={t("waterTitle")}
      route="/products/water"
      defaultPanelId="water-supply-complete"
    />
  );
}
