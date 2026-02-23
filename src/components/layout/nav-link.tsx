"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
  mobile?: boolean;
  isScrolled?: boolean;
}

export function NavLink({ href, label, onClick, mobile, isScrolled = true }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "font-medium transition-colors",
        mobile
          ? cn(
              "block rounded-lg px-4 py-3 text-lg",
              isActive
                ? "bg-primary-50 text-primary-600"
                : "text-text-secondary hover:bg-surface-muted hover:text-text-primary"
            )
          : cn(
              "relative px-1 py-2 text-sm",
              isScrolled
                ? isActive
                  ? "text-primary-600"
                  : "text-text-secondary hover:text-text-primary"
                : isActive
                  ? "text-white"
                  : "text-white/80 hover:text-white",
              isActive &&
                cn(
                  "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full",
                  isScrolled ? "after:bg-primary-600" : "after:bg-white"
                )
            )
      )}
    >
      {label}
    </Link>
  );
}
