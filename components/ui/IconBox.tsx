import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface IconBoxProps {
  icon: LucideIcon;
  active?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "w-11 h-11 rounded-xl [&_svg]:size-[22px]",
  md: "w-14 h-14 rounded-[14px] [&_svg]:size-7",
  lg: "w-16 h-16 rounded-2xl [&_svg]:size-8",
} as const;

export function IconBox({
  icon: Icon,
  active = false,
  size = "sm",
  className,
}: IconBoxProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center shrink-0 bg-surface-alt text-primary transition-colors duration-200",
        sizeClasses[size],
        active && "bg-primary text-white",
        className
      )}
    >
      <Icon strokeWidth={2} aria-hidden />
    </div>
  );
}
