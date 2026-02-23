"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigationItems } from "@/data/navigation";
import { NavLink } from "./nav-link";
import { MobileNav } from "./mobile-nav";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-30 transition-all duration-300",
          isScrolled
            ? "bg-surface/95 shadow-md backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
                <Heart className="h-5 w-5 text-white" fill="white" />
              </div>
              <div>
                <span className={cn(
                  "text-xl font-bold transition-colors",
                  isScrolled ? "text-primary-700" : "text-white"
                )}>
                  Arogya
                </span>
                <span className={cn(
                  "text-xl font-bold transition-colors",
                  isScrolled ? "text-text-primary" : "text-white"
                )}>
                  {" "}India
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-8 lg:flex">
              {navigationItems.map((item) => (
                <NavLink key={item.href} href={item.href} label={item.label} isScrolled={isScrolled} />
              ))}
            </nav>

            {/* CTA + Mobile Menu */}
            <div className="flex items-center gap-3">
              <Button
                href="/contact"
                variant="accent"
                size="sm"
                className="hidden sm:inline-flex"
              >
                <Heart className="h-4 w-4" />
                Donate Now
              </Button>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={cn(
                  "rounded-lg p-2 lg:hidden transition-colors",
                  isScrolled
                    ? "text-text-primary hover:bg-surface-muted"
                    : "text-white hover:bg-white/10"
                )}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
