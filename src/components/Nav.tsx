"use client";

import { useState } from "react";
import { nav, hero } from "@/content/landing";
import { site } from "@/lib/site";

const GH_PATH =
  "M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.84 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.53.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.23 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="nav__brand" href="#top" aria-label={nav.brand} onClick={() => setOpen(false)}>
          <span className="nav__logo" aria-hidden />
          <b>{nav.brand}</b>
        </a>
        <nav className="nav__links" aria-label="Sections">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav__actions">
          <a className="nav__gh" href={site.repo} target="_blank" rel="noopener noreferrer" aria-label="AI Protector on GitHub">
            <svg viewBox="0 0 24 24" aria-hidden>
              <path d={GH_PATH} />
            </svg>
          </a>
          <a className="btn btn--primary nav__demo" href={nav.cta.href} aria-label={nav.cta.label}>
            <svg className="nav__demo-ico" viewBox="0 0 24 24" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
            <span className="nav__demo-txt">{nav.cta.label}</span>
          </a>
          <button
            className="nav__burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="nav__mobile">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={site.repo} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            <svg viewBox="0 0 24 24" aria-hidden className="nav__mobile-gh">
              <path d={GH_PATH} />
            </svg>
            GitHub
          </a>
          <a className="btn btn--primary nav__mobile-cta" href={nav.cta.href} onClick={() => setOpen(false)}>
            {nav.cta.label}
          </a>
          <p className="nav__mobile-oss">{hero.oss}</p>
        </div>
      )}
    </header>
  );
}
