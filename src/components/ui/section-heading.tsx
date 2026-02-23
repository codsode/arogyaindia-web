import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12", className)}>
      <div
        className={cn(
          "mb-3 inline-block rounded-full px-4 py-1 text-sm font-semibold",
          light
            ? "bg-white/20 text-white"
            : "bg-primary-100 text-primary-700"
        )}
      >
        {title}
      </div>
      <h2
        className={cn(
          "text-3xl font-bold tracking-tight sm:text-4xl",
          light ? "text-white" : "text-text-primary"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mx-auto mt-4 max-w-2xl text-lg",
            light ? "text-white/80" : "text-text-secondary"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
