import { deploy } from "@/content/landing";
import { CommandLine } from "@/components/CommandLine";

export function Deploy() {
  return (
    <section id="deploy" className="section">
      <div className="container split">
        <div className="section__head" data-reveal>
          <p className="eyebrow mono">{deploy.eyebrow}</p>
          <h2 className="h-section">{deploy.title}</h2>
          <p className="muted">{deploy.body}</p>
          <ul className="hero__facts" style={{ marginTop: 18 }}>
            {deploy.facts.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="stack" data-reveal>
          {deploy.commands.map((c) => (
            <CommandLine key={c} command={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
