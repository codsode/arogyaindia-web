import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { BreadcrumbItem } from "@/types/seo";

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm">
      <Link href="/" className="text-white/70 transition-colors hover:text-white">
        Home
      </Link>
      {items.map((item, index) => (
        <span key={item.url} className="flex items-center gap-1.5">
          <ChevronRight className="h-3.5 w-3.5 text-white/50" />
          {index === items.length - 1 ? (
            <span className="font-medium text-white">{item.name}</span>
          ) : (
            <Link
              href={item.url}
              className="text-white/70 transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
