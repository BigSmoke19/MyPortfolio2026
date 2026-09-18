export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-mono text-primary border border-white/5">
      {children}
    </span>
  );
}
