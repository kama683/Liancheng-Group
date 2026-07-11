import Link from "next/link";
import { parseSpecRow } from "@/lib/catalog";
import { cn } from "@/lib/utils";
import { BreadcrumbChevron } from "./Accordion";
import { Eyebrow } from "./Eyebrow";

interface SpecTableProps {
  specs: string[];
  className?: string;
}

export function SpecTable({ specs, className }: SpecTableProps) {
  if (!specs.length) return null;

  return (
    <table className={cn("w-full border-collapse text-[15px]", className)}>
      <tbody>
        {specs.map((spec) => {
          const { key, value } = parseSpecRow(spec);
          return (
            <tr key={spec} className="border-b border-border-light">
              <th className="w-[38%] px-[18px] py-3.5 text-left text-muted font-semibold bg-surface">
                {key}
              </th>
              <td className="px-[18px] py-3.5 text-body font-semibold">{value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[13px] text-subtle mb-3.5">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="inline-flex items-center">
          {index > 0 && <BreadcrumbChevron />}
          {item.href ? (
            <Link href={item.href} className="text-subtle hover:text-primary">
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

interface StatGridItem {
  value: string;
  label: string;
}

export function StatGrid({
  items,
  columns = 4,
  compact = false,
}: {
  items: StatGridItem[];
  columns?: 4 | 5;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "grid gap-px bg-stat-grid border border-stat-grid rounded-2xl overflow-hidden",
        columns === 5
          ? "grid-cols-1 max-tablet:grid-cols-2 tablet:grid-cols-5"
          : "grid-cols-1 tablet:grid-cols-4",
        compact && "grid-cols-1 max-tablet:grid-cols-2 tablet:grid-cols-5"
      )}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className={cn(
            "bg-white",
            compact ? "px-[18px] py-5.5 text-center" : "px-6 py-7"
          )}
        >
          <div
            className={cn(
              "font-heading font-bold text-primary leading-none",
              compact ? "text-[28px]" : "text-4xl"
            )}
          >
            {item.value}
          </div>
          <div
            className={cn(
              "text-muted mt-2.5 leading-snug",
              compact ? "text-[13px] font-semibold text-muted-light" : "text-sm"
            )}
          >
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export function PageContainer({
  children,
  className,
  narrow,
}: {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto px-8",
        narrow ? "max-w-[800px]" : "max-w-[var(--container-content)]",
        className
      )}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={cn(center && "text-center")}>
      {eyebrow && <Eyebrow className={center ? "mb-2.5" : ""}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "font-heading font-bold text-heading text-[clamp(26px,3vw,38px)]",
          eyebrow && "mt-2.5"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-[17px] text-muted mt-3.5 leading-relaxed max-w-[680px]",
            center && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
