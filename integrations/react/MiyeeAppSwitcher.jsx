// React wrapper for the shared <miyee-app-switcher> web component.
// Usage: <MiyeeAppSwitcher currentApp="books" />
import { useEffect } from "react";

// Switch to "https://miyeetechlabs.com/miyee-switcher.js" once the domain is live.
const SWITCHER_SRC = "https://miyeetechlabs.miyee-india.workers.dev/miyee-switcher.js";

let loading;
function loadSwitcher(src) {
  if (typeof window === "undefined" || window.customElements?.get("miyee-app-switcher")) return Promise.resolve();
  if (!loading) {
    loading = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = src;
      s.defer = true;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }
  return loading;
}

export default function MiyeeAppSwitcher({
  currentApp,            // "hub" | "books" | "cfo" | "task" | "pdf" (optional: auto-detected from the URL)
  theme = "auto",        // "auto" | "light" | "dark"
  variant,               // "bar" for the slim top bar, omit for the button only
  align,                 // "left" to open the menu to the right of the button
  cmdK = false,          // also toggle with Ctrl/Cmd + K
  customDomain,          // true/false to force URL mode; omit to use the script default
  src = SWITCHER_SRC,
}) {
  useEffect(() => {
    loadSwitcher(src).catch(() => {});
  }, [src]);

  return (
    <miyee-app-switcher
      current-app={currentApp}
      theme={theme}
      variant={variant}
      align={align}
      cmd-k={cmdK ? "" : undefined}
      custom-domain={customDomain === undefined ? undefined : String(customDomain)}
    />
  );
}
