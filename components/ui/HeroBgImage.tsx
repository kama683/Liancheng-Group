import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { cn } from "@/lib/utils";

type HeroBgVariant = "page" | "catalog";

const variantClasses: Record<HeroBgVariant, string> = {
  page: "absolute -right-[60px] top-1/2 -translate-y-1/2 w-[min(820px,62vw)] h-auto object-contain opacity-[0.34] z-0 pointer-events-none max-tablet:-right-[120px] max-tablet:opacity-[0.22] max-tablet:w-[min(680px,95vw)]",
  catalog:
    "absolute -right-[30px] top-1/2 -translate-y-1/2 w-[min(520px,75%)] h-auto object-contain opacity-45 pointer-events-none",
};

export function HeroBgImage({
  variant = "page",
  className,
  priority,
}: {
  variant?: HeroBgVariant;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={ASSETS.heroBg.src}
      alt=""
      aria-hidden
      width={ASSETS.heroBg.width}
      height={ASSETS.heroBg.height}
      priority={priority}
      className={cn(variantClasses[variant], className)}
    />
  );
}
