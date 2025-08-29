import { useEffect, useRef } from "react";

interface Props {
  className?: string;
  opacity?: number;
}

export default function CandlestickChart({
  className = "",
  opacity = 0.5,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let width = (canvas.width = canvas.offsetWidth * devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * devicePixelRatio);

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth * devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * devicePixelRatio;
    };

    const onResize = () => handleResize();

    type Candle = {
      x: number;
      o: number;
      h: number;
      l: number;
      c: number;
      up: boolean;
    };
    const candles: Candle[] = [];

    const seed = () => {
      candles.length = 0;
      let last = height * 0.5;
      for (let i = 0; i < 120; i++) {
        const change = (Math.random() - 0.5) * height * 0.02;
        const o = last;
        const c = Math.max(10, Math.min(height - 10, o + change));
        const h = Math.max(o, c) + Math.random() * height * 0.01;
        const l = Math.min(o, c) - Math.random() * height * 0.01;
        candles.push({ x: i * 14 * devicePixelRatio, o, h, l, c, up: c >= o });
        last = c;
      }
      // shift to right edge
      const offset =
        width - candles[candles.length - 1].x - 20 * devicePixelRatio;
      for (const cd of candles) cd.x += offset;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = opacity;

      for (const cd of candles) {
        const color = cd.up ? "#34D399" : "#F87171"; // emerald/red
        ctx.strokeStyle = color;
        ctx.lineWidth = 2 * devicePixelRatio;
        // wick
        ctx.beginPath();
        ctx.moveTo(cd.x, cd.h);
        ctx.lineTo(cd.x, cd.l);
        ctx.stroke();
        // body
        const bodyTop = Math.min(cd.o, cd.c);
        const bodyH = Math.max(2 * devicePixelRatio, Math.abs(cd.c - cd.o));
        ctx.fillStyle = color + "55"; // add transparency
        ctx.fillRect(
          cd.x - 4 * devicePixelRatio,
          bodyTop,
          8 * devicePixelRatio,
          bodyH,
        );
      }
    };

    const tick = () => {
      for (const cd of candles) cd.x -= 1.5 * devicePixelRatio;
      if (candles[0].x < -20 * devicePixelRatio) candles.shift();
      const last = candles[candles.length - 1];
      if (last.x < width - 14 * devicePixelRatio * 8) {
        const prev = last.c;
        const change = (Math.random() - 0.5) * height * 0.03;
        const o = prev;
        const c = Math.max(10, Math.min(height - 10, o + change));
        const h = Math.max(o, c) + Math.random() * height * 0.02;
        const l = Math.min(o, c) - Math.random() * height * 0.02;
        candles.push({
          x: width - 20 * devicePixelRatio,
          o,
          h,
          l,
          c,
          up: c >= o,
        });
      }

      draw();
      rafRef.current = requestAnimationFrame(tick);
    };

    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(canvas);
    seed();
    tick();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      resizeObserver.disconnect();
    };
  }, [opacity]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      aria-hidden
    />
  );
}
