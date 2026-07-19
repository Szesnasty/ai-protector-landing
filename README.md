# AI Protector — Landing

The marketing site for **AI Protector**, an open-source security runtime for AI agents:
red-team your endpoint, drop a firewall in front of every LLM call, re-test, and export a
deterministic audit report.

→ **Product & source:** https://github.com/Szesnasty/ai-protector

## What this is

A static, single-page site built with Next.js (App Router, `output: 'export'`) and a hand-rolled
CSS design system — no UI framework. Every data-visual — the firewall pipeline, the per-tool agent
trace verdicts, the model benchmark, the attack-library scan picker, the audit report card — is a
native recreation of the real product, so the page stays crisp and fully readable down to mobile.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build (static)

```bash
npm run build    # emits ./out
```

Deployed to GitHub Pages from `main` via `.github/workflows/deploy.yml`. The project-page base path
is injected at build time with `NEXT_PUBLIC_BASE_PATH`.

## Stack

- Next.js static export · TypeScript · App Router
- Custom CSS design tokens — dark theme, glow, scroll-driven motion
- IntersectionObserver reveals, scroll-progress pinned scrollytelling, self-contained assets

## Credits

Built with [Claude Code](https://claude.com/claude-code) and [Codument Studio](https://codument.studio/).
