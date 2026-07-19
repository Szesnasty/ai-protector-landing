"use client";

import { useEffect, useRef, useState } from "react";

/** Track how far a tall container has scrolled through the viewport: 0 → 1.
 *  Drives pinned scrollytelling (sticky inner content that advances on scroll). */
export function useScrollProgress<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh;
      if (total <= 0) {
        setProgress(rect.top <= 0 ? 1 : 0);
        return;
      }
      const p = Math.min(1, Math.max(0, -rect.top / total));
      setProgress(p);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return { ref, progress } as const;
}

/** Map a 0→1 progress into an active step index across `count` steps. */
export function stepFromProgress(progress: number, count: number): number {
  return Math.min(count - 1, Math.floor(progress * count));
}
