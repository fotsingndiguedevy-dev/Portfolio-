import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent";
}

export default function Badge({ children, variant = "default" }: BadgeProps) {
  const styles =
    variant === "accent"
      ? "border-accent-green/40 text-accent-green bg-accent-green/5"
      : "border-border text-text-muted bg-bg-card";

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono border ${styles}`}
    >
      {children}
    </span>
  );
}
