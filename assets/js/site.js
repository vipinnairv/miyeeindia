/* Shared layout: header, navigation, footer, theme toggle and small helpers.
   Every page sets <body data-page="..." data-root="./ or ../"> and includes this script. */
(function () {
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);
  } catch (e) {}

  var NAV = [
    { id: "home", label: "Portfolio", href: "index.html" },
    { id: "news", label: "News & Blogs", href: "news.html" },
    { id: "community", label: "Community Help", href: "community.html" },
    { id: "support", label: "Support Us", href: "support.html" },
    { id: "gaushala", label: "Gaumata Raksha", href: "gaushala.html" }
  ];

  function currentTheme() {
    var t = root.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function buildHeader(page, base) {
    var links = NAV.map(function (n) {
      return '<li><a href="' + base + n.href + '"' + (n.id === page ? ' aria-current="page"' : "") + ">" + n.label + "</a></li>";
    }).join("");
    return '<a class="skip" href="#main">Skip to content</a>' +
      '<header class="site-header"><div class="wrap nav">' +
      '<a class="brand" href="' + base + 'index.html"><span class="brand-mark" aria-hidden="true">VN</span>' +
      '<span>Vipin Nair<small>Compliance Community Hub</small></span></a>' +
      '<div class="nav-tools"><nav aria-label="Main"><ul class="nav-links" id="nav-links">' + links + "</ul></nav>" +
      '<button class="icon-btn" id="theme-toggle" type="button" aria-label="Toggle colour theme"></button>' +
      '<button class="icon-btn menu-btn" id="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="nav-links">&#9776;</button>' +
      "</div></div></header>";
  }

  function buildFooter(base) {
    return '<footer class="site-footer"><div class="wrap footer-grid">' +
      '<div><h2>Compliance Community Hub</h2><p>Original explainers on Indian company law, SEBI regulations, GST, income tax and labour laws, written to keep compliance knowledge free for citizens, micro-businesses and students. <span class="byline">Authored by Vipin.</span></p>' +
      '<p><strong>Disclaimer:</strong> content is for education and general information only and is not legal, tax or professional advice. Laws, rates and due dates change through notifications and circulars; verify with the official source before acting.</p></div>' +
      '<div><h2>Explore</h2><ul>' + NAV.map(function (n) { return '<li><a href="' + base + n.href + '">' + n.label + "</a></li>"; }).join("") + "</ul></div>" +
      '<div><h2>Official portals</h2><ul>' +
      '<li><a href="https://www.mca.gov.in" target="_blank" rel="noopener">mca.gov.in</a></li>' +
      '<li><a href="https://www.sebi.gov.in" target="_blank" rel="noopener">sebi.gov.in</a></li>' +
      '<li><a href="https://www.gst.gov.in" target="_blank" rel="noopener">gst.gov.in</a></li>' +
      '<li><a href="https://www.incometax.gov.in" target="_blank" rel="noopener">incometax.gov.in</a></li>' +
      '<li><a href="https://www.epfindia.gov.in" target="_blank" rel="noopener">epfindia.gov.in</a></li>' +
      "</ul></div></div>" +
      '<div class="wrap" style="margin-top:16px">&copy; ' + new Date().getFullYear() + " Compliance Community Hub. All content authored by Vipin.</div></footer>";
  }

  function toast(msg) {
    var t = document.querySelector(".toast");
    if (!t) { t = document.createElement("div"); t.className = "toast"; t.setAttribute("role", "status"); document.body.appendChild(t); }
    t.textContent = msg; t.classList.add("show");
    clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove("show"); }, 1800);
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).then(function () { toast("Link copied"); }, function () { fallback(); });
    }
    fallback();
    function fallback() {
      var ta = document.createElement("textarea"); ta.value = text; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); toast("Link copied"); } catch (e) { toast("Copy this link: " + text); }
      ta.remove();
    }
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; });
  }

  function formatDate(iso) {
    var d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  }

  // Wrap article and page tables so wide tables scroll inside their box on phones.
  function wrapTables(scope) {
    (scope || document).querySelectorAll("table.data").forEach(function (t) {
      if (t.parentElement && t.parentElement.classList.contains("table-wrap")) return;
      var w = document.createElement("div"); w.className = "table-wrap"; t.parentNode.insertBefore(w, t); w.appendChild(t);
    });
  }

  window.CCH = { toast: toast, copyText: copyText, escapeHtml: escapeHtml, formatDate: formatDate, wrapTables: wrapTables };

  document.addEventListener("DOMContentLoaded", function () {
    var body = document.body;
    var page = body.getAttribute("data-page") || "";
    var base = body.getAttribute("data-root") || "";
    body.insertAdjacentHTML("afterbegin", buildHeader(page, base));
    body.insertAdjacentHTML("beforeend", buildFooter(base));

    var tbtn = document.getElementById("theme-toggle");
    function sync() { tbtn.textContent = currentTheme() === "dark" ? "☀" : "☾"; }
    sync();
    tbtn.addEventListener("click", function () {
      var next = currentTheme() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
      sync();
    });

    var mbtn = document.getElementById("menu-toggle"), links = document.getElementById("nav-links");
    mbtn.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      mbtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") { links.classList.remove("open"); mbtn.setAttribute("aria-expanded", "false"); }
    });

    wrapTables();
  });
})();
