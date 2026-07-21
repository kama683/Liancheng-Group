import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { cn } from "@/lib/utils";

interface ProjectImageProps {
  src?: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
}

export function ProjectImage({
  src,
  alt,
  className,
  aspectRatio = "16/10",
}: ProjectImageProps) {
  const hasPhoto = Boolean(src);

  return (
    <div
      className={cn("relative bg-surface overflow-hidden", className)}
      style={{ aspectRatio }}
    >
      {hasPhoto ? (
        <Image
          src={src!}
          alt={alt}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          className="object-cover transition-transform duration-400 ease-out group-hover:scale-105"
        />
      ) : (
        <Image
          src={ASSETS.pump.src}
          alt={alt}
          width={ASSETS.pump.width}
          height={ASSETS.pump.height}
          sizes="(max-width: 900px) 100vw, 50vw"
          className="absolute inset-0 h-full w-full object-contain p-3"
        />
      )}
    </div>
  );
}
