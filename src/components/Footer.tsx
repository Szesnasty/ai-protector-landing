import { footer } from "@/content/landing";
import { site } from "@/lib/site";

const hrefFor: Record<string, string> = {
  GitHub: site.repo,
  Issues: `${site.repo}/issues`,
  "Security policy": `${site.repo}/blob/main/SECURITY.md`,
  License: `${site.repo}/blob/main/LICENSE`,
  "Benchmark matrix": `${site.repo}/blob/main/docs/BENCHMARKS.md`,
  "Oracle calibration": `${site.repo}/blob/main/docs/red-team-oracle-calibration.md`,
  JailbreakBench: "https://jailbreakbench.github.io/",
  Changelog: `${site.repo}/blob/main/CHANGELOG.md`,
};

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <b>{footer.brand}</b>
            <span>{footer.tagline}</span>
          </div>
          {footer.columns.map((col) => (
            <div className="footer__col" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l}>
                    <a href={hrefFor[l] ?? "#"} target="_blank" rel="noopener noreferrer">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="footer__bottom">{footer.bottom}</p>
        <p className="footer__credit">
          {footer.credit.prefix}{" "}
          {footer.credit.tools.map((t, i) => (
            <span key={t.label}>
              <a href={t.href} target="_blank" rel="noopener noreferrer">
                {t.label}
              </a>
              {i < footer.credit.tools.length - 1 ? " and " : "."}
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
}
