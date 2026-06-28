"use client";

import { useState } from "react";

export function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  }

  return (
    <button type="button" className="button-secondary" onClick={copy} aria-label={`Copy ${value}`}>
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
