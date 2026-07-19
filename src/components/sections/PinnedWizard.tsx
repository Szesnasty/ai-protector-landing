"use client";

import { wizard } from "@/content/landing";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const STEPS = wizard.steps; // Describe, Register tools, Set sensitivity, Define roles, Pick policy pack, Validate vs attacks, Roll out

// Field/row content per step; each row reveals as sub-progress passes its threshold.
const STAGE_TITLES = ["Describe your agent", "Register your tools", "Define roles", "Configure security", "Generate the kit", "Validate vs attacks", "Deploy"];

const ROWS: { k: string; v: string; at: number }[][] = [
  [], // step 0 uses the bespoke Describe form
  [
    { k: "getOrder", v: "read · low", at: 0.1 },
    { k: "issueRefund", v: "write · high · returns PII", at: 0.35 },
    { k: "deleteUser", v: "write · critical", at: 0.6 },
  ],
  [
    { k: "customer", v: "getOrder", at: 0.1 },
    { k: "agent", v: "inherits customer + issueRefund", at: 0.4 },
    { k: "admin", v: "inherits agent + deleteUser", at: 0.7 },
  ],
  [
    { k: "policy pack", v: "strict", at: 0.12 },
    { k: "scanners", v: "LLM Guard · Presidio PII · NeMo rails", at: 0.4 },
    { k: "block threshold", v: "0.50 · confirm on write", at: 0.7 },
  ],
  [
    { k: "rbac.yaml", v: "generated", at: 0.1 },
    { k: "policy.yaml + limits.yaml", v: "generated", at: 0.35 },
    { k: "protected_agent.py", v: "generated", at: 0.6 },
  ],
  [
    { k: "prompt injection ×48", v: "blocked ✓", at: 0.15 },
    { k: "pii leak ×32", v: "blocked ✓", at: 0.45 },
    { k: "jailbreak ×26", v: "blocked ✓", at: 0.7 },
  ],
  [
    { k: "mode", v: "observe → warn → enforce", at: 0.15 },
    { k: "config", v: "downloaded", at: 0.45 },
    { k: "status", v: "live · governed", at: 0.7 },
  ],
];

const CHECKS = [
  { l: "Public facing", at: 2 },
  { l: "Has write actions", at: 0.62 },
  { l: "Touches PII", at: 0.74 },
  { l: "Handles secrets", at: 2 },
  { l: "Calls external APIs", at: 0.86 },
];

function DescribeForm({ sub }: { sub: number }) {
  return (
    <div className="wform">
      <div className="wform__grid">
        <div className="field">
          <span className="field__l">Agent name</span>
          <div className="field__c">
            {sub > 0.04 ? (
              <span className="field__v">
                SupportBot{sub < 0.16 && <span className="field__cursor" />}
              </span>
            ) : (
              <span className="field__ph">e.g. SupportBot</span>
            )}
          </div>
        </div>
        <div className="field">
          <span className="field__l">Framework</span>
          <div className="field__c sel">
            <span className={sub > 0.18 ? "field__v" : "field__ph"}>LangGraph</span>
          </div>
        </div>
      </div>

      <div className="field">
        <span className="field__l">Description (optional)</span>
        <div className="field__c field__area">
          {sub > 0.3 ? (
            <span className="field__v">Handles refunds and order questions for customers.</span>
          ) : (
            <span className="field__ph">What does this agent do?</span>
          )}
        </div>
      </div>

      <div className="wform__grid">
        <div className="field">
          <span className="field__l">Environment</span>
          <div className="field__c sel">
            <span className={sub > 0.46 ? "field__v" : "field__ph"}>Development</span>
          </div>
        </div>
        <div className="field">
          <span className="field__l">Team (optional)</span>
          <div className="field__c">
            <span className={sub > 0.46 ? "field__v" : "field__ph"}>Payments</span>
          </div>
        </div>
      </div>

      <div className="field">
        <span className="field__l">Risk factors</span>
        <div className="checks">
          {CHECKS.map((c) => (
            <label className="check" key={c.l} data-on={sub > c.at}>
              <i>{sub > c.at ? "✓" : ""}</i>
              {c.l}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PinnedWizard() {
  const { ref, progress } = useScrollProgress<HTMLDivElement>();
  const scaled = progress * STEPS.length;
  const active = Math.min(STEPS.length - 1, Math.floor(scaled));
  const sub = Math.min(1, Math.max(0, scaled - active));

  return (
    <section id="wizard" className="section--line">
      <div className="container" style={{ paddingTop: "var(--sec-y)" }}>
        <div className="section__head" data-reveal style={{ textAlign: "center", margin: "0 auto", maxWidth: "62ch" }}>
          <p className="eyebrow mono" style={{ justifyContent: "center", display: "inline-flex" }}>{wizard.eyebrow}</p>
          <h2 className="h-section">{wizard.title}</h2>
          <p className="lead" style={{ margin: "0 auto" }}>Exactly the product wizard — filling itself as you scroll.</p>
        </div>
      </div>

      <div className="pinned" ref={ref} style={{ height: `${STEPS.length * 55}vh` }}>
        <div className="pinned__sticky">
          <div className="container">
            <div className="wizpanel">
              <div className="wizpanel__steps">
                {STEPS.map((s, i) => (
                  <div key={s} className="wizpanel__step" data-on={i === active} data-done={i < active}>
                    <b>{i < active ? "✓" : i + 1}</b>
                    {s}
                  </div>
                ))}
              </div>
              <div className="wizpanel__stage">
                <p className="mono" style={{ color: "var(--brand-2)", fontSize: 12 }}>
                  STEP {active + 1} / {STEPS.length} · REGISTER NEW AGENT
                </p>
                <h3 style={{ marginTop: 8 }}>{STAGE_TITLES[active]}</h3>
                {active === 0 ? (
                  <DescribeForm sub={sub} />
                ) : (
                  <div className="wform">
                    {ROWS[active].map((r) => (
                      <div
                        className="wizfield__row"
                        key={r.k}
                        style={{ opacity: sub > r.at ? 1 : 0.25, transition: "opacity .3s" }}
                      >
                        <span className="k">{r.k}</span>
                        <span className="v">{sub > r.at ? r.v : "…"}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
