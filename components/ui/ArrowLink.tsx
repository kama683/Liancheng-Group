import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function ArrowLink({ href, children, className }: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-1.5 font-bold text-primary no-underline transition-[gap,color] duration-200 hover:gap-2.5 hover:text-primary-dark",
        className
      )}
    >
      {children}
      <ArrowRight className="size-4 shrink-0" strokeWidth={2.25} aria-hidden />
    </Link>
  );
}
