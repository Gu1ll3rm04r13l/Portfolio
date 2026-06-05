"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { projects } from "@/data";
import ProjectCard, { type Project } from "./ProjectCard";

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

type Config = {
  rotate: number;
  depth: number;
  spacing: number; // % of card width per step
  scale: number;
  maxVisible: number;
};

const DESKTOP: Config = { rotate: 38, depth: 160, spacing: 62, scale: 0.82, maxVisible: 2 };
const MOBILE: Config = { rotate: 20, depth: 120, spacing: 70, scale: 0.8, maxVisible: 1 };

/**
 * Center-out arrangement: priority 1 sits in the middle, then 2→right, 3→left,
 * 4→right, 5→left… Returns the physical left→right strip as indices into the
 * source (priority-ordered) array. Data stays clean in data/index.ts; the visual
 * fan lives here.
 */
function centerOutOrder(length: number): number[] {
  const center = Math.floor((length - 1) / 2);
  const slots = new Array<number>(length);
  let left = center - 1;
  let right = center + 1;
  slots[center] = 0;
  for (let i = 1; i < length; i++) {
    if (i % 2 === 1) slots[right++] = i;
    else slots[left--] = i;
  }
  return slots;
}

/** Shortest signed distance on the ring → enables infinite looping both ways. */
function wrapOffset(raw: number, n: number): number {
  let o = ((raw % n) + n) % n; // 0..n-1
  if (o > n / 2) o -= n; // fold the far side to a negative offset
  return o;
}

function slideTransform(offset: number, cfg: Config): CSSProperties {
  const abs = Math.abs(offset);

  // Beyond the visible window: parked further out in the same direction,
  // invisible. Kept in the flow (opacity 0, no visibility:hidden) so the
  // wrap-around jump animates while unseen.
  if (abs > cfg.maxVisible) {
    const dir = Math.sign(offset) || 1;
    return {
      opacity: 0,
      transform: `translate(calc(-50% + ${offset * cfg.spacing}%), -50%) translateZ(${-cfg.depth * cfg.maxVisible}px) rotateY(${-dir * cfg.rotate}deg) scale(0.7)`,
      zIndex: 0,
      pointerEvents: "none",
    };
  }

  if (offset === 0) {
    return {
      opacity: 1,
      transform: "translate(-50%, -50%) translateZ(0px) rotateY(0deg) scale(1)",
      zIndex: 30,
    };
  }

  const dir = Math.sign(offset);
  const ry = -dir * cfg.rotate; // left cards turn right, right cards turn left
  const tx = offset * cfg.spacing; // percent of own width
  const tz = -cfg.depth * abs;
  const scale = Math.max(cfg.scale - (abs - 1) * 0.06, 0.66);
  const opacity = abs === 1 ? 0.6 : 0.32;

  return {
    opacity,
    transform: `translate(calc(-50% + ${tx}%), -50%) translateZ(${tz}px) rotateY(${ry}deg) scale(${scale})`,
    zIndex: 30 - abs,
  };
}

