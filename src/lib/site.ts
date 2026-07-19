/** Single source of truth for site-wide constants (SEO, JSON-LD, sitemap, robots). */
import siteConfig from "../../site.config.json";

/** The production domain. Change it in ONE place — site.config.json — and the
 *  canonical URL, OG tags, sitemap, robots AND the GitHub Pages CNAME all follow
 *  (CNAME is generated from the same file by scripts/write-cname.mjs at build). */
export const DOMAIN = siteConfig.domain;

/** Deploy base path: "" for a custom domain / root, "/<repo>" for a GH project page.
 *  Kept as an env knob so CI can switch targets without touching code. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a public asset with the deploy base path.
 *  Next only rewrites _next/* and next/image — plain <img>/<a> need this or they 404. */
export const asset = (p: string) => `${BASE_PATH}${p}`;

export const site = {
  name: "AI Protector",
  tagline: "control you can prove",
  url: `https://${DOMAIN}`,
  description:
    "The security runtime for AI agents that proves it works. Measure your agent's real exposure against 5,000+ genuine attacks, put a deterministic firewall and per-tool gates in the path, and re-measure to prove the fix held. ~50 ms overhead. Fully local. No LLM judging your security.",
  repo: "https://github.com/Szesnasty/ai-protector",
  author: "Łukasz Jakubowski",
  authorProfile: {
    name: "Łukasz Jakubowski",
    role: "Software developer · 9 years · building AI solutions",
    github: "https://github.com/Szesnasty",
    linkedin: "https://www.linkedin.com/in/%C5%82ukasz-jakubowski-a9b875210/",
    personal: "Outside work: forest trails, bikes, heavy lifting, and good music.",
    projects: [
      {
        name: "ContextGuard",
        stack: "Python · FastAPI · pgvector",
        tagline:
          "A context firewall for RAG systems — enforce tenant and role policy, redact sensitive chunks, and block prompt injection, with an audit trail of exactly what reached the model.",
        href: "https://github.com/Szesnasty/ContextGuard",
      },
      {
        name: "Jarvis",
        stack: "Python · Vue · MCP",
        tagline:
          "A local-first knowledge system that turns notes, files, and AI chats into durable memory — with a built-in MCP server exposing 26 tools to Claude, Cursor, and VS Code.",
        href: "https://github.com/Szesnasty/Jarvis",
      },
    ],
  },
  keywords: [
    "AI agent security",
    "LLM firewall",
    "prompt injection",
    "red teaming",
    "agent guardrails",
    "RBAC for AI agents",
    "deterministic AI security",
    "jailbreak defense",
    "AI red team",
  ],
} as const;
