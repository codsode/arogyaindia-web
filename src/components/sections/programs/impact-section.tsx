"use client";

import { Heart, Stethoscope, Package, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { StatCard } from "@/components/ui/stat-card";
import { stats } from "@/data/stats-data";

const iconMap: Record<string, React.ReactNode> = {
  heart: <Heart className="h-6 w-6 text-white" />,
  stethoscope: <Stethoscope className="h-6 w-6 text-white" />,
  package: <Package className="h-6 w-6 text-white" />,
  users: <Users className="h-6 w-6 text-white" />,
};

export function ImpactSection() {
  return (
    <section className="bg-gradient-to-br from-primary-800 to-primary-900 py-20">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Our Impact in Numbers
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Every number represents a life touched, a community empowered, and a
            step closer to healthcare for all.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              icon={iconMap[stat.icon]}
              light
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
