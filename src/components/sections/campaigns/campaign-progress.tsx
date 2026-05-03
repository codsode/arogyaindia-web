"use client";

import { motion } from "framer-motion";
import { Users, Target, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface CampaignProgressProps {
  percent: number;
  raised: number;
  goal: number;
  donors: number;
  daysLeft?: number;
  variant?: "card" | "compact";
  className?: string;
}

function formatINR(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function CampaignProgress({
  percent,
  raised,
  goal,
  donors,
  daysLeft,
  variant = "card",
  className,
}: CampaignProgressProps) {
  if (variant === "compact") {
    return (
      <div className={cn("space-y-1.5", className)}>
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-primary-700">
            {percent}% funded
          </span>
          <span className="text-text-muted">
            {formatINR(raised)} of {formatINR(goal)}
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-surface-muted">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${percent}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-700"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-2xl bg-surface p-5 shadow-sm ring-1 ring-border",
        className,
      )}
    >
      <div className="flex items-end justify-between gap-3">
        <div>
          <p className="text-3xl font-bold text-primary-700">
            {percent}%
            <span className="ml-1 text-sm font-medium text-text-muted">
              funded
            </span>
          </p>
          <p className="mt-1 text-sm text-text-secondary">
            <span className="font-semibold text-text-primary">
              {formatINR(raised)}
            </span>{" "}
            raised of {formatINR(goal)}
          </p>
        </div>
      </div>

      <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-surface-muted">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-700"
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-text-secondary">
        <span className="inline-flex items-center gap-1.5">
          <Users className="h-3.5 w-3.5 text-primary-600" />
          <span className="font-semibold text-text-primary">{donors}</span>{" "}
          donors so far
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Target className="h-3.5 w-3.5 text-primary-600" />
          Goal: {formatINR(goal)}
        </span>
        {typeof daysLeft === "number" && (
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-primary-600" />
            <span className="font-semibold text-text-primary">{daysLeft}</span>{" "}
            days left
          </span>
        )}
      </div>
    </div>
  );
}
