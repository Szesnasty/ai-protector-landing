import { prove } from "@/content/landing";
import { ReportCard } from "@/components/ReportCard";
import { asset } from "@/lib/site";

export function Prove() {
  return (
    <section id="prove" className="section section--line">
      <div className="container">
        <div className="section__head" data-reveal style={{ textAlign: "center", margin: "0 auto", maxWidth: "60ch" }}>
          <p className="eyebrow mono" style={{ justifyContent: "center", display: "inline-flex" }}>{prove.eyebrow}</p>
          <h2 className="h-section">Same attacks. One difference.</h2>
          <p className="lead" style={{ margin: "0 auto" }}>
            The identical seeded battery, before and after protection. This is the number you take to
            your security review.
          </p>
        </div>

        <div className="ba" data-reveal>
          <div className="ba__card ba__card--before">
            <div className="ba__ring">13</div>
            <div className="ba__l">
              <b>Before · no protection</b>
              <span>attacks got through</span>
            </div>
          </div>

          <div className="ba__mid">
            <div className="ba__arrow" aria-hidden>→</div>
            <div className="ba__midl">one URL change</div>
          </div>

          <div className="ba__card ba__card--after">
            <div className="ba__ring">0</div>
            <div className="ba__l">
              <b>After · AI Protector</b>
              <span>attacks got through</span>
            </div>
          </div>
        </div>

        <p className="pinned__caption" style={{ marginTop: 26 }}>
          Same 24 attacks, same seed — every category flipped from fail to pass. {prove.story}
        </p>

        <div className="repblock" data-reveal>
          <p className="repblock__eyebrow mono">THE MOMENT A SCAN FINISHES ↓</p>
          <ReportCard />
          <div className="report-cta">
            <div className="report-cta__body">
              <b>One click, no writing.</b>
              <span>
                Per-finding remediation, the full attack record, reproducible by seed — 22 pages you
                hand straight to a security review. No LLM judge in the loop.
              </span>
            </div>
            <a
              className="btn btn--primary report-cta__btn"
              href={asset("/sample-security-report.pdf")}
              download
            >
              Download the sample report ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
