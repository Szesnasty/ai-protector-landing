"use client";

import { flow } from "@/content/landing";
import { useScrollProgress, stepFromProgress } from "@/hooks/useScrollProgress";

const LAYERS = [
  "01 · Parse & normalize",
  "02 · Intent + deobfuscation",
  "03 · Rules — denylist · encoding",
  "∥ Parallel scanners — LLM Guard · PII · NeMo · Jailbreak · Harm",
  "→ Decision — allow · mask · block",
];
const ATTACKS = [
  { t: "Credit Card Number", c: "PII Disclosure" },
  { t: "Ignore Instructions", c: "Prompt Injection" },
  { t: "System prompt extraction", c: "Data Leakage" },
];

function Console({ state }: { state: number }) {
  const key = ["scan", "protect", "prove"][state];
  return (
    <div className="console" data-state={key}>
      <div className="console__bar">
        <span className="frame__dot" />
        <span className="frame__dot" />
        <span className="frame__dot" />
        <span className="console__title">AI Protector · {flow.stages[state].frame}</span>
        <span className={`console__pill console__pill--${key}`}>{flow.stages[state].badge}</span>
      </div>

      <div className="console__body">
        {state === 0 && (
          <>
            <div className="console__head">
              <div className="console__ring console__ring--danger">13</div>
              <div className="console__ringlabel">
                <b>attacks got through</b>
                <span>out of 24 tested · no protection active</span>
              </div>
            </div>
            <div className="console__rows">
              {ATTACKS.map((a, i) => (
                <div className="console__row" key={a.t} style={{ animationDelay: `${i * 80}ms` }}>
                  <span className="console__mark console__mark--fail">!</span>
                  <div>
                    <b>{a.t}</b>
                    <small>{a.c}</small>
                  </div>
                  <span className="tag tag--crit">Critical</span>
                </div>
              ))}
            </div>
          </>
        )}

        {state === 1 && (
          <>
            <p className="mono" style={{ color: "var(--brand-2)", fontSize: 13, marginBottom: 16 }}>
              client = OpenAI(base_url=&quot;http://localhost:8000/v1&quot;) · every call inspected
            </p>
            <div className="console__pipe">
              {LAYERS.map((l, i) => (
                <div className="console__layer" key={l} style={{ animationDelay: `${i * 60}ms` }}>
                  <i />
                  {l}
                </div>
              ))}
            </div>
            <div className="console__foot">
              <span>~48 ms fast path · fully local · deterministic</span>
            </div>
          </>
        )}

        {state === 2 && (
          <>
            <div className="console__head">
              <div className="console__ring console__ring--safe">0</div>
              <div className="console__ringlabel">
                <b>attacks got through</b>
                <span>same 24 attacks · protection enforced</span>
              </div>
            </div>
            <div className="console__rows">
              {ATTACKS.map((a, i) => (
                <div className="console__row" key={a.t} style={{ animationDelay: `${i * 80}ms` }}>
                  <span className="console__mark console__mark--pass">✓</span>
                  <div>
                    <b>{a.t}</b>
                    <small>blocked before it reached the provider</small>
                  </div>
                  <span className="tag tag--pass">Blocked</span>
                </div>
              ))}
            </div>
            <div className="console__foot">
              <span>13 → 0 · category flip verified</span>
              <a className="btn btn--ghost console__export" href="#deploy">Export PDF ↓</a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export function PinnedFlow() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const active = stepFromProgress(progress, flow.stages.length);

  return (
    <section id="workflow" className="section--line">
      <div className="container" style={{ paddingTop: "var(--sec-y)" }}>
        <div className="section__head" data-reveal style={{ textAlign: "center", margin: "0 auto", maxWidth: "62ch" }}>
          <p className="eyebrow mono" style={{ justifyContent: "center", display: "inline-flex" }}>{flow.eyebrow}</p>
          <h2 className="h-section">{flow.title}</h2>
          <p className="lead" style={{ margin: "0 auto" }}>{flow.intro}</p>
        </div>
      </div>

      <div className="pinned" ref={ref} style={{ height: `${flow.stages.length * 100}vh` }}>
        <div className="pinned__sticky">
          <div className="container">
            <div className="stepbar">
              {flow.stages.map((s, i) => (
                <span key={s.key} className={`stepbar__chip stepbar__chip--${s.key}`} data-on={i === active}>
                  <b>{s.n.split(" ")[0]}</b>
                  {s.title.split(".")[0].slice(0, 22)}
                </span>
              ))}
            </div>
            <Console state={active} />
            <p className="pinned__caption">
              <b>{flow.stages[active].n}.</b> {flow.stages[active].body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
