import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { cn } from "@/lib/utils";

interface ProductImageProps {
  alt: string;
  src?: string;
  className?: string;
  aspectRatio?: string;
  sizes?: string;
}

export function ProductImage({
  alt,
  src,
  className,
  aspectRatio = "4/3",
  sizes = "(max-width: 900px) 100vw, 33vw",
}: ProductImageProps) {
  const imageSrc = src ?? ASSETS.pump.src;

  return (
    <div
      className={cn("relative bg-white overflow-hidden", className)}
      style={{ aspectRatio }}
    >
      <Image
        src={imageSrc}
        alt={alt}
        fill
        sizes={sizes}
        className="object-contain p-4 transition-transform duration-400 ease-out group-hover:scale-105"
      />
    </div>
  );
}
