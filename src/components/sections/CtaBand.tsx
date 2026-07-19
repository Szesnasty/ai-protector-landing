import { hero } from "@/content/landing";

// In-content conversion point: a convinced reader shouldn't have to scroll back
// to the nav to act. Placed right after the "13 → 0" proof.
export function CtaBand() {
  return (
    <section className="container" style={{ paddingBlock: "clamp(24px,4vh,44px)" }}>
      <div className="ctaband" data-reveal>
        <div>
          <b>Same attacks. Zero got through.</b>
          <span>You’ve seen the before-and-after. Run the identical battery on your own agent — one URL change.</span>
        </div>
        <a className="btn btn--primary" href={hero.primary.href}>
          {hero.primary.label}
        </a>
      </div>
    </section>
  );
}
