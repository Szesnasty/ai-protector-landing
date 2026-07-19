// Source: ai-protector docs/BENCHMARKS.md §6.2 — harmful requests safely handled (higher = better).
const rows = [
  { name: "AI Protector", pct: 90.9, hero: true, note: "harm mode" },
  { name: "gpt-5-mini", pct: 75.3 },
  { name: "gpt-5.5", pct: 66.2 },
  { name: "gpt-4", pct: 65.2 },
  { name: "gpt-4o", pct: 58.8 },
  { name: "gpt-4.1", pct: 52.1 },
  { name: "gpt-3.5-turbo", pct: 37.4 },
];

// Colour bare models by score: worse = red, better = yellow — never green.
// Green stays reserved for AI Protector. Warm warning monochrome, hue 4° → 50°.
function fillFor(pct: number) {
  const h = Math.max(3, Math.min(50, 4 + ((pct - 37) / (76 - 37)) * 46));
  return `linear-gradient(90deg, hsl(${h} 66% 42%), hsl(${h} 72% 54%))`;
}

export function ModelCompare() {
  return (
    <section className="section section--line">
      <div className="container">
        <div className="section__head" data-reveal>
          <p className="eyebrow mono">PROVEN · BENCHMARK §6</p>
          <h2 className="h-section">The model won&apos;t save you. This will.</h2>
          <p className="lead">
            Harmful attacks safely handled — AI Protector&apos;s harm layer versus every bare OpenAI
            model, same battery, deterministic grading.
          </p>
        </div>

        <div className="cmp" data-reveal style={{ marginTop: 30 }}>
          {rows.map((r) => (
            <div className={`cmp__row ${r.hero ? "cmp__row--hero" : ""}`} key={r.name}>
              <span className="cmp__name">
                {r.hero ? <b>{r.name}</b> : r.name}
                {r.note && <span className="dim" style={{ fontSize: 11 }}>{r.note}</span>}
              </span>
              <span className="cmp__track">
                <span
                  className="cmp__fill"
                  style={{ ["--w" as string]: `${r.pct}%`, ...(r.hero ? {} : { background: fillFor(r.pct) }) }}
                />
              </span>
              <span className="cmp__v">{r.pct}%</span>
            </div>
          ))}
          <div className="cmp__legend">
            <span>
              <i style={{ background: "linear-gradient(90deg,var(--brand),var(--teal))" }} />
              AI Protector — beats every bare model
            </span>
            <span>
              <i style={{ background: "linear-gradient(90deg, hsl(5 68% 48%), hsl(28 70% 50%), hsl(50 72% 54%))" }} />
              bare OpenAI models · worse score, redder
            </span>
            <span className="dim">cuts any model&apos;s leak 5–8× · reproduce with make benchmark</span>
          </div>
        </div>
      </div>
    </section>
  );
}
