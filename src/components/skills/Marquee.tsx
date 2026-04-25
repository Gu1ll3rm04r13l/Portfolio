"use client";

import { useReducedMotion } from "framer-motion";
import type { SkillItem } from "@/data";

interface MarqueeProps {
  label: string;
  direction: "left" | "right";
  speed: number;
  items: SkillItem[];
}

export default function Marquee({ label, direction, speed, items }: MarqueeProps) {
  const reduceMotion = useReducedMotion();

  const Card = ({ item, hidden }: { item: SkillItem; hidden?: boolean }) => {
    const Icon = item.icon;
    return (
      <span
        aria-hidden={hidden ? true : undefined}
        className="glass glass-hover rounded-xl flex-shrink-0 flex flex-col items-center justify-center gap-2 cursor-default px-5 py-4 min-w-[80px]"
      >
        <Icon size={22} style={{ color: item.color }} />
        <span className="text-xs font-medium text-zinc-300 whitespace-nowrap">
          {item.name}
        </span>
      </span>
    );
  };

  return (
    <div>
      <p className="text-xs font-medium tracking-widest uppercase text-neutral-500 mb-3 px-1">
        {label}
      </p>

      {reduceMotion ? (
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <Card key={item.name} item={item} />
          ))}
        </div>
      ) : (
        <div
          className="marquee-container relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div
            className="marquee-track flex gap-3 w-max"
            style={{
              animation: `${direction === "left" ? "marquee-left" : "marquee-right"} ${speed}s linear infinite`,
            }}
          >
            {[...items, ...items, ...items, ...items].map((item, i) => (
              <Card key={i} item={item} hidden={i >= items.length} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
