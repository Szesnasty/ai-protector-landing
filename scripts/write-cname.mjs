// Generates out/CNAME for GitHub Pages from the single domain source
// (site.config.json), so the custom domain can never drift from the canonical
// URL. Wired as the `postbuild` npm lifecycle step, it runs after `next build`.
import { readFileSync, writeFileSync } from "node:fs";

const { domain } = JSON.parse(
  readFileSync(new URL("../site.config.json", import.meta.url), "utf8"),
);
writeFileSync(new URL("../out/CNAME", import.meta.url), `${domain}\n`);
console.log(`✓ out/CNAME → ${domain}`);
