import { site, asset } from "@/lib/site";
import { Avatar } from "@/components/Avatar";

const a = site.authorProfile;

export function About() {
  return (
    <section id="about" className="section section--line">
      <div className="container">
        <div className="section__head" data-reveal>
          <p className="eyebrow mono">BUILT BY</p>
          <h2 className="h-section">One engineer, end to end.</h2>
        </div>

        <div className="card about__card" data-reveal style={{ marginTop: 30 }}>
          <Avatar src={asset("/avatar.jpg")} initials="ŁJ" />
          <div>
            <h3 className="about__name">{a.name}</h3>
            <p className="about__role">{a.role}</p>
            <p className="about__bio">
              AI Protector started as a question I couldn’t answer with the tools I had: can you
              actually <i>prove</i> an AI agent is under control? So I worked it end to end — the
              threat model, the deterministic grader, the firewall, the benchmarks — and published the
              weak spots next to the wins, because a number you can’t check isn’t proof. One person’s
              idea, validated in the open.
            </p>
            <p className="about__personal">{a.personal}</p>
            <div className="about__socials">
              <a className="btn btn--primary about__talk" href={a.linkedin} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" aria-hidden>
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
                </svg>
                Let’s talk
              </a>
              <a className="about__ic" href={a.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" aria-hidden>
                  <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.53.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.23 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
                </svg>
                GitHub
              </a>
              <a className="about__ic" href={a.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden>
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {a.projects.length > 0 && (
          <div className="about__more" data-reveal>
            <p className="eyebrow mono">MORE FROM THE AUTHOR</p>
            <div className="about__projects">
              {a.projects.map((p) => (
                <a
                  key={p.name}
                  className="proj"
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="proj__head">
                    <b>{p.name}</b>
                    <span className="proj__stack mono">{p.stack}</span>
                  </div>
                  <p className="proj__desc">{p.tagline}</p>
                  <span className="proj__gh mono">View on GitHub →</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
