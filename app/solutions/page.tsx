import type { Metadata } from "next";
import { getWaterProducts } from "@/lib/catalog";
import { ProductCard } from "@/components/ui/ProductCard";
import { Breadcrumb, PageContainer } from "@/components/ui/SpecTable";

export const metadata: Metadata = {
  title: "Решения",
};

export default function SolutionsPage() {
  const products = getWaterProducts();

  return (
    <>
      <section className="bg-gradient-to-b from-surface to-white">
        <PageContainer className="py-14 pb-6">
          <Breadcrumb
            items={[{ label: "Главная", href: "/" }, { label: "Решения" }]}
          />
          <div className="text-[13px] font-bold tracking-[1.5px] uppercase text-primary mt-6">
            Модульные решения
          </div>
          <h1 className="font-heading font-bold text-[42px] text-heading mt-2.5">
            МОДУЛЬНЫЕ РЕШЕНИЯ
          </h1>
        </PageContainer>
      </section>
      <PageContainer className="py-8 pb-20">
        <div className="grid grid-cols-1 max-tablet:grid-cols-2 tablet:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </PageContainer>
    </>
  );
}
