import { wizard } from "@/content/landing";

export function Wizard() {
  return (
    <section id="wizard" className="section">
      <div className="container">
        <div className="section__head" data-reveal>
          <p className="eyebrow mono">{wizard.eyebrow}</p>
          <h2 className="h-section">{wizard.title}</h2>
          <p className="lead">{wizard.body}</p>
        </div>

        <div data-reveal style={{ marginTop: 24 }}>
          <div className="stepper">
            {wizard.steps.map((s, i) => (
              <span className="step" key={s}>
                <b>{i + 1}</b>
                {s}
              </span>
            ))}
          </div>

          <p className="mono dim" style={{ fontSize: 12, margin: "18px 0 8px" }}>
            DOWNLOADS · ENFORCEABLE POLICY
          </p>
          <div className="artifacts">
            {wizard.artifacts.map((a) => (
              <span className="chip chip--file" key={a}>
                {a}
              </span>
            ))}
          </div>

          <p className="muted" style={{ maxWidth: "60ch", margin: "18px 0" }}>
            {wizard.detail}
          </p>

          <p className="mono dim" style={{ fontSize: 12, marginBottom: 8 }}>
            ROLL OUT LIKE AN ADULT
          </p>
          <div className="rollout">
            {wizard.rollout.map((r) => (
              <span key={r}>{r}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
