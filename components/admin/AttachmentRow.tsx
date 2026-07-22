"use client";

import { useState } from "react";
import { Download, FileText, Loader2 } from "lucide-react";
import { getAttachment } from "@/lib/admin/attachments";
import type { AttachmentMeta } from "@/lib/admin/types";

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function AttachmentRow({ attachment }: { attachment: AttachmentMeta }) {
  const [downloading, setDownloading] = useState(false);
  const [missing, setMissing] = useState(false);

  async function handleDownload() {
    setDownloading(true);
    try {
      const blob = await getAttachment(attachment.id);
      if (!blob) {
        setMissing(true);
        return;
      }
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = attachment.name;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-border-mid bg-white px-4 py-3">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-surface-alt text-primary">
          <FileText className="size-4" strokeWidth={2} aria-hidden />
        </div>
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold text-body">{attachment.name}</div>
          <div className="text-xs text-subtle">{formatSize(attachment.size)}</div>
        </div>
      </div>

      <button
        type="button"
        onClick={handleDownload}
        disabled={downloading}
        className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-sm border border-border-mid bg-white px-3.5 py-2 text-[13px] font-bold text-body transition-colors hover:border-primary hover:text-primary disabled:cursor-default disabled:opacity-60"
      >
        {downloading ? (
          <Loader2 className="size-3.5 shrink-0 animate-spin" strokeWidth={2.25} aria-hidden />
        ) : (
          <Download className="size-3.5 shrink-0" strokeWidth={2.25} aria-hidden />
        )}
        {missing ? "Файл не найден" : "Скачать"}
      </button>
    </div>
  );
}
