import { useEffect, useMemo, useRef, useState } from "react";

interface Props {
  items?: string[];
  className?: string;
  randomize?: boolean;
  min?: number;
  max?: number;
  count?: number;
  refreshMs?: number;
}

function sampleInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buildRandomList(min = 10, max = 250, count = 80): string[] {
  const set = new Set<number>();
  while (set.size < count) {
    // bias slightly toward smaller values for realism
    const r = Math.random();
    let val: number;
    if (r < 0.55) val = sampleInt(min, Math.min(100, max));
    else if (r < 0.85) val = sampleInt(101, Math.min(170, max));
    else val = sampleInt(Math.max(171, min), max);
    set.add(val);
  }
  return Array.from(set).map((n) => `+$${n}`);
}

export default function TickerSlider({
  items,
  className = "",
  randomize = false,
  min = 10,
  max = 250,
  count = 80,
  refreshMs = 15000,
}: Props) {
  const [data, setData] = useState<string[]>(() =>
    randomize ? buildRandomList(min, max, count) : items ?? []
  );
  const keyRef = useRef(0);

  useEffect(() => {
    if (!randomize) return;
    const id = setInterval(() => {
      keyRef.current += 1; // reset animation by key change
      setData(buildRandomList(min, max, count));
    }, refreshMs);
    return () => clearInterval(id);
  }, [randomize, min, max, count, refreshMs]);

  const loop = useMemo(() => [...data, ...data, ...data], [data]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        key={keyRef.current}
        className="flex whitespace-nowrap animate-ticker will-change-transform"
      >
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
