"use client";

import { useEffect, useRef } from "react";

const SPACING = 38;
const BASE_RADIUS = 0.9;
const HOVER_RADIUS = 3.2;
const INFLUENCE = 160;
const BASE_OPACITY = 0.13;
const HOVER_OPACITY = 0.85;
const LINE_OPACITY_MULTIPLIER = 0.55;

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mouse = { x: -9999, y: -9999 };
    const smooth = { x: -9999, y: -9999 };
    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);

    const draw = () => {
      smooth.x += (mouse.x - smooth.x) * 0.08;
      smooth.y += (mouse.y - smooth.y) * 0.08;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / SPACING) + 1;
      const rows = Math.ceil(canvas.height / SPACING) + 1;

      // Build dot data first
      const dots: { x: number; y: number; eased: number }[] = new Array(cols * rows);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * SPACING;
          const y = j * SPACING;
          const dx = smooth.x - x;
          const dy = smooth.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const ratio = Math.max(0, 1 - dist / INFLUENCE);
          const eased = ratio * ratio;
          dots[i * rows + j] = { x, y, eased };
        }
      }

      // Draw constellation lines between neighboring dots in the glow zone
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const dot = dots[i * rows + j];
          if (dot.eased <= 0.01) continue;

          const neighbors: [number, number][] = [
            [i + 1, j],
            [i, j + 1],
            [i + 1, j + 1],
            [i - 1, j + 1],
          ];

          for (const [ni, nj] of neighbors) {
            if (ni < 0 || ni >= cols || nj < 0 || nj >= rows) continue;
            const neighbor = dots[ni * rows + nj];
            if (neighbor.eased <= 0.01) continue;

            const lineOpacity =
              Math.min(dot.eased, neighbor.eased) * LINE_OPACITY_MULTIPLIER;

            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(neighbor.x, neighbor.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${lineOpacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw dots on top of lines
      for (let k = 0; k < cols * rows; k++) {
        const { x, y, eased } = dots[k];
        const r = BASE_RADIUS + eased * (HOVER_RADIUS - BASE_RADIUS);
        const opacity = BASE_OPACITY + eased * (HOVER_OPACITY - BASE_OPACITY);

        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle =
          eased > 0.01
            ? `rgba(139, 92, 246, ${opacity})`
            : `rgba(113, 113, 122, ${BASE_OPACITY})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
