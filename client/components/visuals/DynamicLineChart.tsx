import { useEffect, useRef } from "react";

interface Props {
  className?: string;
  gradientFrom?: string; // tailwind color class, e.g. from-[#0B1222]
  gradientTo?: string; // tailwind color class
  opacity?: number;
}

// Animated polyline chart background with glow
export default function DynamicLineChart({
  className = "",
  opacity = 0.7,
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

    const onResize = () => {
      handleResize();
    };

    const points: { x: number; y: number; vy: number }[] = [];
    const count = 80;
    for (let i = 0; i < count; i++) {
      points.push({
        x: (i / (count - 1)) * width,
        y: height * 0.5 + (Math.random() - 0.5) * height * 0.2,
        vy: (Math.random() - 0.5) * 0.6,
      });
    }

    const gradient = () => {
      const g = ctx.createLinearGradient(0, 0, 0, height);
      g.addColorStop(0, "rgba(56, 189, 248, 0.35)"); // sky-400
      g.addColorStop(1, "rgba(59, 130, 246, 0.0)"); // blue-500 transparent
      return g;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // glow
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.shadowBlur = 40 * devicePixelRatio;
      ctx.shadowColor = "rgba(56, 189, 248, 0.6)";

      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.strokeStyle = "#60A5FA"; // blue-400
      ctx.lineWidth = 3 * devicePixelRatio;
      ctx.stroke();

      // area
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fillStyle = gradient();
      ctx.fill();
      ctx.restore();
    };

    const tick = () => {
      // update points with subtle noise
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        p.vy += (Math.random() - 0.5) * 0.2;
        p.vy *= 0.95;
        p.y += p.vy;
        const center = height * 0.5;
        p.y += (center - p.y) * 0.005; // spring to center
      }

      // shift left and append new point to create motion
      for (let i = 0; i < points.length; i++) {
        points[i].x -= 1.2 * devicePixelRatio;
      }
      if (points[0].x < -10) {
        points.shift();
        points.push({
          x: width + 10,
          y: height * 0.5 + (Math.random() - 0.5) * height * 0.25,
          vy: (Math.random() - 0.5) * 0.8,
        });
      }

      draw();
      rafRef.current = requestAnimationFrame(tick);
    };

    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(canvas);
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
