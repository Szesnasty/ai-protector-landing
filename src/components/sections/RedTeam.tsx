import { redteam } from "@/content/landing";

// Deterministic "got through" positions spread across the grid (no Math.random in SSR).
const THROUGH = new Set([3, 7, 12, 18, 21, 26, 30, 34, 39, 44, 48, 51, 55, 58]);

export function RedTeam() {
  const cells = Array.from({ length: redteam.total }, (_, i) => i);
  return (
    <section id="redteam" className="section section--line">
      <div className="container split">
        <div className="section__head" data-reveal>
          <p className="eyebrow mono">{redteam.eyebrow}</p>
          <h2 className="h-section">{redteam.title}</h2>
          <p className="muted">{redteam.body}</p>
          <div className="provider-row" style={{ marginTop: 20 }}>
            {redteam.datasets.map((d) => (
              <span className="chip" key={d}>
                {d}
              </span>
            ))}
          </div>
        </div>

        <div data-reveal>
          <div className="rt">
            {cells.map((i) => {
              const through = THROUGH.has(i);
              return (
                <div
                  key={i}
                  className={`rt__cell ${through ? "rt__cell--through" : "rt__cell--blocked"}`}
                  style={{ animationDelay: `${(i % 12) * 40 + Math.floor(i / 12) * 60}ms` }}
                >
                  {through ? "✕" : "✓"}
                </div>
              );
            })}
          </div>
          <div className="rt__legend">
            <span>
              <i style={{ background: "rgba(255,77,94,0.4)" }} />
              {redteam.through} got through (unprotected)
            </span>
            <span>
              <i style={{ background: "rgba(45,212,191,0.35)" }} />
              blocked
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
