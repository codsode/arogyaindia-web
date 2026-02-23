"use client";

import {
  Heart,
  Stethoscope,
  Package,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { StatCard } from "@/components/ui/stat-card";
import { stats } from "@/data/stats-data";

const iconMap: Record<string, React.ReactNode> = {
  heart: <Heart className="h-6 w-6 text-primary-600" />,
  stethoscope: <Stethoscope className="h-6 w-6 text-primary-600" />,
  package: <Package className="h-6 w-6 text-primary-600" />,
  users: <Users className="h-6 w-6 text-primary-600" />,
};

export function StatsSection() {
  return (
    <section className="relative -mt-16 z-10">
      <Container>
        <div className="rounded-2xl bg-surface p-8 shadow-xl sm:p-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <StatCard
                key={stat.label}
                label={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                icon={iconMap[stat.icon]}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
