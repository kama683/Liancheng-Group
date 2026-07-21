"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ASSETS } from "@/lib/assets";
import { cn } from "@/lib/utils";

interface ProductImageProps {
  alt: string;
  src?: string;
  className?: string;
  aspectRatio?: string;
  sizes?: string;
  imagePadding?: string;
}

export function ProductImage({
  alt,
  src,
  className,
  aspectRatio = "4/3",
  sizes = "(max-width: 900px) 100vw, 33vw",
  imagePadding = "p-4",
}: ProductImageProps) {
  const imageSrc = src ?? ASSETS.pump.src;
  const imgRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <div
      className={cn("relative bg-white overflow-hidden", className)}
      style={{ aspectRatio }}
    >
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 bg-surface transition-opacity duration-300",
          loaded ? "opacity-0" : "opacity-100 animate-pulse"
        )}
      />
      <Image
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        fill
        sizes={sizes}
        onLoad={() => setLoaded(true)}
        className={cn(
          "object-contain transition-[opacity,transform] duration-400 ease-out group-hover:scale-105",
          imagePadding,
          loaded ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
}
