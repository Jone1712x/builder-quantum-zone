import { useMemo } from "react";

interface Props {
  items: string[];
  className?: string;
}

export default function TickerSlider({ items, className = "" }: Props) {
  const loop = useMemo(() => [...items, ...items, ...items], [items]);
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="flex whitespace-nowrap animate-ticker will-change-transform">
        {loop.map((txt, i) => (
          <span
            key={i}
            className="mx-6 text-2xl md:text-3xl font-bold text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.35)]"
          >
            {txt}
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
