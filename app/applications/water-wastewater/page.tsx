import type { Metadata } from "next";
import { Droplets, Waves } from "lucide-react";
import { getCompanyParagraphs } from "@/lib/catalog";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { IconBox } from "@/components/ui/IconBox";
import { Breadcrumb, PageContainer } from "@/components/ui/SpecTable";

export const metadata: Metadata = {
  title: "Водоснабжение и сточные воды",
};

export default function WaterWastewaterPage() {
  const company = getCompanyParagraphs();
  const text =
    company.find((p) => /сточн|водоснабж/i.test(p)) ?? company[2] ?? "";

  return (
    <>
      <section className="bg-gradient-to-b from-surface to-white">
        <PageContainer className="py-14 pb-6">
          <Breadcrumb
            items={[
              { label: "Главная", href: "/" },
              { label: "Применения", href: "/applications" },
              { label: "Водоснабжение и сточные воды" },
            ]}
          />
          <h1 className="font-heading font-bold text-[42px] text-heading mt-6">
            Водоснабжение и сточные воды
          </h1>
        </PageContainer>
      </section>
      <PageContainer className="py-6 pb-20">
        <p className="text-base leading-relaxed text-muted">{text}</p>
        <div className="mt-8 flex gap-6 flex-wrap">
          <div className="flex items-center gap-3">
            <IconBox icon={Droplets} size="sm" />
            <ArrowLink href="/products/water">Оборудование для водоснабжения</ArrowLink>
          </div>
          <div className="flex items-center gap-3">
            <IconBox icon={Waves} size="sm" />
            <ArrowLink href="/products#wastewater">Насосы для сточной воды</ArrowLink>
          </div>
        </div>
      </PageContainer>
    </>
  );
}
