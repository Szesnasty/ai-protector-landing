"use client";

import { useCopyCommand } from "@/hooks/useCopyCommand";

/** A monospace command row with a click-to-copy control. */
export function CommandLine({ command, prompt = "$" }: { command: string; prompt?: string }) {
  const { copied, copy } = useCopyCommand();
  return (
    <div className="window">
      <div className="cmd">
        <span className="cmd__prompt" aria-hidden>
          {prompt}
        </span>
        <span className="cmd__text">{command}</span>
        <button
          type="button"
          className="cmd__copy"
          onClick={() => copy(command)}
          aria-label="Copy command"
        >
          {copied ? "copied ✓" : "copy"}
        </button>
      </div>
    </div>
  );
}
