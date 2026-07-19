"use client";

import { hook } from "@/content/landing";
import { useCountUp } from "@/hooks/useCountUp";

const toneClass: Record<string, string> = {
  danger: "scan__fail",
  safe: "",
  dim: "dim",
};

export function Hook() {
  const count = useCountUp(hook.count, 1100);

  return (
    <section id="gap" className="section section--line hook">
      <div className="container hook__inner">
        <div data-reveal>
          <p className="eyebrow mono">{hook.eyebrow}</p>
          <h2 className="h-section" style={{ margin: "14px 0 22px" }}>
            {hook.title}
          </h2>
          <div className="hook__count">
            <div className="hook__ring" ref={count.ref as React.Ref<HTMLDivElement>}>
              {count.value}
            </div>
            <div className="hook__ringlabel">
              <b>attacks got through</b>
              <span className="dim">
                out of {hook.tested} tested · no protection active
              </span>
            </div>
          </div>
          <div className="hook__stats">
            {hook.stats.map((s) => (
              <div className="hook__stat" key={s.l}>
                <b
                  style={{
                    color:
                      s.tone === "danger"
                        ? "var(--danger)"
                        : s.tone === "safe"
                          ? "var(--safe)"
                          : "var(--fg)",
                  }}
                >
                  {s.v}
                </b>
                <span>{s.l}</span>
              </div>
            ))}
          </div>
          <div className="hook__banner">
            <span aria-hidden>⚠</span>
            <p>{hook.banner}</p>
          </div>
        </div>

        <div className="hook__list" data-reveal>
          <p className="mono dim" style={{ fontSize: 12, marginBottom: 4 }}>
            WHAT GOT THROUGH — EACH ONE BYPASSED THE MODEL
          </p>
          {hook.rows.map((r) => (
            <div className="hook__row" key={r.title}>
              <span className="hook__dot">!</span>
              <div>
                <b>{r.title}</b>
                <small>
                  {r.cat} · <span className="scan__fail">{r.note}</span>
                </small>
              </div>
              <span className="hook__tag">Critical</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
