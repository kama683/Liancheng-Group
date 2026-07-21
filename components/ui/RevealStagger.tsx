"use client";

import { Children, isValidElement } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

const STAGGER_STEP_MS = 60;
const STAGGER_CAP = 8;

interface RevealStaggerProps {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
}

/** Wraps a grid of items (e.g. a `.map()` of cards) and fades each in with a capped stagger, once, on scroll into view. */
export function RevealStagger({ children, className, itemClassName }: RevealStaggerProps) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const items = Children.toArray(children);

  return (
    <div ref={ref} className={className}>
      {items.map((child, index) => (
        <div
          key={isValidElement(child) && child.key != null ? child.key : index}
          style={{
            transitionDelay: `${Math.min(index, STAGGER_CAP) * STAGGER_STEP_MS}ms`,
          }}
          className={cn(
            "transition-[opacity,transform] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
            itemClassName
          )}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
