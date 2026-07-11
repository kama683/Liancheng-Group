"use client";

import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function AccordionItem({ title, children, className }: AccordionItemProps) {
  return (
    <details
      className={cn(
        "group bg-white border border-border rounded-lg px-6 py-5 mb-3.5",
        className
      )}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[17px] text-body [&::-webkit-details-marker]:hidden">
        <span>{title}</span>
        <ChevronDown
          className="size-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-180"
          strokeWidth={2.25}
          aria-hidden
        />
      </summary>
      <div className="text-[15px] leading-relaxed text-muted mt-3.5">{children}</div>
    </details>
  );
}

export function AccordionDetails({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <details
      className={cn(
        "group bg-white border border-border-mid rounded-lg overflow-hidden mt-5",
        className
      )}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5.5 py-4.5 font-bold text-[15px] text-body [&::-webkit-details-marker]:hidden">
        <span>{title}</span>
        <ChevronDown
          className="size-5 shrink-0 text-primary transition-transform duration-200 group-open:rotate-180"
          strokeWidth={2.25}
          aria-hidden
        />
      </summary>
      <div className="px-5.5 pb-5.5">{children}</div>
    </details>
  );
}

export function BreadcrumbChevron() {
  return (
    <ChevronRight
      className="mx-1.5 inline size-3.5 text-subtle align-middle"
      strokeWidth={2}
      aria-hidden
    />
  );
}
