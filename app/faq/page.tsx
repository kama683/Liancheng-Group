import type { Metadata } from "next";
import { getFaqItems } from "@/data/content";
import { AccordionItem } from "@/components/ui/Accordion";
import { Breadcrumb, PageContainer } from "@/components/ui/SpecTable";

export const metadata: Metadata = {
  title: "FAQ",
};

export default function FaqPage() {
  const items = getFaqItems();

  return (
    <>
      <section className="bg-gradient-to-b from-surface to-white">
        <PageContainer className="py-14 pb-6">
          <Breadcrumb
            items={[{ label: "Главная", href: "/" }, { label: "FAQ" }]}
          />
          <div className="text-[13px] font-bold tracking-[1.5px] uppercase text-primary mt-6">
            FAQ
          </div>
          <h1 className="font-heading font-bold text-[42px] text-heading mt-2.5">
            Частые вопросы
          </h1>
        </PageContainer>
      </section>
      <PageContainer narrow className="py-6 pb-20">
        {items.map((item) => (
          <AccordionItem key={item.question} title={item.question}>
            <p>{item.answer}</p>
          </AccordionItem>
        ))}
      </PageContainer>
    </>
  );
}
