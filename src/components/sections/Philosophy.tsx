import { philosophy } from "@/content/landing";

export function Philosophy() {
  return (
    <section className="section philo">
      <div className="container split" style={{ position: "relative", zIndex: 1 }}>
        <div className="section__head" data-reveal>
          <p className="eyebrow mono">{philosophy.eyebrow}</p>
          <h2 className="h-section gradient-text">{philosophy.title}</h2>
          <div className="stack">
            {philosophy.body.map((p) => (
              <p className="muted" key={p.slice(0, 24)}>
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="calib" data-reveal>
          <p className="mono dim" style={{ fontSize: 12 }}>
            CALIBRATION · BEFORE → AFTER
          </p>
          {philosophy.calib.map((c) => (
            <div className="calib__row" key={c.label}>
              <span className="muted">{c.label}</span>
              <span className="calib__delta">
                <s>{c.from}</s> <span className="dim">→</span> <b>{c.to}</b>
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="proofline" aria-hidden>
          <span>{philosophy.stamp}</span>
        </div>
      </div>
    </section>
  );
}
