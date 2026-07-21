import type { Metadata } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { HomeCtaSection } from "@/components/sections/HomeCtaSection";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { HeroBgImage } from "@/components/ui/HeroBgImage";
import { ProductCard } from "@/components/ui/ProductCard";
import { PageContainer, SectionHeading, StatGrid } from "@/components/ui/SpecTable";
import { getProductBySlug } from "@/lib/catalog";
import { ASSETS } from "@/lib/assets";
import { projectsData } from "@/data/projects";
import {
  CATALOG_INTRO,
  COMPANY_NAME,
  HOME_FEATURED_PRODUCTS,
  HOME_STATS,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Bellery — Каталог продукции",
};

export default function HomePage() {
  const t = useTranslations();
  const featuredProducts = HOME_FEATURED_PRODUCTS.map((slug) =>
    getProductBySlug(slug)
  ).filter(Boolean);

  return (
    <>
      <section className="relative bg-white overflow-hidden min-h-[620px]">
        <HeroBgImage variant="home" priority />
        <PageContainer className="relative z-10 py-17 pb-22">
          <div className="max-w-[640px]">
            <div className="inline-block text-xs font-bold tracking-[1.4px] uppercase text-primary bg-[#f4fafc] border border-[#e3f2f7] px-4.5 py-2.5 rounded-pill mb-7">
              SHANGHAI LIANCHENG (GROUP) CO., LTD.
            </div>
            <h1 className="font-heading font-bold text-[clamp(36px,4.8vw,56px)] leading-[1.12] text-heading">
              {t("Home.heroPrefix")}{" "}
              <span className="text-primary">
                {t("Home.heroHighlight")}
              </span>{" "}
              {t("Home.heroSuffix")}
            </h1>
            <p className="text-[19px] leading-relaxed text-muted mt-6 max-w-[560px]">
              {t("Home.intro")}
            </p>
            <div className="flex gap-4 mt-9 flex-wrap">
              <Button href="/contact">{t("Common.contactUs")}</Button>
              <Button href="/products" variant="secondary">
                {t("Home.catalogButton")}
              </Button>
            </div>
          </div>
        </PageContainer>
      </section>

      <PageContainer className="pb-20">
        <StatGrid items={HOME_STATS} columns={5} compact />
      </PageContainer>

      <PageContainer className="pt-20">
        <SectionHeading
          eyebrow={t("Home.productsEyebrow")}
          title={t("Home.catalogTitle")}
          description={CATALOG_INTRO}
          center
        />
        <div className="grid grid-cols-1 max-tablet:grid-cols-2 tablet:grid-cols-3 gap-6 mt-10 max-mobile:grid-cols-1">
          {featuredProducts.map(
            (product) =>
              product && <ProductCard key={product.slug} product={product} />
          )}
        </div>
        <div className="text-center mt-8">
          <Button href="/products" variant="secondary" arrow>
            {t("Home.wholeCatalogButton")}
          </Button>
        </div>
      </PageContainer>

      <section className="bg-surface mt-20 border-y border-[#eef4f7]">
        <PageContainer className="py-18">
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-12 items-center">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border-light shadow-card-sm">
              <Image
                src={ASSETS.aboutPhoto.src}
                alt={ASSETS.aboutPhoto.alt}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>
            <div>
              <SectionHeading eyebrow={t("Nav.aboutUs")} title={COMPANY_NAME} />
              <p className="text-base leading-relaxed text-muted mt-4.5">
                {t("Home.companyParagraph")}
              </p>
              <Button href="/about-us" className="mt-6">
                {t("Home.aboutButton")}
              </Button>
            </div>
          </div>
        </PageContainer>
      </section>

      <PageContainer className="pt-20">
        <SectionHeading eyebrow={t("Nav.projects")} title={t("Projects.completedTitle")} />
        <div className="grid grid-cols-1 max-tablet:grid-cols-2 tablet:grid-cols-3 gap-5 mt-8">
          {projectsData.featured.map((project) => (
            <Card key={project.slug} href={`/project/${project.slug}`} className="p-5.5">
              <div className="text-xs font-bold tracking-wide uppercase text-primary mb-2">
                {project.industry}
              </div>
              <div className="font-bold text-body leading-snug">{project.name}</div>
            </Card>
          ))}
        </div>
        <div className="mt-7">
          <ArrowLink href="/projects">{t("Home.allProjectsLink")}</ArrowLink>
        </div>
      </PageContainer>

      <HomeCtaSection />
    </>
  );
}
