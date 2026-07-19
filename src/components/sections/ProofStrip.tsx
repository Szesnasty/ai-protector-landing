import { proofStrip, proofCaption, proofMeta, worksWith } from "@/content/landing";

export function ProofStrip() {
  return (
    <section className="container" style={{ paddingBlock: "clamp(20px,3vh,32px)" }}>
      <div className="proof" data-reveal>
        {proofStrip.map((s) => (
          <div className="proof__cell" key={s.label}>
            <div className="proof__v">{s.value}</div>
            <div className="proof__l">{s.label}</div>
            <div className="proof__n">{s.note}</div>
          </div>
        ))}
      </div>

      <div className="trust" data-reveal>
        <ul className="trust__meta">
          {proofMeta.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
        <div className="trust__with">
          <span className="trust__with-l mono">{worksWith.label}</span>
          <div className="trust__chips">
            {worksWith.items.map((w) => (
              <span className="trust__chip" key={w}>
                {w}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="mono dim" style={{ fontSize: 11.5, textAlign: "center", marginTop: 12 }}>
        {proofCaption}
      </p>
    </section>
  );
}
