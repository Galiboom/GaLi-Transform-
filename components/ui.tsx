import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(159,231,245,0.12),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(245,233,208,0.09),transparent_28%)]" />
      <div className="pointer-events-none fixed inset-0 bg-texture bg-[size:22px_22px] opacity-[0.08]" />
      <div className="relative">{children}</div>
    </div>
  );
}

export function Glass({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        'rounded-lg border border-line bg-panel/90 shadow-glass backdrop-blur-[18px]',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Button({
  asChild,
  className,
  children,
}: {
  asChild?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-lg border border-line bg-white/6 px-3 py-2 text-sm font-medium text-text transition hover:bg-white/10';
  if (asChild) {
    return <Link className={cn(base, className)} href="#">{children}</Link>;
  }
  return <button className={cn(base, className)}>{children}</button>;
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-white/5 px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] text-muted">
      {children}
    </span>
  );
}
