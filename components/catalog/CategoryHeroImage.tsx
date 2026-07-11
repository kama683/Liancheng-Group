"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ASSETS } from "@/lib/assets";
import {
  CATEGORY_PANEL_HERO_IMAGES,
  getCategoryPanelHeroAlt,
  getProductImageSrc,
} from "@/lib/product-images";

interface CategoryHeroImageProps {
  panelId: string;
  fallbackProductSlug?: string;
}

export function CategoryHeroImage({
  panelId,
  fallbackProductSlug,
}: CategoryHeroImageProps) {
  const dedicatedSrc = CATEGORY_PANEL_HERO_IMAGES[panelId];
  const fallbackSrc = fallbackProductSlug
    ? getProductImageSrc({ slug: fallbackProductSlug })
    : ASSETS.pump.src;

  const [src, setSrc] = useState(dedicatedSrc ?? fallbackSrc);

  useEffect(() => {
    setSrc(dedicatedSrc ?? fallbackSrc);
  }, [dedicatedSrc, fallbackSrc, panelId]);

  return (
    <Image
      key={`${panelId}-${src}`}
      src={src}
      alt={getCategoryPanelHeroAlt(panelId)}
      fill
      sizes="(max-width: 900px) 100vw, 42vw"
      className="object-cover object-center"
      priority
      onError={() => {
        if (src !== fallbackSrc) setSrc(fallbackSrc);
      }}
    />
  );
}
