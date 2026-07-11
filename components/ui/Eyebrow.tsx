import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "text-[13px] font-bold tracking-[1.5px] uppercase text-primary",
        className
      )}
    >
      {children}
    </div>
  );
}
