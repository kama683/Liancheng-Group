import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface BulletListProps {
  items: string[];
  className?: string;
}

export function BulletList({ items, className }: BulletListProps) {
  return (
    <ul className={cn("list-none space-y-2.5 p-0 m-0", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-2.5 text-sm leading-relaxed text-body"
        >
          <Check
            className="mt-0.5 size-4 shrink-0 text-primary"
            strokeWidth={2.5}
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
