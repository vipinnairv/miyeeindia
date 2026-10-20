/*! Miyee Tech Labs app switcher v1.0.1 | <miyee-app-switcher> | zero dependencies | (c) 2026 Vipin Nair */
(() => {
  "use strict";
  if (!window.customElements || customElements.get("miyee-app-switcher")) return;

  // Flip to true once miyeetechlabs.com and its subdomains are live.
  // Pages served from *.miyeetechlabs.com switch to the custom URLs automatically either way.
  const USE_CUSTOM_DOMAIN = false;

  const ICON = {
    hub: '<path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/>',
    books: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5"/><path d="M9 8h7M9 11.5h5"/>',
    cfo: '<path d="M3 3v18h18"/><path d="m7 15 3.5-4 3 2.5L19 7"/><path d="M15 7h4v4"/>',
    task: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="m8 9 1.5 1.5L12 8M8 15l1.5 1.5L12 14M14.5 9.5H17M14.5 15.5H17"/>',
    pdf: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8.5 13h7M8.5 17h4.5"/>',
    ext: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>'
  };

  const APPS = [
    { id: "hub", name: "Miyee Tech Labs", sub: "Suite Hub", tag: "Main Suite & Account Hub", color: "#ea580c",
      prod: "https://miyeetechlabs.com/", dev: "https://miyeetechlabs.miyee-india.workers.dev/" },
    { id: "books", name: "Miyee Books", sub: "Accounting & GST", tag: "Cloud Accounting & GST", color: "#10b981",
      prod: "https://books.miyeetechlabs.com/", dev: "https://miyeebooks.miyee-india.workers.dev/",
      alt: ["https://miyeebooks.pages.dev/"] },
    { id: "cfo", name: "Miyee CFO", sub: "CFO Analytics", tag: "Virtual CFO & Analytics", color: "#6366f1",
      prod: "https://cfo.miyeetechlabs.com/", dev: "https://miyeecfo.miyee-india.workers.dev/" },
    { id: "task", name: "Miyee Task", sub: "Tasks & Workflows", tag: "Compliance & Workflows", color: "#f59e0b",
      prod: "https://task.miyeetechlabs.com/", dev: "https://vipinnairv.github.io/MiyeeTask/" },
    { id: "pdf", name: "Miyee PDF Pro", sub: "Private PDFs", tag: "Private Client-Side PDF Suite", color: "#f43f5e",
      prod: "https://pdf.miyeetechlabs.com/", dev: "https://miyeepdfpro.miyee-india.workers.dev/" }
  ];

  const svg = (d, size = 20) =>
    `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const dots = '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">' +
    [5, 12, 19].map(y => [5, 12, 19].map(x => `<circle cx="${x}" cy="${y}" r="2.1"/>`).join("")).join("") + "</svg>";
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const CSS = `
:host{position:relative;display:inline-block;font-family:"Plus Jakarta Sans",Inter,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;line-height:1.4;
 --bg:rgba(255,255,255,.94);--solid:#fff;--fg:#0f172a;--mut:#64748b;--bd:rgba(15,23,42,.10);--hov:rgba(15,23,42,.05);--ring:#ea580c;--sh:0 24px 60px -12px rgba(15,23,42,.28),0 2px 8px rgba(15,23,42,.08)}
:host([data-mode=dark]){--bg:rgba(15,23,42,.94);--solid:#0f172a;--fg:#e2e8f0;--mut:#94a3b8;--bd:rgba(148,163,184,.18);--hov:rgba(148,163,184,.10);--sh:0 24px 60px -12px rgba(0,0,0,.6),0 2px 8px rgba(0,0,0,.3)}
:host([variant=bar]){display:block}
*{box-sizing:border-box}
a{color:inherit;text-decoration:none}
.bar{display:flex;align-items:center;justify-content:space-between;gap:12px;height:40px;padding:0 12px;background:var(--solid);color:var(--fg);border-bottom:1px solid var(--bd);font-size:13px;font-weight:600}
.bar .brand{display:inline-flex;align-items:center;gap:8px}
.bar .brand i{width:20px;height:20px;border-radius:6px;background:linear-gradient(135deg,#f97316,#c2410c);display:grid;place-items:center;color:#fff;font:800 11px/1 system-ui}
.wrap{position:relative;display:inline-block}
.trigger{width:36px;height:36px;display:grid;place-items:center;border-radius:10px;border:1px solid transparent;background:transparent;color:var(--fg);cursor:pointer;transition:background .15s,border-color .15s}
.trigger:hover,.trigger[aria-expanded=true]{background:var(--hov);border-color:var(--bd)}
.trigger:focus-visible,a:focus-visible{outline:2px solid var(--ring);outline-offset:2px}
.tip{position:absolute;top:calc(100% + 6px);right:0;white-space:nowrap;background:#0f172a;color:#fff;font-size:11px;font-weight:600;padding:4px 8px;border-radius:6px;opacity:0;pointer-events:none;transform:translateY(-2px);transition:opacity .15s,transform .15s}
.trigger:hover+.tip{opacity:1;transform:none}
:host([open]) .tip{display:none}
.pop{position:absolute;top:calc(100% + 10px);right:0;width:320px;z-index:2147483000;padding:14px;border-radius:18px;border:1px solid var(--bd);background:var(--bg);color:var(--fg);box-shadow:var(--sh);
 -webkit-backdrop-filter:blur(18px) saturate(1.4);backdrop-filter:blur(18px) saturate(1.4);transform-origin:top right;opacity:0;visibility:hidden;transform:scale(.96) translateY(-4px);transition:opacity .16s ease,transform .16s ease,visibility 0s .16s}
:host([align=left]) .pop{right:auto;left:0;transform-origin:top left}
:host([align=left]) .tip{right:auto;left:0}
:host([open]) .pop{opacity:1;visibility:visible;transform:none;transition:opacity .16s ease,transform .16s ease}
.head{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:2px 4px 10px}
.head b{font-size:10.5px;letter-spacing:.14em;color:var(--mut);font-weight:800}
.hub{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:700;color:var(--ring);padding:4px 8px;border-radius:8px}
.hub:hover{background:var(--hov)}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.app{position:relative;display:flex;flex-direction:column;gap:8px;padding:12px;border-radius:14px;border:1px solid var(--bd);background:var(--solid);transition:transform .15s,border-color .15s,box-shadow .15s}
.app:hover{transform:translateY(-2px);border-color:color-mix(in srgb,var(--c) 45%,var(--bd));box-shadow:0 8px 20px -10px color-mix(in srgb,var(--c) 60%,transparent)}
.ico{width:38px;height:38px;border-radius:11px;display:grid;place-items:center;color:#fff;background:linear-gradient(135deg,color-mix(in srgb,var(--c) 85%,#fff),var(--c))}
.t{font-size:13px;font-weight:700;letter-spacing:-.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.s{font-size:11.5px;color:var(--mut);margin-top:-6px;padding-right:24px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cur{position:absolute;top:10px;right:10px;font-size:9.5px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;padding:2px 7px;border-radius:999px;color:var(--c);background:color-mix(in srgb,var(--c) 14%,transparent)}
.hc{position:static;--c:#ea580c;margin-left:2px}
.app[aria-current=page]{border-color:color-mix(in srgb,var(--c) 55%,var(--bd))}
.nt{position:absolute;right:6px;bottom:6px;width:26px;height:26px;display:grid;place-items:center;border-radius:8px;color:var(--mut);opacity:0;transition:opacity .15s,background .15s}
.app:hover .nt,.nt:focus-visible{opacity:1}
.nt:hover{background:var(--hov);color:var(--fg)}
.foot{display:flex;justify-content:space-between;gap:6px;margin-top:12px;padding-top:10px;border-top:1px solid var(--bd)}
.foot a{font-size:11.5px;font-weight:600;color:var(--mut);padding:4px 6px;border-radius:6px}
.foot a:hover{color:var(--fg);background:var(--hov)}
@media (max-width:420px){.pop{position:fixed;top:60px;left:10px;right:10px;width:auto}}
@media (hover:none){.nt{opacity:1}}
@media (prefers-reduced-motion:reduce){.pop,.app,.tip{transition:none}}`;

  class MiyeeAppSwitcher extends HTMLElement {
    static get observedAttributes() { return ["current-app", "theme", "variant", "custom-domain"]; }

    constructor() {
      super();
      this._root = this.attachShadow({ mode: "open" });
      this._onDoc = this._onDoc.bind(this);
      this._onKey = this._onKey.bind(this);
      this._sync = () => this._applyTheme();
    }

    connectedCallback() {
      this._render();
      document.addEventListener("pointerdown", this._onDoc, true);
      document.addEventListener("keydown", this._onKey);
      this._mq = window.matchMedia && matchMedia("(prefers-color-scheme: dark)");
      this._mq && this._mq.addEventListener && this._mq.addEventListener("change", this._sync);
      this._mo = new MutationObserver(this._sync);
      this._mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class", "data-theme", "data-bs-theme"] });
    }

    disconnectedCallback() {
      document.removeEventListener("pointerdown", this._onDoc, true);
      document.removeEventListener("keydown", this._onKey);
      this._mq && this._mq.removeEventListener && this._mq.removeEventListener("change", this._sync);
      this._mo && this._mo.disconnect();
    }

    attributeChangedCallback() { if (this._root.firstChild) this._render(); }

    get useCustom() {
      const a = this.getAttribute("custom-domain");
      if (a === "true" || a === "false") return a === "true";
      if (typeof window.MIYEE_USE_CUSTOM_DOMAIN === "boolean") return window.MIYEE_USE_CUSTOM_DOMAIN;
      return USE_CUSTOM_DOMAIN || /(^|\.)miyeetechlabs\.com$/i.test(location.hostname);
    }

    url(app) { return this.useCustom ? app.prod : app.dev; }

    get current() {
      const a = (this.getAttribute("current-app") || "").toLowerCase();
      if (a) return a;
      const here = (location.origin + location.pathname).toLowerCase();
      // Longest match wins, so the hub never claims an app that lives under it.
      let best = "", len = 0;
      for (const app of APPS) for (const u of [app.prod, app.dev, ...(app.alt || [])]) {
        const base = u.toLowerCase().replace(/\/$/, "");
        if ((here === base || here.startsWith(base + "/")) && base.length > len) { best = app.id; len = base.length; }
      }
      return best;
    }

    _applyTheme() {
      const t = (this.getAttribute("theme") || "auto").toLowerCase();
      let dark = t === "dark";
      if (t === "auto") {
        const h = document.documentElement, mark = (h.dataset.theme || h.dataset.bsTheme || "").toLowerCase();
        if (h.classList.contains("dark") || mark === "dark") dark = true;
        else if (h.classList.contains("light") || mark === "light") dark = false;
        else dark = !!(this._mq ? this._mq.matches : window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches);
      }
      this.setAttribute("data-mode", dark ? "dark" : "light");
    }

    _render() {
      const cur = this.current, hub = APPS[0], hubUrl = this.url(hub);
      const tiles = APPS.slice(1).map(a => {
        const on = a.id === cur, href = esc(this.url(a));
        return `<a class="app" part="app" href="${href}" style="--c:${a.color}" title="${esc(a.tag)}"${on ? ' aria-current="page"' : ""}>
<span class="ico">${svg(ICON[a.id])}</span><span class="t">${esc(a.name)}</span><span class="s">${esc(a.sub)}</span>
${on ? '<span class="cur">Current</span>' : ""}<span class="nt" role="link" tabindex="0" data-new="${href}" aria-label="Open ${esc(a.name)} in a new tab" title="Open in new tab">${svg(ICON.ext, 14)}</span></a>`;
      }).join("");
      const menu = `<div class="wrap">
<button class="trigger" part="trigger" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="pop" aria-label="Miyee Apps (Alt+M)">${dots}</button>
<span class="tip" aria-hidden="true">Miyee Apps · Alt+M</span>
<div class="pop" id="pop" part="popover" role="dialog" aria-label="Miyee Tech Labs apps">
<div class="head"><b>MIYEE TECH LABS SUITE</b><a class="hub" href="${esc(hubUrl)}"${cur === "hub" ? ' aria-current="page"' : ""}>${svg(ICON.hub, 14)} Hub${cur === "hub" ? ' <span class="cur hc">Current</span>' : ""}</a></div>
<nav class="grid" aria-label="Apps">${tiles}</nav>
<div class="foot"><a href="${esc(hubUrl)}products.html">All Products</a><a href="${esc(hubUrl)}contact.html">Support</a><a href="${esc(hubUrl)}privacy.html">DPDP Privacy</a></div>
</div></div>`;
      const bar = this.getAttribute("variant") === "bar"
        ? `<div class="bar" part="bar"><a class="brand" href="${esc(hubUrl)}"><i>M</i>Miyee Tech Labs</a>${menu}</div>` : menu;
      this._root.innerHTML = `<style>${CSS}</style>${bar}`;
      this._btn = this._root.querySelector(".trigger");
      this._btn.addEventListener("click", () => this.toggle());
      this._root.querySelectorAll(".nt").forEach(n => {
        const go = e => { e.preventDefault(); e.stopPropagation(); window.open(n.dataset.new, "_blank", "noopener"); this.close(); };
        n.addEventListener("click", go);
        n.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") go(e); });
      });
      this._root.querySelector(".pop").addEventListener("keydown", e => this._arrows(e));
      this._applyTheme();
      if (this.hasAttribute("open")) this._btn.setAttribute("aria-expanded", "true");
    }

    get isOpen() { return this.hasAttribute("open"); }
    open() {
      if (this.isOpen) return;
      this.setAttribute("open", "");
      this._btn.setAttribute("aria-expanded", "true");
      const first = this._root.querySelector('.app[aria-current="page"]') || this._root.querySelector(".app");
      setTimeout(() => first && first.focus(), 30);
      this.dispatchEvent(new CustomEvent("miyee-switcher-open", { bubbles: true, composed: true }));
    }
    close(focusTrigger) {
      if (!this.isOpen) return;
      this.removeAttribute("open");
      this._btn.setAttribute("aria-expanded", "false");
      if (focusTrigger) this._btn.focus();
      this.dispatchEvent(new CustomEvent("miyee-switcher-close", { bubbles: true, composed: true }));
    }
    toggle() { this.isOpen ? this.close(true) : this.open(); }

    _onDoc(e) { if (this.isOpen && !e.composedPath().includes(this)) this.close(); }

    _onKey(e) {
      // Only the first switcher on a page answers the global shortcuts.
      if (document.querySelector("miyee-app-switcher") !== this) return;
      const k = (e.key || "").toLowerCase();
      if (e.altKey && !e.ctrlKey && !e.metaKey && (e.code === "KeyM" || k === "m")) { e.preventDefault(); this.toggle(); }
      else if (this.hasAttribute("cmd-k") && (e.metaKey || e.ctrlKey) && k === "k") { e.preventDefault(); this.toggle(); }
      else if (k === "escape" && this.isOpen) { e.preventDefault(); this.close(true); }
    }

    _arrows(e) {
      const items = [...this._root.querySelectorAll(".app")];
      const i = items.indexOf(this._root.activeElement);
      if (i < 0) return;
      const step = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: 2, ArrowUp: -2 }[e.key];
      if (!step) return;
      e.preventDefault();
      const n = items[i + step];
      if (n) n.focus();
    }
  }

  customElements.define("miyee-app-switcher", MiyeeAppSwitcher);
  window.MiyeeAppSwitcher = { apps: APPS, version: "1.0.1" };
})();
