"use client";

import { X } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { NavLink } from "./nav-link";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 h-full w-80 max-w-[85vw] transform bg-surface shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border p-4">
          <span className="text-lg font-bold text-primary-600">Menu</span>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-text-secondary hover:bg-surface-muted"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {navigationItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              onClick={onClose}
              mobile
            />
          ))}
        </nav>

        <div className="p-4">
          <Button href="/contact" variant="accent" size="lg" className="w-full">
            Donate Now
          </Button>
        </div>
      </div>
    </>
  );
}
