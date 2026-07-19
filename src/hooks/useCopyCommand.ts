"use client";

import { useCallback, useState } from "react";

/** Copy text to clipboard and expose a transient "copied" flag. */
export function useCopyCommand(resetMs = 1600) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        window.setTimeout(() => setCopied(false), resetMs);
      } catch {
        /* clipboard unavailable — no-op */
      }
    },
    [resetMs]
  );

  return { copied, copy } as const;
}
