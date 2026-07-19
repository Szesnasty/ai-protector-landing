"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

/** Mount once. Observes every [data-reveal] element and reveals on scroll. */
export function ScrollReveal() {
  useScrollReveal();
  return null;
}
