"use client";

import { useEffect, useRef } from "react";

const SPACING = 38;
const BASE_RADIUS = 0.9;
const HOVER_RADIUS = 3.2;
const INFLUENCE = 160;
const BASE_OPACITY = 0.13;
const HOVER_OPACITY = 0.85;

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Smooth mouse with lerp
    const mouse = { x: -9999, y: -9999 };
    const smooth = { x: -9999, y: -9999 };
    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(document.documentElement);

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY + window.scrollY;
    };

    window.addEventListener("mousemove", onMouseMove);

    const draw = () => {
      // Lerp smoothing
      smooth.x += (mouse.x - smooth.x) * 0.08;
      smooth.y += (mouse.y - smooth.y) * 0.08;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / SPACING) + 1;
      const rows = Math.ceil(canvas.height / SPACING) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * SPACING;
          const y = j * SPACING;

          const dx = smooth.x - x;
          const dy = smooth.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const ratio = Math.max(0, 1 - dist / INFLUENCE);
          // Easing: quadratic falloff for softer glow edge
          const eased = ratio * ratio;

          const r = BASE_RADIUS + eased * (HOVER_RADIUS - BASE_RADIUS);
          const opacity = BASE_OPACITY + eased * (HOVER_OPACITY - BASE_OPACITY);

          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);

          if (eased > 0.01) {
            // Violet glow dots near cursor
            ctx.fillStyle = `rgba(139, 92, 246, ${opacity})`;
          } else {
            // Base zinc dots
            ctx.fillStyle = `rgba(113, 113, 122, ${BASE_OPACITY})`;
          }

          ctx.fill();
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
