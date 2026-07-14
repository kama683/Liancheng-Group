import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { cn } from "@/lib/utils";

type HeroBgVariant = "page" | "catalog" | "home";

const variantClasses: Record<"page" | "catalog", string> = {
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
  if (variant === "home") {
    return (
      <div
        className={cn(
          "absolute right-20 top-1/2 -translate-y-1/2 z-0 pointer-events-none",
          "flex items-center justify-center",
          "w-[min(600px,58vw)] max-tablet:w-[min(540px,90vw)]",
          className
        )}
        aria-hidden
      >
        {/*
          Pixel-fixed CSS grid (not SVG) — keeps lines sharp and avoids
          scaled-pattern moiré / double-layer look.
        */}
        <div
          className="hero-blueprint-grid absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(1180px,92vw)] aspect-square max-tablet:w-[min(820px,105vw)]"
        />
        <Image
          src={ASSETS.heroPump.src}
          alt=""
          width={ASSETS.heroPump.width}
          height={ASSETS.heroPump.height}
          priority={priority}
          className="relative z-[1] w-full h-auto object-contain"
        />
      </div>
    );
  }

  const asset = ASSETS.heroBg;

  return (
    <Image
      src={asset.src}
      alt=""
      aria-hidden
      width={asset.width}
      height={asset.height}
      priority={priority}
      className={cn(variantClasses[variant], className)}
    />
  );
}
