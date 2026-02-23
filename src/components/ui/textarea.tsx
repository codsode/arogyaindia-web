import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        <label className="block text-sm font-medium text-text-primary">
          {label}
        </label>
        <textarea
          ref={ref}
          className={cn(
            "w-full rounded-lg border border-border bg-surface px-4 py-3 text-text-primary placeholder:text-text-muted transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 resize-none",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
            className
          )}
          rows={5}
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
