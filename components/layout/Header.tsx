"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { BRAND, LOGO_PATH, MAIN_NAV } from "@/lib/site";
import { cn, isActiveNav } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/96 backdrop-blur-sm border-b border-border-light">
      <div className="max-w-[var(--container-content)] mx-auto px-8 py-3.5 flex items-center gap-[34px] flex-wrap">
        <Link
          href="/"
          className="flex items-center gap-3.5 shrink-0 no-underline hover:text-inherit"
        >
          <Image
            src={LOGO_PATH}
            alt={BRAND}
            width={48}
            height={48}
            className="object-contain"
            priority
          />
          <span className="font-heading font-bold text-base text-body tracking-[1.1px] leading-[1.15]">
            LIANCHENG
            <br />
            GROUP
          </span>
        </Link>

        <nav className="ml-auto flex items-center gap-7 text-[15px] font-semibold whitespace-nowrap flex-wrap">
          {MAIN_NAV.map((item) => {
            const active = isActiveNav(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "no-underline pb-0.5",
                  active
                    ? "text-primary border-b-2 border-primary"
                    : "text-nav hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Button href="/contact" variant="header" className="shrink-0">
          Связаться
        </Button>
      </div>
    </header>
  );
}
