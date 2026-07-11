import { cn } from "@/lib/utils";

interface ImagePlaceholderProps {
  label: string;
  aspectRatio?: string;
  className?: string;
}

export function ImagePlaceholder({
  label,
  aspectRatio = "4/3",
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cn(
        "bg-[repeating-linear-gradient(135deg,#e2ecf1_0_11px,#d5e2e9_11px_22px)] flex items-end p-3",
        className
      )}
      style={{ aspectRatio }}
    >
      <span className="font-mono text-[10.5px] text-muted bg-white/80 px-1.5 py-0.5 rounded-[3px]">
        {label}
      </span>
    </div>
  );
}
