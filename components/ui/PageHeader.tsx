import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  command?: string;
  children?: ReactNode;
}

export default function PageHeader({
  title,
  subtitle,
  command,
  children,
}: PageHeaderProps) {
  return (
    <header className="relative py-16 md:py-20 border-b border-border terminal-grid">
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      <div className="container-custom relative">
        {command && (
          <p className="text-accent-green font-mono text-sm mb-3">
            $ {command}
          </p>
        )}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-mono font-bold mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-text-muted font-mono max-w-2xl">{subtitle}</p>
        )}
        {children}
      </div>
    </header>
  );
}
