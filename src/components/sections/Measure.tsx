import { measure } from "@/content/landing";

export function Measure() {
  return (
    <section id="measure" className="section">
      <div className="container split">
        <div className="card" style={{ padding: 24 }} data-reveal>
          <p className="mono dim" style={{ fontSize: 12, marginBottom: 14 }}>
            THREAT CLASSES · NOT VENDOR BENCHMARKS
          </p>
          <div className="artifacts">
            {measure.datasets.map((d) => (
              <span className="chip" key={d}>
                {d}
              </span>
            ))}
          </div>
          <div className="rail" style={{ marginTop: 16 }}>
            {["jailbreak", "prompt_injection", "data_leakage"].map((c) => (
              <div className="rail__layer" key={c}>
                <span className="rail__i">◇</span>
                {c}
              </div>
            ))}
          </div>
        </div>

        <div className="section__head" data-reveal>
          <p className="eyebrow mono">{measure.eyebrow}</p>
          <h2 className="h-section">{measure.title}</h2>
          <div className="stack">
            {measure.body.map((p) => (
              <p className="muted" key={p.slice(0, 24)}>
                {p}
              </p>
            ))}
          </div>
          <ul className="gate" style={{ listStyle: "none", marginTop: 18 }}>
            {measure.points.map((pt) => (
              <li key={pt} style={{ padding: "5px 0", color: "var(--fg-muted)" }}>
                <span style={{ color: "var(--accent)", fontFamily: "var(--font-mono)" }}>→ </span>
                {pt}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
