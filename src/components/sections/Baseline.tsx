import { baseline } from "@/content/landing";

// Native recreation of the app's "Choose attacks by threat" scan picker — real corpus
// counts. Shows the breadth of the attack library and that you select by OWASP category.

export function Baseline() {
  return (
    <section id="baseline" className="section section--line">
      <div className="container">
        <div className="section__head" data-reveal>
          <p className="eyebrow mono">{baseline.eyebrow}</p>
          <h2 className="h-section">{baseline.title}</h2>
          <p className="lead">{baseline.intro}</p>
        </div>

        <div className="scanpick" data-reveal style={{ marginTop: 28 }}>
          <div className="frame__bar">
            <span className="frame__dot" />
            <span className="frame__dot" />
            <span className="frame__dot" />
            <span className="frame__t">AI Protector · {baseline.frame}</span>
          </div>

          <div className="scanpick__body">
            <div className="scanpick__chips">
              {baseline.selected.map((s) => (
                <span className="scanpick__chip" key={s}>
                  {s} <b>×</b>
                </span>
              ))}
              <span className="scanpick__hint mono">select by OWASP category, or drill into a corpus</span>
            </div>

            <div className="scanpick__list">
              {baseline.categories.map((c) => {
                const kids = "children" in c ? c.children : undefined;
                return (
                  <div className="scancat" key={c.name} data-open={kids ? "true" : undefined}>
                    <div className="scancat__row">
                      <span className="scancat__box" data-on={kids ? "part" : undefined} />
                      <span className="scancat__name">{c.name}</span>
                      {c.owasp && <span className="scancat__owasp">{c.owasp}</span>}
                      <span className="scancat__count mono">{c.count}</span>
                      <span className="scancat__src mono">{c.sources}</span>
                    </div>
                    {kids && (
                      <div className="scancat__kids">
                        {kids.map((k) => (
                          <div className="scankid" key={k.name}>
                            <span className="scankid__name mono">{k.name}</span>
                            <span className="scankid__count mono">{k.count}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="scanpick__foot">
              <span className="scanpick__total mono">
                <b>{baseline.total}</b> across OWASP-mapped categories
              </span>
              <span className="scanpick__note">{baseline.footnote}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
