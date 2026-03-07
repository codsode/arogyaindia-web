"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Campaign, CampaignCategory } from "@/types/campaign";

const categoryBadgeVariant: Record<
  CampaignCategory,
  "primary" | "secondary" | "accent"
> = {
  "Health Awareness": "primary",
  "Rare Disease Aid": "secondary",
  "Child Health": "accent",
};

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

interface CampaignCardProps {
  campaign: Campaign;
}

export function CampaignCard({ campaign }: CampaignCardProps) {
  const progressPercent = Math.min(
    Math.round((campaign.raisedAmount / campaign.goalAmount) * 100),
    100
  );

  return (
    <Card className="group flex h-full flex-col">
      {/* Campaign Image */}
      <div className="relative -mx-6 -mt-6 mb-5 aspect-[16/10] overflow-hidden rounded-t-xl">
        <Image
          src={campaign.image}
          alt={campaign.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Category badge */}
        <div className="absolute left-3 top-3 flex gap-2">
          <Badge variant={categoryBadgeVariant[campaign.category]}>
            {campaign.category}
          </Badge>
        </div>
        {/* Completed badge */}
        {campaign.status === "completed" && (
          <div className="absolute right-3 top-3">
            <Badge variant="primary" className="bg-green-100 text-green-700">
              <CheckCircle className="mr-1 h-3 w-3" />
              Completed
            </Badge>
          </div>
        )}
      </div>

      {/* Title & description */}
      <h3 className="mb-2 text-lg font-semibold text-text-primary">
        {campaign.title}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-text-secondary">
        {campaign.description.length > 150
          ? campaign.description.slice(0, 150).trimEnd() + "..."
          : campaign.description}
      </p>

      {/* Progress bar */}
      <div className="mt-auto">
        <div className="mb-2 flex items-center justify-between text-xs text-text-muted">
          <span>Raised: {formatCurrency(campaign.raisedAmount)}</span>
          <span>Goal: {formatCurrency(campaign.goalAmount)}</span>
        </div>
        <div className="h-2.5 w-full overflow-hidden rounded-full bg-surface-muted">
          <div
            className={`h-full rounded-full transition-all duration-500 ${
              campaign.status === "completed"
                ? "bg-green-500"
                : "bg-primary-600"
            }`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="mt-1.5 text-right text-xs font-medium text-text-muted">
          {progressPercent}% funded
        </p>
      </div>
    </Card>
  );
}
