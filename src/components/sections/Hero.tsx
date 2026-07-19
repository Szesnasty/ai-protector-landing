import { hero } from "@/content/landing";
import { asset } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="container hero">
      <div>
        <p className="eyebrow mono">{hero.eyebrow}</p>
        <h1 className="hero__title h-display">
          Ship AI agents with guardrails — <span className="grad-teal">not prayers.</span>
        </h1>
        <p className="hero__strap">
          {hero.strap.map((beat, i) => (
            <span key={beat}>
              {beat}
              {i < hero.strap.length - 1 && <b aria-hidden> → </b>}
            </span>
          ))}
        </p>
        <p className="lead">{hero.subtitle}</p>
        <ul className="hero__facts">
          {hero.facts.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        <div className="hero__ctas">
          <a className="btn btn--primary" href={hero.primary.href}>
            {hero.primary.label}
          </a>
          <a className="btn btn--ghost" href={hero.secondary.href}>
            {hero.secondary.label} →
          </a>
        </div>
        <p className="hero__oss">
          <svg viewBox="0 0 24 24" aria-hidden>
            <path d="M12 1a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-1V6a5 5 0 0 0-5-5Zm3 8H9V6a3 3 0 0 1 6 0v3Z" />
          </svg>
          {hero.oss}
        </p>
      </div>

      <div className="hero__shot" data-reveal>
        <div className="frame">
          <div className="frame__bar">
            <span className="frame__dot" />
            <span className="frame__dot" />
            <span className="frame__dot" />
            <span className="frame__t">AI Protector · Security Scan</span>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/app/01-scan.png")} alt="AI Protector — Security Scan: find agent vulnerabilities, then prove the fix" loading="eager" width={1600} height={1000} />
        </div>
      </div>
    </section>
  );
}
