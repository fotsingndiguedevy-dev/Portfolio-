"use client";

import { ReactNode } from "react";

interface TerminalProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function Terminal({
  title = "devy@portfolio:~$",
  children,
  className = "",
}: TerminalProps) {
  return (
    <div
      className={`rounded-lg overflow-hidden border border-border bg-bg-soft shadow-glow ${className}`}
    >
      {/* Barre du haut style macOS */}
      <div className="flex items-center gap-2 px-4 py-3 bg-bg-card border-b border-border">
        <span className="w-3 h-3 rounded-full bg-red-500/70"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-500/70"></span>
        <span className="w-3 h-3 rounded-full bg-accent-green/70"></span>
        <span className="ml-3 text-xs text-text-muted font-mono">{title}</span>
      </div>

      {/* Contenu du terminal */}
      <div className="p-5 font-mono text-sm leading-relaxed">{children}</div>
    </div>
  );
}
