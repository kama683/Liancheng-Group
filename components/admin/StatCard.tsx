import type { LucideIcon } from "lucide-react";

export function StatCard({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-card-sm">
      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-pill-blue-bg text-primary">
        <Icon className="size-5" strokeWidth={2} aria-hidden />
      </div>
      <div>
        <div className="font-heading text-2xl font-bold text-heading leading-none">
          {value}
        </div>
        <div className="mt-1 text-sm text-muted">{label}</div>
      </div>
    </div>
  );
}
