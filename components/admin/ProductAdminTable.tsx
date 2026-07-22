"use client";

import { useState } from "react";
import { Pencil, Search } from "lucide-react";
import { ProductEditModal } from "@/components/admin/ProductEditModal";
import { useProductOverride } from "@/hooks/useProductOverride";
import { getProductImageSrc } from "@/lib/product-images";
import { getOverride } from "@/lib/admin/product-overrides";
import type { ProductDetail } from "@/lib/types";

const FIELD =
  "w-full py-2.5 pl-9 pr-3.5 border border-border-mid rounded-md text-sm text-body bg-white placeholder:text-subtle focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(23,165,204,0.12)] transition-[border-color,box-shadow]";

function ProductRow({
  product,
  onEdit,
}: {
  product: ProductDetail;
  onEdit: (product: ProductDetail) => void;
}) {
  const effective = useProductOverride(product);
  const hasOverride = Boolean(getOverride(product.slug));

  return (
    <div className="flex items-center gap-4 border-b border-border-light px-5 py-3.5 last:border-b-0">
      {/* eslint-disable-next-line @next/next/no-img-element -- thumbnail may be an admin-uploaded data URL */}
      <img
        src={getProductImageSrc(effective)}
        alt=""
        className="size-12 shrink-0 rounded-md border border-border-mid bg-white object-contain p-1"
      />
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-bold text-body">{effective.name}</div>
        <div className="mt-0.5 text-xs text-subtle">{product.code}</div>
      </div>
      {hasOverride && (
        <span className="shrink-0 rounded-pill bg-pill-blue-bg px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-primary">
          Правка
        </span>
      )}
      <button
        type="button"
        onClick={() => onEdit(effective)}
        className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-sm border border-border-mid bg-white px-3.5 py-2 text-[13px] font-bold text-body transition-colors hover:border-primary hover:text-primary"
      >
        <Pencil className="size-3.5 shrink-0" strokeWidth={2.25} aria-hidden />
        Редактировать
      </button>
    </div>
  );
}

export function ProductAdminTable({ products }: { products: ProductDetail[] }) {
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState<ProductDetail | null>(null);

  const filtered = products.filter((p) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return p.name.toLowerCase().includes(q) || p.code.toLowerCase().includes(q);
  });

  return (
    <div>
      <div className="relative max-w-96">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-subtle"
          strokeWidth={2}
          aria-hidden
        />
        <input
          className={FIELD}
          placeholder="Поиск по модели или названию…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl border border-border bg-white">
        {filtered.length === 0 ? (
          <p className="px-5 py-8 text-center text-sm text-muted">Ничего не найдено.</p>
        ) : (
          filtered.map((product) => (
            <ProductRow key={product.slug} product={product} onEdit={setEditing} />
          ))
        )}
      </div>

      {editing && (
        <ProductEditModal product={editing} onClose={() => setEditing(null)} />
      )}
    </div>
  );
}
