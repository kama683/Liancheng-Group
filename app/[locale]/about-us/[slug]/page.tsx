import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  aboutSubpages,
  genericAboutMessage,
} from "@/data/content";
import { getCompanyParagraphs } from "@/lib/catalog";
import { Button } from "@/components/ui/Button";
import { Breadcrumb, PageContainer } from "@/components/ui/SpecTable";

const EXTRA_PAGES: Record<string, { getContent: () => string }> = {
  production: { getContent: () => getCompanyParagraphs()[3] ?? "" },
  certifications: { getContent: () => getCompanyParagraphs()[6] ?? "" },
  careers: { getContent: () => genericAboutMessage },
  "media-relations": { getContent: () => genericAboutMessage },
  "investor-relations": { getContent: () => genericAboutMessage },
  "our-divisions": { getContent: () => genericAboutMessage },
};

interface AboutSubPageProps {
  params: Promise<{ locale: string; slug: string }>;
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
  const { locale, slug } = await params;
  const sub = aboutSubpages.find((p) => p.slug === slug);
  if (sub) return { title: sub.title };
  if (EXTRA_PAGES[slug]) {
    const t = await getTranslations({ locale, namespace: "AboutSubPage.extraPages" });
    return { title: t(slug) };
  }
  const t = await getTranslations({ locale, namespace: "Nav" });
  return { title: t("aboutUs") };
}

export default async function AboutSubPage({ params }: AboutSubPageProps) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale });
  const sub = aboutSubpages.find((p) => p.slug === slug);
  const extra = EXTRA_PAGES[slug];

  if (!sub && !extra) notFound();

  const title = sub?.title ?? t(`AboutSubPage.extraPages.${slug}` as Parameters<typeof t>[0]);
  const paragraphs = sub?.paragraphs ?? [extra!.getContent()];

  return (
    <>
      <section className="bg-gradient-to-b from-surface to-white">
        <PageContainer className="py-14 pb-6">
          <Breadcrumb
            items={[
              { label: t("Common.home"), href: "/" },
              { label: t("Nav.aboutUs"), href: "/about-us" },
              { label: title },
            ]}
          />
          <div className="text-[13px] font-bold tracking-[1.5px] uppercase text-primary mt-6">
            {t("Nav.aboutUs")}
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
            {t("AboutSubPage.button")}
          </Button>
        )}
        <div className="mt-10">
          <Link href="/about-us" className="font-bold text-primary">
            {t("AboutSubPage.backLink")}
          </Link>
        </div>
      </PageContainer>
    </>
  );
}
