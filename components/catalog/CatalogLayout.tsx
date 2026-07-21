"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { MessageCircle } from "lucide-react";
import { useMemo, useState } from "react";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { ProductCard } from "@/components/ui/ProductCard";
import { ProductImage } from "@/components/ui/ProductImage";
import { SearchField } from "@/components/ui/SearchField";
import { useCatalogPanel } from "@/components/catalog/CatalogPanelContext";
import { CATALOG_NAV } from "@/lib/site";
import type { CatalogPanel, SearchIndexItem } from "@/lib/types";
import { cn } from "@/lib/utils";

interface CatalogLayoutProps {
  panels: CatalogPanel[];
  searchIndex: SearchIndexItem[];
  currentRoute: string;
  searchPlaceholder: string;
}

export function CatalogLayout({
  panels,
  searchIndex,
  currentRoute,
  searchPlaceholder,
}: CatalogLayoutProps) {
  const { activePanel, showPanel } = useCatalogPanel();
  const [query, setQuery] = useState("");
  const t = useTranslations("CategoryPage");
  const tCatalogNav = useTranslations("CatalogNav");
  const tCommon = useTranslations("Common");

  const hits = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return searchIndex
      .filter(
        (p) =>
          p.code.toLowerCase().includes(q) || p.name.toLowerCase().includes(q)
      )
      .slice(0, 8);
  }, [query, searchIndex]);

  return (
    <div className="grid grid-cols-1 tablet:grid-cols-[300px_1fr] gap-12 items-start">
      <aside className="tablet:sticky tablet:top-[88px]">
        <SearchField
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={searchPlaceholder}
          autoComplete="off"
        />

        {query && (
          <div className="mt-2">
            {hits.length === 0 ? (
              <div className="py-2.5 px-1 text-[13px] text-subtle">
                {t("noResults")}
              </div>
            ) : (
              hits.map((hit) => (
                <Link
                  key={`${hit.slug}-${hit.code}`}
                  href={`/products/${hit.slug}`}
                  className="block py-2.5 px-3 rounded-sm text-sm text-muted leading-snug hover:bg-[#f0f9fc] hover:text-primary no-underline"
                >
                  <strong className="text-heading">{hit.code}</strong> — {hit.name}
                </Link>
              ))
            )}
          </div>
        )}

        <nav className="border border-border-light rounded-lg overflow-hidden mt-4 bg-white">
          {CATALOG_NAV.map((nav) => {
            const page = nav.page;
            const isCurrentPage = page === currentRoute;
            const navLabelKey = nav.id === "valves" ? "valvesFooterLabel" : nav.id;

            if (isCurrentPage) {
              const active = nav.id === activePanel;
              return (
                <button
                  key={nav.id}
                  type="button"
                  onClick={() => {
                    showPanel(nav.id);
                    setQuery("");
                  }}
                  className={cn(
                    "block w-full text-left py-4 px-5 text-sm font-semibold border-b border-border-light leading-snug transition-[background,color,box-shadow] duration-150",
                    active
                      ? "bg-surface-alt text-primary shadow-[inset_3px_0_0_#17a5cc]"
                      : "text-muted hover:bg-surface hover:text-primary"
                  )}
                >
                  {tCatalogNav(navLabelKey)}
                </button>
              );
            }

            const href =
              nav.category === "pumps" && page === "/products"
                ? `${page}#${nav.id}`
                : page;

            return (
              <Link
                key={nav.id}
                href={href}
                className="block py-4 px-5 text-sm font-semibold text-muted border-b border-border-light leading-snug hover:bg-surface hover:text-primary no-underline last:border-b-0"
              >
                {tCatalogNav(navLabelKey)}
              </Link>
            );
          })}
        </nav>

        <div className="bg-gradient-to-br from-surface-alt to-[#e4f2f8] border border-[#d8eaf2] rounded-xl p-5.5 mt-6">
          <MessageCircle
            className="size-6 text-primary mb-3"
            strokeWidth={1.75}
            aria-hidden
          />
          <div className="font-bold text-[15px] text-heading">
            {t("helpTitle")}
          </div>
          <p className="text-[13px] leading-relaxed text-muted mt-2">
            {t("helpText")}
          </p>
          <ArrowLink href="/contact" className="mt-3.5 text-sm">
            {tCommon("contactUs")}
          </ArrowLink>
        </div>
      </aside>

      <div>
        {panels.map((panel) => (
          <div
            key={panel.id}
            hidden={panel.id !== activePanel}
            className={panel.id === activePanel ? "block" : "hidden"}
          >
            <h2 className="font-heading font-bold text-heading text-[clamp(24px,3vw,32px)] leading-tight">
              {tCatalogNav(panel.id === "valves" ? "valvesFooterLabel" : panel.id)}
            </h2>
            {panel.section.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-base leading-relaxed text-muted mt-4"
              >
                {paragraph}
              </p>
            ))}
            <div className="grid grid-cols-1 max-tablet:grid-cols-2 tablet:grid-cols-3 gap-6 mt-7 max-mobile:grid-cols-1">
              {panel.section.products.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
              {panel.section.bullets?.map((bullet) => (
                <div
                  key={bullet}
                  className="bg-white border border-border rounded-xl overflow-hidden"
                >
                  <ProductImage alt={`Category item: ${bullet}`} />
                  <div className="px-5 py-4.5">
                    <h3 className="font-heading font-bold text-[15px] text-body leading-snug">
                      {bullet}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
