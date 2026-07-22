"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

export function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-footer/60 p-4"
      onMouseDown={(e) => {
        if (!dialogRef.current?.contains(e.target as Node)) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        className="flex max-h-[90vh] w-full max-w-140 flex-col overflow-hidden rounded-2xl bg-white shadow-card"
      >
        <div className="flex shrink-0 items-center justify-between border-b border-border-light px-6 py-4.5">
          <h2 className="font-heading text-lg font-bold text-heading">{title}</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
            className="flex size-8 cursor-pointer items-center justify-center rounded-md border-none bg-transparent text-muted transition-colors hover:bg-surface hover:text-primary"
          >
            <X className="size-4.5" strokeWidth={2} aria-hidden />
          </button>
        </div>
        <div className="overflow-y-auto px-6 py-6">{children}</div>
      </div>
    </div>
  );
}
