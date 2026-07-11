import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  aboutSubpages,
  genericAboutMessage,
} from "@/data/content";
import { getCompanyParagraphs } from "@/lib/catalog";
import { Button } from "@/components/ui/Button";
import { Breadcrumb, PageContainer } from "@/components/ui/SpecTable";

const EXTRA_PAGES: Record<string, { title: string; getContent: () => string }> =
  {
    production: {
      title: "Производство",
      getContent: () => getCompanyParagraphs()[3] ?? "",
    },
    certifications: {
      title: "Сертификаты и квалификации",
      getContent: () => getCompanyParagraphs()[6] ?? "",
    },
    careers: { title: "Карьера", getContent: () => genericAboutMessage },
    "media-relations": {
      title: "Связи с общественностью",
      getContent: () => genericAboutMessage,
    },
    "investor-relations": {
      title: "Инвесторам",
      getContent: () => genericAboutMessage,
    },
    "our-divisions": {
      title: "Подразделения",
      getContent: () => genericAboutMessage,
    },
  };

interface AboutSubPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = [
    ...aboutSubpages.map((p) => p.slug),
    ...Object.keys(EXTRA_PAGES),
  ];
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: AboutSubPageProps): Promise<Metadata> {
  const { slug } = await params;
  const sub = aboutSubpages.find((p) => p.slug === slug);
  const extra = EXTRA_PAGES[slug];
  return { title: sub?.title ?? extra?.title ?? "О компании" };
}

export default async function AboutSubPage({ params }: AboutSubPageProps) {
  const { slug } = await params;
  const sub = aboutSubpages.find((p) => p.slug === slug);
  const extra = EXTRA_PAGES[slug];

  if (!sub && !extra) notFound();

  const title = sub?.title ?? extra!.title;
  const paragraphs = sub?.paragraphs ?? [extra!.getContent()];

  return (
    <>
      <section className="bg-gradient-to-b from-surface to-white">
        <PageContainer className="py-14 pb-6">
          <Breadcrumb
            items={[
              { label: "Главная", href: "/" },
              { label: "О компании", href: "/about-us" },
              { label: title },
            ]}
          />
          <div className="text-[13px] font-bold tracking-[1.5px] uppercase text-primary mt-6">
            О компании
          </div>
          <h1 className="font-heading font-bold text-[42px] text-heading mt-2.5">
            {title}
          </h1>
        </PageContainer>
      </section>
      <PageContainer className="py-6 pb-20">
        {paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 60)}
            className="text-base leading-relaxed text-muted mb-5"
          >
            {paragraph}
          </p>
        ))}
        {!sub && (
          <Button href="/about-us" className="mt-4">
            Перейти в раздел «О компании»
          </Button>
        )}
        <div className="mt-10">
          <Link href="/about-us" className="font-bold text-primary">
            ← Назад к разделу «О компании»
          </Link>
        </div>
      </PageContainer>
    </>
  );
}
