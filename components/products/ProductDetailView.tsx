"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Pencil } from "lucide-react";
import { ProductEditModal } from "@/components/admin/ProductEditModal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ProductImage } from "@/components/ui/ProductImage";
import { Breadcrumb, PageContainer, SpecTable } from "@/components/ui/SpecTable";
import { useIsAdmin } from "@/hooks/useIsAdmin";
import { useProductOverride } from "@/hooks/useProductOverride";
import { hasModelCode } from "@/lib/catalog";
import { getProductImageSrc } from "@/lib/product-images";
import type { ProductDetail } from "@/lib/types";

export function ProductDetailView({ product: canonical }: { product: ProductDetail }) {
  const t = useTranslations();
  const isAdmin = useIsAdmin();
  const product = useProductOverride(canonical);
  const [editing, setEditing] = useState(false);
  const showModel = hasModelCode(canonical);

  const categoryHref =
    canonical.category === "pumps" ? "/products" : `/products/${canonical.category}`;

  return (
    <>
      <section className="bg-gradient-to-b from-surface to-white">
        <PageContainer className="py-14 pb-10">
          <Breadcrumb
            items={[
              { label: t("Common.home"), href: "/" },
              { label: t("Common.products"), href: "/products" },
              { label: t("ProductDetail.category"), href: categoryHref },
              { label: showModel ? canonical.code : canonical.name },
            ]}
          />
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              {showModel && <Eyebrow>{canonical.code}</Eyebrow>}
              <h1 className="font-heading font-bold text-[clamp(28px,4.2vw,40px)] text-heading mt-2.5 leading-tight max-w-[900px]">
                {product.name}
              </h1>
            </div>
            {isAdmin && (
              <button
                type="button"
                onClick={() => setEditing(true)}
                className="mt-2 inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-sm border border-border-mid bg-white px-4 py-2.5 text-sm font-bold text-body transition-colors hover:border-primary hover:text-primary"
              >
                <Pencil className="size-4 shrink-0" strokeWidth={2.25} aria-hidden />
                Редактировать
              </button>
            )}
          </div>
        </PageContainer>
      </section>

      <PageContainer className="pt-5">
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-12 items-start">
          <ProductImage
            alt={
              showModel
                ? `${canonical.code} — ${product.name} product photo`
                : `${product.name} product photo`
            }
            src={getProductImageSrc(product)}
            aspectRatio="4/3"
          />
          <div>
            <h2 className="font-heading font-bold text-2xl text-heading">
              {t("ProductDetail.description")}
            </h2>
            {product.description.map((paragraph) => (
              <p
                key={paragraph.slice(0, 50)}
                className="text-base leading-relaxed text-muted mt-3.5"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </PageContainer>

      <PageContainer className="pt-12">
        <h2 className="font-heading font-bold text-[28px] text-heading mb-5">
          {t("ProductDetail.specsHeading")}
        </h2>
        <SpecTable specs={product.specs} />
        {product.applications.length > 0 && (
          <>
            <h3 className="font-heading font-bold text-[22px] text-heading mt-10">
              {t("ProductDetail.applications")}
            </h3>
            <ul className="mt-4 pl-5 text-muted leading-relaxed text-base list-disc">
              {product.applications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </PageContainer>

      {editing && (
        <ProductEditModal product={product} onClose={() => setEditing(false)} />
      )}
    </>
  );
}
