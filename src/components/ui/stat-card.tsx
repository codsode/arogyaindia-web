"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: number;
  suffix: string;
  icon: React.ReactNode;
  light?: boolean;
}

export function StatCard({ label, value, suffix, icon, light }: StatCardProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-center">
      <div
        className={cn(
          "mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full",
          light ? "bg-white/20" : "bg-primary-100"
        )}
      >
        {icon}
      </div>
      <div
        className={cn(
          "text-4xl font-bold",
          light ? "text-white" : "text-primary-600"
        )}
      >
        {count.toLocaleString()}
        {suffix}
      </div>
      <div
        className={cn(
          "mt-1 text-sm font-medium",
          light ? "text-white/80" : "text-text-secondary"
        )}
      >
        {label}
      </div>
    </div>
  );
}
