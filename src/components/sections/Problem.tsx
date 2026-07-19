import { problem } from "@/content/landing";

export function Problem() {
  const max = Math.max(...problem.bars.map((b) => b.leak));
  return (
    <section id="problem" className="section">
      <div className="container split">
        <div className="section__head" data-reveal>
          <p className="eyebrow mono">{problem.eyebrow}</p>
          <h2 className="h-section">{problem.title}</h2>
          <div className="stack">
            {problem.body.map((p) => (
              <p className="muted" key={p.slice(0, 24)}>
                {p}
              </p>
            ))}
          </div>
          <p className="pull-quote">{problem.pullQuote}</p>
        </div>

        <div className="card" style={{ padding: "24px" }} data-reveal>
          <p className="mono dim" style={{ fontSize: 12, marginBottom: 16 }}>
            RAW MODELS · % OF ATTACKS THAT LEAK
          </p>
          <div className="bars">
            {problem.bars.map((b) => (
              <div key={b.model}>
                <div className="bar__top">
                  <span>{b.model}</span>
                  <span className="scan__fail">{b.leak}%</span>
                </div>
                <div className="bar__track">
                  <div className="bar__fill" style={{ ["--w" as string]: `${(b.leak / max) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
