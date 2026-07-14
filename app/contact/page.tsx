import type { Metadata } from "next";
import { ContactForms } from "@/components/contact/ContactForms";
import { AccordionItem } from "@/components/ui/Accordion";
import { HeroBgImage } from "@/components/ui/HeroBgImage";
import { Breadcrumb, PageContainer } from "@/components/ui/SpecTable";
import { getFaqItems } from "@/data/content";

export const metadata: Metadata = {
  title: "Контакты",
};

export default function ContactPage() {
  const faqItems = getFaqItems().slice(0, 3);

  return (
    <>
      <section className="relative bg-surface overflow-hidden border-b border-[#eef4f7]">
        <HeroBgImage variant="contact" />
        <PageContainer className="relative z-10 py-10 pb-24">
          <Breadcrumb
            items={[{ label: "Главная", href: "/" }, { label: "Контакты" }]}
          />
          <div className="max-w-[640px] mt-6">
            <div className="inline-block text-xs font-bold tracking-[1.4px] uppercase text-primary bg-white border border-[#e3f2f7] px-4.5 py-2.5 rounded-pill mb-6">
              Контакты
            </div>
            <h1 className="font-heading font-bold text-[clamp(36px,4.5vw,52px)] text-heading leading-tight">
              Свяжитесь с нами
            </h1>
            <p className="text-lg leading-relaxed text-muted mt-5">
              Одна заявка — для клиента и для инженера. Опишите задачу, а
              технические параметры добавьте только при необходимости.
            </p>
          </div>
        </PageContainer>
      </section>

      <ContactForms />

      <PageContainer narrow className="pb-24">
        <h2 className="font-heading font-bold text-[clamp(26px,3vw,34px)] text-heading text-center mb-3">
          Частые вопросы
        </h2>
        <p className="text-center text-base text-muted mb-9">
          Ответы на популярные вопросы о сотрудничестве с Liancheng Group
        </p>
        <div className="contact-faq">
          {faqItems.map((item) => (
            <AccordionItem key={item.question} title={item.question}>
              <p>{item.answer}</p>
            </AccordionItem>
          ))}
        </div>
      </PageContainer>
    </>
  );
}
