/* Common header and footer for every page, plus small helpers.
   Load this at the end of <body>. It injects the header and footer immediately,
   so assets/theme.js (loaded in <head>) can wire up the theme and menu buttons
   when the DOM is ready. Each page sets <body data-page="..."> to mark the
   current menu item. */
(function () {
  var NAV = [
    { id: "about", label: "About", href: "index.html#about" },
    { id: "experience", label: "Experience", href: "index.html#experience" },
    { id: "projects", label: "Projects", href: "index.html#projects" },
    { id: "news", label: "News & Blogs", href: "news.html" },
    { id: "community", label: "Community Help", href: "community.html" },
    { id: "support", label: "Support Us", href: "support.html" },
    { id: "gaushala", label: "Gaumata Raksha", href: "gaushala.html" },
    { id: "contact", label: "Contact", href: "index.html#contact" }
  ];

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; });
  }

  function header(page) {
    var links = NAV.map(function (n) {
      return '<li><a href="' + n.href + '"' + (n.id === page ? ' aria-current="page"' : "") + ">" + esc(n.label) + "</a></li>";
    }).join("");
    return '<a class="skip" href="#main">Skip to content</a>' +
      '<header class="site-nav"><div class="wrap nav-inner">' +
      '<a class="brand" href="index.html"><span class="brand-text">Vipin <span>Nair</span></span></a>' +
      '<nav class="nav-tools" aria-label="Main"><ul class="nav-links" id="nav-links">' + links + "</ul>" +
      '<button class="icon-btn" id="theme-toggle" type="button" aria-label="Toggle theme">&#9728;</button>' +
      '<button class="icon-btn menu-btn" id="menu-toggle" type="button" aria-label="Menu" aria-expanded="false" aria-controls="nav-links">&#9776;</button>' +
      "</nav></div></header>";
  }

  var MAIL = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>';
  var LI = '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>';
  var X = '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>';

  function footer() {
    function col(title, items) {
      return '<nav class="footer-col" aria-label="' + esc(title) + '"><h2>' + esc(title) + "</h2><ul>" +
        items.map(function (i) { return '<li><a href="' + i[1] + '"' + (i[2] ? ' target="_blank" rel="noopener noreferrer"' : "") + ">" + i[0] + "</a></li>"; }).join("") + "</ul></nav>";
    }
    return '<footer class="site-footer"><div class="wrap footer-grid">' +
      '<div class="footer-brand"><a class="brand" href="index.html"><span class="brand-text">Vipin <span>Nair</span></span></a>' +
      "<p>Finance and accounts professional, CA Inter and GST Practitioner, based in Ahmedabad. I also write free, source-backed guides on Indian corporate, tax and labour compliance as a not-for-profit community service.</p><p class=\"fineprint\">Proud Ancient India, rich with young talent: together, we can lead a better nation.</p>" +
      '<p class="fineprint"><a href="assets/Vipin_Nair_Resume_2026.docx" download>Download resume</a></p></div>' +
      col("Portfolio", [["About", "index.html#about"], ["Experience", "index.html#experience"], ["Skills", "index.html#skills"], ["Projects", "index.html#projects"], ["Education", "index.html#education"]]) +
      col("Knowledge Hub", [["News &amp; Blogs", "news.html"], ["Regulatory updates", "news.html#updates"], ["Community Help", "community.html"], ["Support Us", "support.html"], ["Gaumata Raksha", "gaushala.html"], ["Mission &amp; Disclaimer", "disclaimer.html"], ["Privacy &amp; DPDP Act", "privacy.html"]]) +
      col("Connect", [[MAIL + " audit.vipin@gmail.com", "mailto:audit.vipin@gmail.com"], [LI + " LinkedIn", "https://www.linkedin.com/in/vipin-nair-22a789207/", 1], [X + " X (Twitter)", "https://x.com/vipinnairv", 1], ["GitHub", "https://github.com/vipinnairv", 1]]) +
      "</div>" +
      '<div class="wrap footer-bottom"><p>&copy; ' + new Date().getFullYear() + " Vipin Nair. All rights reserved.</p><p><a href=\"disclaimer.html\">Disclaimer</a> &middot; <a href=\"privacy.html\">Privacy &amp; DPDP Act</a> &middot; All articles authored by Vipin</p></div>" +
      '<div class="wrap footer-disclaimer"><p><strong>Disclaimer:</strong> this is a non-commercial, not-for-profit initiative undertaken purely for community and social service. The guides on this site are for education and general information only. They are not legal, tax or professional advice. Laws, rates and due dates change through notifications and circulars, so please verify with the official source before acting. <a href="disclaimer.html">Read the full disclaimer</a>.</p></div>' +
      "</footer>";
  }

  function toast(msg) {
    var t = document.querySelector(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add("show");
    clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove("show"); }, 1800);
  }

  function copyText(text) {
    function fallback() {
      var ta = document.createElement("textarea"); ta.value = text; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); toast("Link copied"); } catch (e) { toast("Copy this link: " + text); }
      ta.remove();
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { toast("Link copied"); }, fallback);
    } else { fallback(); }
  }

  function formatDate(iso) {
    return new Date(iso + "T00:00:00").toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  }

  // Wide tables scroll inside their own box on phones.
  function wrapTables(scope) {
    (scope || document).querySelectorAll("table.data").forEach(function (t) {
      if (t.parentElement && t.parentElement.classList.contains("table-wrap")) return;
      var w = document.createElement("div"); w.className = "table-wrap"; t.parentNode.insertBefore(w, t); w.appendChild(t);
    });
  }

  window.CCH = { toast: toast, copyText: copyText, escapeHtml: esc, formatDate: formatDate, wrapTables: wrapTables };

  var body = document.body;
  body.insertAdjacentHTML("afterbegin", header(body.getAttribute("data-page") || ""));
  body.insertAdjacentHTML("beforeend", footer());

  document.getElementById("nav-links").addEventListener("click", function (e) {
    if (e.target.closest("a")) {
      this.classList.remove("open");
      document.getElementById("menu-toggle").setAttribute("aria-expanded", "false");
    }
  });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", function () { wrapTables(); });
  else wrapTables();
})();
