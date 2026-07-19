import { whoFor } from "@/content/landing";

export function WhoFor() {
  return (
    <section className="section">
      <div className="container">
        <div className="section__head" data-reveal>
          <p className="eyebrow mono">{whoFor.eyebrow}</p>
          <h2 className="h-section">{whoFor.title}</h2>
        </div>

        <div className="for-grid" data-reveal style={{ marginTop: 24 }}>
          {whoFor.cards.map((c) => (
            <div className="card card--hover for-card" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
        <p className="for-not" data-reveal>
          {whoFor.not}
        </p>
      </div>
    </section>
  );
}