function Slide({
  project,
  offset,
  isActive,
  cfg,
  reducedMotion,
  onCenter,
  onOpen,
}: {
  project: Project;
  offset: number;
  isActive: boolean;
  cfg: Config;
  reducedMotion: boolean;
  onCenter: () => void;
  onOpen: (p: Project) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Only the card wrapper is inert on laterals: links not clickable, not
  // Tab-focusable. The centering overlay is a sibling so it stays interactive.
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    if (isActive) el.removeAttribute("inert");
    else el.setAttribute("inert", "");
  }, [isActive]);

  return (
    <div
      className="absolute left-1/2 top-1/2 w-[86vw] xs:w-[360px] sm:w-[380px]"
      style={{
        ...slideTransform(offset, cfg),
        transition: reducedMotion
          ? "opacity 200ms linear"
          : `transform 550ms ${EASE}, opacity 550ms ${EASE}`,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      aria-hidden={!isActive}
    >
      <div
        ref={cardRef}
        className={`relative rounded-2xl bg-[#0c0c11] shadow-2xl shadow-black/70 ring-1 ${
          isActive ? "ring-violet-500/25" : "ring-white/5"
        }`}
      >
        <ProjectCard project={project} index={0} onOpen={onOpen} />

        {/* Depth scrim: opaque backing + darken laterals so center reads clean */}
        {!isActive && (
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl bg-black"
            style={{ opacity: Math.abs(offset) === 1 ? 0.4 : 0.6 }}
            aria-hidden
          />
        )}
      </div>

      {/* Lateral click → centers it; swallows the card's links underneath. */}
      {!isActive && (
        <button
          type="button"
          onClick={onCenter}
          tabIndex={-1}
          aria-label={`Centrar proyecto: ${project.title}`}
          className="absolute inset-0 z-10 cursor-pointer rounded-2xl"
        />
      )}
    </div>
  );
}

export default function ProjectCarousel({
  onOpen,
}: {
  onOpen: (p: Project) => void;
}) {
  const n = projects.length;
  const order = useMemo(() => centerOutOrder(n), [n]);
  const initial = Math.floor((n - 1) / 2);
  const [current, setCurrent] = useState(initial);

  const [cfg, setCfg] = useState<Config>(DESKTOP);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mqMobile = window.matchMedia("(max-width: 639px)");
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      setCfg(mqMobile.matches ? MOBILE : DESKTOP);
      setReducedMotion(mqMotion.matches);
    };
    sync();
    mqMobile.addEventListener("change", sync);
    mqMotion.addEventListener("change", sync);
    return () => {
      mqMobile.removeEventListener("change", sync);
      mqMotion.removeEventListener("change", sync);
    };
  }, []);

  // Infinite: wrap into 0..n-1 instead of clamping.
  const goTo = useCallback((i: number) => setCurrent(((i % n) + n) % n), [n]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  const onKeyDown = (e: ReactKeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  };

  // Pointer drag / touch swipe.
  const drag = useRef({ x: 0, active: false, moved: false });
  const onPointerDown = (e: ReactPointerEvent) => {
    drag.current = { x: e.clientX, active: true, moved: false };
  };
  const onPointerMove = (e: ReactPointerEvent) => {
    if (drag.current.active && Math.abs(e.clientX - drag.current.x) > 8)
      drag.current.moved = true;
  };
  const onPointerUp = (e: ReactPointerEvent) => {
    if (!drag.current.active) return;
    const dx = e.clientX - drag.current.x;
    drag.current.active = false;
    if (Math.abs(dx) > 50) {
      if (dx < 0) next();
      else prev();
    }
  };

  const activeProject = projects[order[current]];

  return (
    <div className="relative">
      <div
        role="group"
        aria-roledescription="carrusel"
        aria-label="Proyectos destacados"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (drag.current.active = false)}
        className="relative h-[520px] w-full select-none overflow-hidden rounded-2xl outline-none focus-visible:ring-1 focus-visible:ring-violet-500/40"
        style={{ perspective: "1400px", touchAction: "pan-y" }}
      >
        {reducedMotion ? (
          <div className="absolute left-1/2 top-1/2 w-[86vw] -translate-x-1/2 -translate-y-1/2 xs:w-[360px] sm:w-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ProjectCard project={activeProject} index={0} onOpen={onOpen} />
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          order.map((projectIndex, position) => {
            const offset = wrapOffset(position - current, n);
            return (
              <Slide
                key={projects[projectIndex].id}
                project={projects[projectIndex]}
                offset={offset}
                isActive={offset === 0}
                cfg={cfg}
                reducedMotion={reducedMotion}
                onCenter={() => {
                  if (!drag.current.moved) goTo(position);
                }}
                onOpen={onOpen}
              />
            );
          })
        )}
      </div>

      {/* Arrows — no bounds: the ring loops forever. */}
      <button
        type="button"
        onClick={prev}
        aria-label="Proyecto anterior"
        className="absolute left-1 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-zinc-900/70 text-zinc-300 backdrop-blur transition-colors hover:border-violet-400/40 hover:text-violet-300 sm:left-4"
      >
        <FiChevronLeft size={20} />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Proyecto siguiente"
        className="absolute right-1 top-1/2 z-40 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-zinc-900/70 text-zinc-300 backdrop-blur transition-colors hover:border-violet-400/40 hover:text-violet-300 sm:right-4"
      >
        <FiChevronRight size={20} />
      </button>
    </div>
  );
}
