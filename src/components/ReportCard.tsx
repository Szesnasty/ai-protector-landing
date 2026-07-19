import { report } from "@/content/landing";

// Native recreation of the exported PDF report's header — the score card a user gets
// the moment a scan finishes. Real numbers from run 6cbe504a.

export function ReportCard() {
  return (
    <div className="repcard">
      <div className="frame__bar">
        <span className="frame__dot" />
        <span className="frame__dot" />
        <span className="frame__dot" />
        <span className="frame__t">AI Protector · {report.frame}</span>
      </div>

      <div className="repcard__body">
        <div className="repcard__head">
          <div>
            <h3 className="repcard__title">{report.title}</h3>
            <p className="repcard__meta mono">{report.meta}</p>
          </div>
          <div className="repcard__score">
            <div className="repcard__num">
              {report.score}
              <span>{report.scoreMax}</span>
            </div>
            <span className="repcard__grade">{report.grade}</span>
          </div>
        </div>

        <div className="repcard__tiles">
          {report.tiles.map((t) => (
            <div className="reptile" key={t.l}>
              <div className="reptile__l mono">{t.l}</div>
              <div className={`reptile__v ${"tone" in t ? (t.tone as string) : ""}`}>{t.v}</div>
            </div>
          ))}
        </div>

        <p className="repcard__note">{report.note}</p>
      </div>
    </div>
  );
}
