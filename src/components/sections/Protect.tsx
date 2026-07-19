import { protect } from "@/content/landing";
import { CommandLine } from "@/components/CommandLine";

export function Protect() {
  return (
    <section id="protect" className="section">
      <div className="container">
        <div className="section__head" data-reveal>
          <p className="eyebrow mono">{protect.eyebrow}</p>
          <h2 className="h-section">{protect.title}</h2>
        </div>

        <div style={{ margin: "18px 0 26px", maxWidth: 720 }} data-reveal>
          <CommandLine command={protect.command} prompt="py" />
        </div>

        <div className="split" style={{ alignItems: "start" }}>
          <div data-reveal>
            <p className="mono dim" style={{ fontSize: 12, marginBottom: 12 }}>
              ONE GRAPH · EVERY LLM CALL
            </p>
            <div className="pipe">
              {protect.pipeline.pre.map((l) => (
                <div className="pipe__step" key={l.n}>
                  <span className="pipe__i">{l.n}</span>
                  <div>
                    <b>{l.t}</b>
                    <small>{l.d}</small>
                  </div>
                </div>
              ))}

              <div className="pipe__fan">parallel</div>

              <div className="scanblock">
                <p className="scanblock__t mono">{protect.pipeline.scanTitle}</p>
                <div className="scanblock__grid">
                  {protect.pipeline.scanners.map((s) => (
                    <div className="scanitem" key={s.t}>
                      <div className="scanitem__h">
                        <b>{s.t}</b>
                        {"tag" in s && s.tag && <span className="scanitem__tag">{s.tag}</span>}
                      </div>
                      <small>{s.d}</small>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pipe__fan">merge</div>

              <div className="pipe__step pipe__step--decision">
                <span className="pipe__i">→</span>
                <div>
                  <b>{protect.pipeline.decision.t}</b>
                  <small>{protect.pipeline.decision.d}</small>
                </div>
              </div>

              <div className="pipe__fan">on allow</div>

              {protect.pipeline.post.map((l) => (
                <div className="pipe__step pipe__step--post" key={l.t}>
                  <span className="pipe__i pipe__i--post">↓</span>
                  <div>
                    <b>{l.t}</b>
                    <small>{l.d}</small>
                  </div>
                </div>
              ))}
            </div>
            <ul className="hero__facts" style={{ marginTop: 18 }}>
              {protect.facts.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          <div data-reveal>
            <h3 style={{ fontSize: "1.3rem", marginBottom: 8 }}>{protect.gates.title}</h3>
            <p className="muted">{protect.gates.body}</p>
            <div className="gates">
              <div className="gate">
                <h4>Pre-tool</h4>
                <ul>
                  {protect.gates.pre.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
              <div className="gate">
                <h4>Post-tool</h4>
                <ul>
                  {protect.gates.post.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="punch">
              The model proposes. <b>Policy disposes.</b>
            </p>
            <div className="provider-row">
              {protect.providers.map((p) => (
                <span className="chip" key={p}>
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
