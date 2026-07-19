import type { Metadata } from "next";
import { Breadcrumb, PageContainer } from "@/components/ui/SpecTable";

export const metadata: Metadata = {
  title: "Новости",
};

export default function NewsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-surface to-white">
        <PageContainer className="py-14 pb-6">
          <Breadcrumb
            items={[{ label: "Главная", href: "/" }, { label: "Новости" }]}
          />
          <div className="text-[13px] font-bold tracking-[1.5px] uppercase text-primary mt-6">
            Новости
          </div>
          <h1 className="font-heading font-bold text-[42px] text-heading mt-2.5">
            Новости и публикации
          </h1>
        </PageContainer>
      </section>
      <PageContainer className="py-6 pb-20">
        <p className="text-base leading-relaxed text-muted">
          Раздел новостей находится в разработке. Актуальную информацию о
          продукции и проектах Bellery pumps можно получить через форму
          обратной связи.
        </p>
      </PageContainer>
    </>
  );
}
