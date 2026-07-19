"use client";

import { useEffect, useState } from "react";
import { loop } from "@/content/landing";

/** The operating loop — red-team → protect → re-test → export. Animated active node. */
export function Loop() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setActive((a) => (a + 1) % loop.steps.length);
    }, 1600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="workflow" className="section">
      <div className="container">
        <div className="section__head" data-reveal>
          <p className="eyebrow mono">{loop.eyebrow}</p>
          <h2 className="h-section">{loop.title}</h2>
          <p className="lead">{loop.intro}</p>
        </div>

        <div className="loop" data-reveal style={{ marginTop: 34 }}>
          {loop.steps.map((s, i) => (
            <div className="loop__node" key={s.key} data-active={i === active}>
              <span className="loop__n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <span className="loop__arrow" aria-hidden>
                {i === loop.steps.length - 1 ? "↺" : "→"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
