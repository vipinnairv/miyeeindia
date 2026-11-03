/* News & Blogs hub. Each guide has its own static page in /guides (built by
   tools/build-guides.js) so search engines can index it.
   news.html                      hub (guides and updates)
   news.html#updates              hub scrolled to the updates feed
   news.html#/article/<id>        old link format, redirected to guides/<id>.html */
(function () {
  var DOMAINS = [
    { id: "all", label: "All topics" },
    { id: "mca", label: "Company Law (MCA)" },
    { id: "sebi", label: "SEBI" },
    { id: "gst", label: "GST" },
    { id: "income-tax", label: "Income Tax" },
    { id: "labour", label: "Labour Laws" }
  ];
  var state = { domain: "all", q: "" };
  var H = window.CCH;
  var AUTHOR_IMG = '<img src="assets/img/vipin-nair.webp" alt="" width="26" height="26">';
  var SEARCH_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>';

  // Topic cover photos (Unsplash License), hosted with the site.
  var COVERS = {
    "mca": "assets/img/photos/1623051786552-e46ef84e6c-960x400.jpg",
    "sebi": "assets/img/photos/1611974789855-9c2a0a7236-960x400.jpg",
    "gst": "assets/img/photos/1648823161626-0e83992740-960x400.jpg",
    "income-tax": "assets/img/photos/1565373679580-fc0cb538f4-960x400.jpg",
    "labour": "assets/img/photos/1577199001468-44c049e760-960x400.jpg"
  };
  function cover(domain) { return COVERS[domain] || COVERS.mca; }

  function articles() {
    return (window.ARTICLES || []).slice().sort(function (a, b) { return b.date.localeCompare(a.date); });
  }

  function matches(item) {
    if (state.domain !== "all" && item.domain !== state.domain) return false;
    if (!state.q) return true;
    var hay = (item.title + " " + item.summary + " " + (item.tags || []).join(" ") + " " + (item.domainLabel || "")).toLowerCase();
    return state.q.toLowerCase().split(/\s+/).every(function (w) { return hay.indexOf(w) !== -1; });
  }

  function cardHtml(a) {
    return '<a class="card article-card" href="guides/' + a.id + '.html">' +
      '<img class="cover" src="' + cover(a.domain) + '" alt="" loading="lazy" width="480" height="200">' +
      '<div class="body"><div class="meta"><span class="pill ' + a.domain + '">' + H.escapeHtml(a.domainLabel) + '</span><span class="pill">' + a.readTime + "</span></div>" +
      "<h3>" + H.escapeHtml(a.title) + "</h3><p>" + H.escapeHtml(a.summary) + "</p>" +
      '<div class="meta foot"><span class="byline">' + H.escapeHtml(a.author) + '</span><span aria-hidden="true">&middot;</span><time datetime="' + a.date + '">' + H.formatDate(a.date) + "</time></div></div></a>";
  }

  function updateHtml(u) {
    return '<article class="update-item"><time datetime="' + u.date + '">' + H.formatDate(u.date) + "</time><div>" +
      '<span class="pill ' + u.domain + '">' + H.escapeHtml(u.domainLabel) + "</span>" +
      "<h3>" + H.escapeHtml(u.title) + '</h3><p class="muted" style="margin:0">' + H.escapeHtml(u.summary) + "</p>" +
      '<p class="src"><span class="byline">Authored by Vipin</span> &middot; Source: ' + H.escapeHtml(u.source) +
      (u.link ? ' &middot; <a href="' + u.link + '">Read the full guide</a>' : "") + "</p></div></article>";
  }

  function renderHub() {
    var app = document.getElementById("app");
    document.title = "Vipin\u2019s GST, Income Tax & Finance Compliance Guides | Vipin Nair";
    app.innerHTML =
      '<header class="page-head split"><div class="wrap"><div>' +
      '<span class="eyebrow">News &amp; Blogs</span>' +
      "<h1>Vipin\u2019s guides to GST, income tax and finance compliance</h1>" +
      "<p>In-depth, original guides to Indian company law, SEBI regulations, GST, income tax and labour laws. Each one explains who the law applies to, how to comply step by step, the due dates, the penalties for default, and the official sources behind every statement.</p>" +
      '<div class="head-cta"><a class="btn btn-primary" href="#all-guides">Browse the guides</a><a class="btn btn-ghost" href="#updates">Latest updates</a></div>' +
      '</div><figure class="ph ph-head"><img src="assets/img/photos/1772588627327-1eeddcf73c-900x675.jpg" alt="Reviewing tax documents with a calculator" width="900" height="675"></figure></div></header>' +
      '<section class="section" id="all-guides"><div class="wrap">' +
      '<div class="hub-tools"><label class="search">' + SEARCH_ICON +
      '<span class="visually-hidden">Search articles</span><input id="q" type="search" placeholder="Search by topic, form or section, for example GSTR-9, 44AD or SDD" value="' + H.escapeHtml(state.q) + '"></label></div>' +
      '<div class="tabs" role="toolbar" aria-label="Filter by topic">' +
      DOMAINS.map(function (d) { return '<button class="tab" type="button" data-d="' + d.id + '" aria-pressed="' + (state.domain === d.id) + '">' + d.label + "</button>"; }).join("") +
      '</div><p class="muted" id="count" style="margin:14px 0"></p><div class="grid grid-3" id="cards"></div></div></section>' +
      '<section class="section alt" id="updates"><div class="wrap"><div class="section-head"><span class="eyebrow">Latest regulatory updates</span><h2>What changed recently</h2><p>Key amendments and notifications, each linked to its official source and to the guide that explains it in depth.</p></div>' +
      '<div class="panel" id="updates-list"></div></div></section>';

    var q = document.getElementById("q");
    q.addEventListener("input", function () { state.q = q.value.trim(); fill(); });
    app.querySelectorAll(".tab").forEach(function (b) {
      b.addEventListener("click", function () {
        state.domain = b.getAttribute("data-d");
        app.querySelectorAll(".tab").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        fill();
      });
    });
    app.querySelectorAll('.head-cta a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) { e.preventDefault(); document.querySelector(a.getAttribute("href")).scrollIntoView({ behavior: "smooth" }); });
    });
    fill();
    if (location.hash === "#updates") document.getElementById("updates").scrollIntoView();
  }

  function fill() {
    var list = articles().filter(matches);
    document.getElementById("cards").innerHTML = list.length ? list.map(cardHtml).join("") : '<div class="empty card flat">No guides match your search. Try another word or topic.</div>';
    document.getElementById("count").textContent = list.length + (list.length === 1 ? " guide" : " guides");
    var ups = (window.UPDATES || []).slice().sort(function (a, b) { return b.date.localeCompare(a.date); }).filter(matches);
    document.getElementById("updates-list").innerHTML = ups.length ? ups.map(updateHtml).join("") : '<p class="muted">No updates match the current filter.</p>';
  }

  function route() {
    var m = location.hash.match(/^#\/article\/([\w-]+)/);
    if (m) { location.replace("guides/" + m[1] + ".html"); return; }
    renderHub();
  }

  document.addEventListener("DOMContentLoaded", route);
  window.addEventListener("hashchange", function () {
    if (/^#\/article\//.test(location.hash)) route();
  });
})();
