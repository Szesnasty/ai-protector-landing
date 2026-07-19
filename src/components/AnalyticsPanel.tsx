const tiles = [
  { l: "Total requests", v: "12,847", cls: "" },
  { l: "Block rate", v: "8.2%", cls: "dn" },
  { l: "Modified", v: "412", cls: "" },
  { l: "Allowed", v: "11,382", cls: "ok" },
  { l: "Avg latency", v: "48 ms", cls: "up" },
];

const byPolicy = [
  { k: "paranoid", pct: 14 },
  { k: "strict", pct: 9 },
  { k: "balanced", pct: 6 },
  { k: "fast", pct: 2 },
];

const intent = [
  { k: "benign", pct: 71, c: "var(--safe)" },
  { k: "injection", pct: 14, c: "var(--danger)" },
  { k: "jailbreak", pct: 9, c: "var(--warn)" },
  { k: "extraction", pct: 6, c: "var(--brand)" },
];

// A smooth-ish request-volume sparkline.
const pts = [8, 12, 9, 16, 22, 18, 27, 24, 33, 29, 41, 38, 47, 52, 44, 58, 63, 55, 68, 72];
const W = 620;
const H = 120;
const max = Math.max(...pts);
const line = pts.map((p, i) => `${(i / (pts.length - 1)) * W},${H - (p / max) * (H - 12) - 6}`).join(" ");
const area = `M0,${H} L${line.replaceAll(" ", " L")} L${W},${H} Z`;

export function AnalyticsPanel() {
  return (
    <div className="analytics" data-reveal>
      <div className="frame__bar">
        <span className="frame__dot" />
        <span className="frame__dot" />
        <span className="frame__dot" />
        <span className="frame__t">AI Protector · analytics · firewall performance · last 24h</span>
      </div>

      <div className="analytics__tiles">
        {tiles.map((t) => (
          <div className="tile" key={t.l}>
            <div className="tile__l">{t.l}</div>
            <div className={`tile__v ${t.cls}`}>{t.v}</div>
          </div>
        ))}
      </div>

      <div className="analytics__grid">
        <div className="apanel">
          <h4>Request volume</h4>
          <svg className="spark" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden>
            <defs>
              <linearGradient id="sparkfill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(124,140,255,0.35)" />
                <stop offset="100%" stopColor="rgba(124,140,255,0)" />
              </linearGradient>
            </defs>
            <path className="area" d={area} />
            <polyline className="line" points={line} fill="none" />
          </svg>
        </div>

        <div className="apanel">
          <h4>Intent distribution</h4>
          <div className="barh">
            {intent.map((r) => (
              <div className="barh__row" key={r.k}>
                <span className="muted">{r.k}</span>
                <span className="barh__track">
                  <span className="barh__fill" style={{ ["--w" as string]: `${r.pct}%`, background: r.c }} />
                </span>
                <span className="barh__v">{r.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="analytics__grid">
        <div className="apanel">
          <h4>Block rate by policy</h4>
          <div className="barh">
            {byPolicy.map((r) => (
              <div className="barh__row" key={r.k}>
                <span className="muted">{r.k}</span>
                <span className="barh__track">
                  <span
                    className="barh__fill"
                    style={{ ["--w" as string]: `${(r.pct / 14) * 100}%`, background: "linear-gradient(90deg,var(--brand),var(--brand-2))" }}
                  />
                </span>
                <span className="barh__v">{r.pct}%</span>
              </div>
            ))}
          </div>
        </div>
        <div className="apanel">
          <h4>Top risk flags</h4>
          <div className="barh">
            {[
              { k: "pii.email", pct: 38 },
              { k: "secret.api_key", pct: 24 },
              { k: "injection.role", pct: 19 },
              { k: "pii.credit_card", pct: 12 },
            ].map((r) => (
              <div className="barh__row" key={r.k}>
                <span className="muted">{r.k}</span>
                <span className="barh__track">
                  <span className="barh__fill" style={{ ["--w" as string]: `${r.pct}%`, background: "var(--warn)" }} />
                </span>
                <span className="barh__v">{r.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
