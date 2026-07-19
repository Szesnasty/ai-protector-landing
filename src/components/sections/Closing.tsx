import { closing } from "@/content/landing";
import { CommandLine } from "@/components/CommandLine";
import { site } from "@/lib/site";

export function Closing() {
  return (
    <section className="section closing philo">
      <div className="container" data-reveal style={{ position: "relative", zIndex: 1 }}>
        <h2 className="h-section gradient-text">{closing.title}</h2>
        <p className="lead" style={{ margin: "16px auto 0", maxWidth: "52ch" }}>
          {closing.body}
        </p>
        <div className="closing__cmd">
          <CommandLine command={closing.command} />
        </div>
        <div className="closing__ctas">
          <a className="btn btn--primary" href={closing.primary.href}>
            {closing.primary.label}
          </a>
          <a
            className="btn btn--ghost"
            href={closing.secondary.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {closing.secondary.label} →
          </a>
        </div>
        <p className="closing__talk">
          Building agents that need this? <a href={site.authorProfile.linkedin} target="_blank" rel="noopener noreferrer">Let’s talk →</a>
        </p>
      </div>
    </section>
  );
}
