"use client";

import { useState } from "react";
import { Plus, RotateCcw, X } from "lucide-react";
import { ImageUploadField } from "@/components/admin/ImageUploadField";
import { Modal } from "@/components/admin/Modal";
import { clearOverride, getOverride, setOverride } from "@/lib/admin/product-overrides";
import { parseSpecRow } from "@/lib/catalog";
import type { ProductDetail } from "@/lib/types";

const FIELD =
  "w-full py-2.5 px-3.5 border border-border-mid rounded-md text-sm text-body bg-white placeholder:text-subtle focus:outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(23,165,204,0.12)] transition-[border-color,box-shadow]";

interface SpecRow {
  key: string;
  value: string;
}

function specsToRows(specs: string[]): SpecRow[] {
  return specs.map((spec) => parseSpecRow(spec));
}

function rowsToSpecs(rows: SpecRow[]): string[] {
  return rows
    .filter((row) => row.key.trim())
    .map((row) => (row.value.trim() ? `${row.key.trim()}: ${row.value.trim()}` : row.key.trim()));
}

export function ProductEditModal({
  product,
  onClose,
}: {
  product: ProductDetail;
  onClose: () => void;
}) {
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description.join("\n"));
  const [specRows, setSpecRows] = useState<SpecRow[]>(specsToRows(product.specs));
  const [applications, setApplications] = useState(product.applications.join("\n"));
  const [image, setImage] = useState(product.image);

  const hasOverride = Boolean(getOverride(product.slug));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setOverride(product.slug, {
      name: name.trim(),
      description: description
        .split("\n")
        .map((p) => p.trim())
        .filter(Boolean),
      specs: rowsToSpecs(specRows),
      applications: applications
        .split("\n")
        .map((a) => a.trim())
        .filter(Boolean),
      image,
    });
    onClose();
  }

  function handleReset() {
    clearOverride(product.slug);
    onClose();
  }

  return (
    <Modal title={`Редактировать: ${product.code}`} onClose={onClose}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-subtle">
            Название
          </label>
          <input
            className={FIELD}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-subtle">
            Изображение
          </label>
          <ImageUploadField value={image} onChange={setImage} />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-subtle">
            Описание (каждый абзац с новой строки)
          </label>
          <textarea
            className={`${FIELD} min-h-30 resize-y`}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <div className="mb-1.5 flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wide text-subtle">
              Характеристики
            </label>
            <button
              type="button"
              onClick={() => setSpecRows((rows) => [...rows, { key: "", value: "" }])}
              className="inline-flex cursor-pointer items-center gap-1 border-none bg-transparent text-xs font-bold text-primary hover:text-primary-dark"
            >
              <Plus className="size-3.5" strokeWidth={2.5} aria-hidden />
              Добавить
            </button>
          </div>
          <div className="flex flex-col gap-2">
            {specRows.map((row, index) => (
              <div key={index} className="flex gap-2">
                <input
                  className={FIELD}
                  placeholder="Параметр"
                  value={row.key}
                  onChange={(e) =>
                    setSpecRows((rows) =>
                      rows.map((r, i) => (i === index ? { ...r, key: e.target.value } : r))
                    )
                  }
                />
                <input
                  className={FIELD}
                  placeholder="Значение"
                  value={row.value}
                  onChange={(e) =>
                    setSpecRows((rows) =>
                      rows.map((r, i) => (i === index ? { ...r, value: e.target.value } : r))
                    )
                  }
                />
                <button
                  type="button"
                  onClick={() => setSpecRows((rows) => rows.filter((_, i) => i !== index))}
                  aria-label="Удалить характеристику"
                  className="flex shrink-0 cursor-pointer items-center justify-center rounded-md border border-border-mid bg-white px-2.5 text-muted hover:border-error hover:text-error"
                >
                  <X className="size-3.5" strokeWidth={2.25} aria-hidden />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-subtle">
            Области применения (каждая с новой строки)
          </label>
          <textarea
            className={`${FIELD} min-h-24 resize-y`}
            value={applications}
            onChange={(e) => setApplications(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-border-light pt-5">
          {hasOverride ? (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex cursor-pointer items-center gap-1.5 border-none bg-transparent text-sm font-semibold text-muted hover:text-error"
            >
              <RotateCcw className="size-3.5" strokeWidth={2.25} aria-hidden />
              Сбросить к оригиналу
            </button>
          ) : (
            <span />
          )}
          <button
            type="submit"
            className="rounded-sm bg-primary px-6 py-3 text-sm font-bold text-white shadow-btn transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-primary-dark"
          >
            Сохранить
          </button>
        </div>
      </form>
    </Modal>
  );
}
