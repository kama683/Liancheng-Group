import type { Metadata } from "next";
import { Headphones } from "lucide-react";
import { getCompanyParagraphs } from "@/lib/catalog";
import { Button } from "@/components/ui/Button";
import { IconBox } from "@/components/ui/IconBox";
import { Breadcrumb, PageContainer } from "@/components/ui/SpecTable";

export const metadata: Metadata = {
  title: "Сервис",
};

export default function ServicesPage() {
  const servicePara =
    getCompanyParagraphs().find((p) => /филиалов/i.test(p)) ?? "";

  return (
    <>
      <section className="bg-gradient-to-b from-surface to-white">
        <PageContainer className="py-14 pb-6">
          <Breadcrumb
            items={[{ label: "Главная", href: "/" }, { label: "Сервис" }]}
          />
          <div className="text-[13px] font-bold tracking-[1.5px] uppercase text-primary mt-6">
            Сервис
          </div>
          <h1 className="font-heading font-bold text-[42px] text-heading mt-2.5">
            Сервис и поддержка
          </h1>
        </PageContainer>
      </section>
      <PageContainer className="py-6 pb-20">
        <IconBox icon={Headphones} size="md" className="mb-6" />
        <p className="text-base leading-relaxed text-muted">{servicePara}</p>
        <Button href="/contact" className="mt-6" arrow>
          Связаться с сервисом
        </Button>
      </PageContainer>
    </>
  );
}
