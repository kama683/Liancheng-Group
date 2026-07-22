"use client";

import { useRef, useState } from "react";
import { ImagePlus, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const MAX_DIMENSION = 1200;

/** Downscales the image via canvas (so admin-edited photos don't blow up
 * localStorage's ~5-10MB quota) and returns it as a JPEG data URL. */
function downscaleImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error);
    reader.onload = () => {
      const img = new window.Image();
      img.onerror = () => reject(new Error("Image failed to load"));
      img.onload = () => {
        let { width, height } = img;
        if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
          const scale = MAX_DIMENSION / Math.max(width, height);
          width = Math.round(width * scale);
          height = Math.round(height * scale);
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Canvas is not supported"));
          return;
        }
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.85));
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });
}

export function ImageUploadField({
  value,
  onChange,
}: {
  value?: string;
  onChange: (dataUrl: string) => void;
}) {
  const [dragOver, setDragOver] = useState(false);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(file: File | undefined) {
    if (!file) return;
    setLoading(true);
    try {
      onChange(await downscaleImage(file));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className={cn(
        "rounded-xl border-2 border-dashed border-border-mid bg-surface p-4 text-center transition-colors",
        dragOver && "border-primary bg-[#eef8fb]"
      )}
      onDragEnter={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragOver={(e) => e.preventDefault()}
      onDragLeave={() => setDragOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragOver(false);
        handleFile(e.dataTransfer.files?.[0]);
      }}
    >
      {value ? (
        <div className="relative mx-auto mb-3 aspect-4/3 w-full max-w-60 overflow-hidden rounded-lg border border-border-mid bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element -- local data-URL preview, next/image needs remote/static sources */}
          <img src={value} alt="" className="size-full object-contain" />
        </div>
      ) : (
        <ImagePlus
          className="mx-auto mb-2 size-8 text-subtle"
          strokeWidth={1.5}
          aria-hidden
        />
      )}

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={loading}
        className="mt-1 inline-flex cursor-pointer items-center gap-1.5 border-none bg-transparent text-sm font-semibold text-primary hover:text-primary-dark disabled:cursor-default disabled:opacity-60"
      >
        {loading && (
          <Loader2 className="size-3.5 animate-spin" strokeWidth={2.25} aria-hidden />
        )}
        {value ? "Заменить изображение" : "Загрузить изображение"}
      </button>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
    </div>
  );
}
