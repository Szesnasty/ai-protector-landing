import { numbers } from "@/content/landing";

export function Numbers() {
  return (
    <section id="numbers" className="section">
      <div className="container">
        <div className="section__head" data-reveal>
          <p className="eyebrow mono">{numbers.eyebrow}</p>
          <h2 className="h-section">{numbers.title}</h2>
          <p className="muted">{numbers.intro}</p>
        </div>

        <div data-reveal style={{ marginTop: 24, overflowX: "auto" }}>
          <table className="numbers-table">
            <tbody>
              {numbers.rows.map((r) => (
                <tr key={r.metric} className={"strong" in r && r.strong ? "strong" : undefined}>
                  <td>{r.metric}</td>
                  <td>{r.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="limits">{numbers.limits}</p>
        </div>
      </div>
    </section>
  );
}
