import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Section({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLElement>) {
  return (
    <section
      className={cn("container mx-auto max-w-6xl px-4 py-16 md:py-24", className)}
      {...props}
    >
      {children}
    </section>
  );
}