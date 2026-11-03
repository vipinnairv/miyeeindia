/* News & Blogs hub and article reader. Routes:
   news.html                      hub (articles and updates)
   news.html#/article/<id>        reader view for one article
   news.html#updates              hub scrolled to the updates feed */
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

  // Topic cover photos from Unsplash, hotlinked as the Unsplash API guidelines require (credited on the disclaimer page).
  var COVERS = {
    "mca": "https://images.unsplash.com/photo-1623051786552-e46ef84e6c07?ixid=M3wxMTIyNTA0fDB8MXxzZWFyY2h8Mnx8Y29ycG9yYXRlJTIwb2ZmaWNlJTIwYnVpbGRpbmd8ZW58MXwwfHx8MTc5MzcxOTIxMnww&ixlib=rb-4.1.0&w=960&h=400&fit=crop&crop=entropy&auto=format&q=70",
    "sebi": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixid=M3wxMTIyNTA0fDB8MXxzZWFyY2h8MXx8c3RvY2slMjBtYXJrZXQlMjBjaGFydHxlbnwxfDB8fHwxNzkzNzE5MjA5fDA&ixlib=rb-4.1.0&w=960&h=400&fit=crop&crop=entropy&auto=format&q=70",
    "gst": "https://images.unsplash.com/photo-1648823161626-0e839927401b?ixid=M3wxMTIyNTA0fDB8MXxzZWFyY2h8MXx8aW52b2ljZSUyMHJlY2VpcHR8ZW58MXwwfHx8MTc5MzcxOTIxMHww&ixlib=rb-4.1.0&w=960&h=400&fit=crop&crop=entropy&auto=format&q=70",
    "income-tax": "https://images.unsplash.com/photo-1565373679580-fc0cb538f49c?ixid=M3wxMTIyNTA0fDB8MXxzZWFyY2h8Nnx8Y2FsY3VsYXRvciUyMG1vbmV5JTIwaW5kaWF8ZW58MXwwfHx8MTc5MzcxOTIxMXww&ixlib=rb-4.1.0&w=960&h=400&fit=crop&crop=entropy&auto=format&q=70",
    "labour": "https://images.unsplash.com/photo-1577199001468-44c049e7603f?ixid=M3wxMTIyNTA0fDB8MXxzZWFyY2h8MXx8d29ya2VycyUyMGluZGlhfGVufDF8MHx8fDE3OTM3MTkyMTN8MA&ixlib=rb-4.1.0&w=960&h=400&fit=crop&crop=entropy&auto=format&q=70"
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
    return '<a class="card article-card" href="#/article/' + a.id + '">' +
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
    document.title = "News & Blogs | Vipin Nair";
    app.innerHTML =
      '<header class="page-head split"><div class="wrap"><div>' +
      '<span class="eyebrow">News &amp; Blogs</span>' +
      "<h1>Regulatory deep dives and the latest updates</h1>" +
      "<p>In-depth, original guides to Indian company law, SEBI regulations, GST, income tax and labour laws. Each one explains who the law applies to, how to comply step by step, the due dates, the penalties for default, and the official sources behind every statement.</p>" +
      '<div class="head-cta"><a class="btn btn-primary" href="#all-guides">Browse the guides</a><a class="btn btn-ghost" href="#updates">Latest updates</a></div>' +
      '</div><figure class="ph ph-head"><img src="https://images.unsplash.com/photo-1772588627327-1eeddcf73c11?ixid=M3wxMTIyNTA0fDB8MXxzZWFyY2h8Mnx8dGF4JTIwZG9jdW1lbnRzJTIwZGVza3xlbnwxfDB8fHwxNzkzNzE5MjAyfDA&amp;ixlib=rb-4.1.0&amp;w=900&amp;h=675&amp;fit=crop&amp;crop=entropy&amp;auto=format&amp;q=75" alt="Reviewing tax documents with a calculator" width="900" height="675"><figcaption class="ph-credit">Photo: <a href="https://unsplash.com/@kellysikkema?utm_source=miyeeindia&utm_medium=referral" target="_blank" rel="noopener noreferrer">Kelly Sikkema</a> / <a href="https://unsplash.com/?utm_source=miyeeindia&utm_medium=referral" target="_blank" rel="noopener noreferrer">Unsplash</a></figcaption></figure></div></header>' +
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

  function slug(s, used) {
    var base = s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60) || "section";
    var id = base, n = 2; while (used[id]) id = base + "-" + n++; used[id] = 1; return id;
  }

  function renderArticle(id) {
    var a = articles().find(function (x) { return x.id === id; });
    var app = document.getElementById("app");
    if (!a) {
      app.innerHTML = '<div class="wrap section"><h1>Guide not found</h1><p><a href="news.html">Back to News &amp; Blogs</a></p></div>';
      return;
    }
    document.title = a.title + " | Vipin Nair";
    app.innerHTML =
      '<div class="wrap art-layout"><article class="art-main">' +
      '<p style="margin:0 0 16px"><a href="news.html">&larr; All guides</a></p>' +
      '<header class="art-head"><div class="meta"><span class="pill ' + a.domain + '">' + H.escapeHtml(a.domainLabel) + '</span><span class="pill">' + a.readTime + "</span></div>" +
      '<h1 style="margin-top:14px">' + H.escapeHtml(a.title) + "</h1>" +
      '<div class="meta"><span class="author-badge">' + AUTHOR_IMG + H.escapeHtml(a.author) + '</span><span>Published <time datetime="' + a.date + '">' + H.formatDate(a.date) + "</time></span></div>" +
      '<div class="art-actions"><button class="btn" type="button" id="copy-link">Copy link</button>' +
      '<button class="btn" type="button" onclick="window.print()">Print or save as PDF</button>' +
      '<button class="btn toc-btn" type="button" id="toc-toggle" aria-expanded="false">Contents</button></div>' +
      '<p class="muted">' + H.escapeHtml(a.summary) + "</p></header>" +
      '<div class="article-body" id="body">' + a.body + "</div>" +
      '<p style="margin-top:28px"><span class="author-badge">' + AUTHOR_IMG + H.escapeHtml(a.author) + "</span></p>" +
      '<div class="callout"><strong>Educational content.</strong> This guide explains the law in general terms and is not professional advice. Verify thresholds, rates and due dates against the latest notifications on the official portals cited above before acting.</div>' +
      '</article><nav class="art-toc" id="toc" aria-label="Table of contents"><h2>On this page</h2><ol id="toc-list"></ol></nav></div>';

    var body = document.getElementById("body"), used = {}, items = [];
    body.querySelectorAll("h2").forEach(function (h) {
      h.id = slug(h.textContent, used);
      items.push('<li><a href="#' + h.id + '" data-id="' + h.id + '">' + H.escapeHtml(h.textContent) + "</a></li>");
    });
    document.getElementById("toc-list").innerHTML = items.join("");
    H.wrapTables(body);

    // Scroll to headings without replacing the router hash.
    document.getElementById("toc").addEventListener("click", function (e) {
      var link = e.target.closest("a[data-id]"); if (!link) return;
      e.preventDefault();
      document.getElementById(link.getAttribute("data-id")).scrollIntoView({ behavior: "smooth" });
      document.getElementById("toc").classList.remove("open");
    });
    var tt = document.getElementById("toc-toggle");
    tt.addEventListener("click", function () {
      var open = document.getElementById("toc").classList.toggle("open");
      tt.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.getElementById("copy-link").addEventListener("click", function () {
      H.copyText(location.href.split("#")[0] + "#/article/" + a.id);
    });

    if ("IntersectionObserver" in window) {
      var links = {}; document.querySelectorAll("#toc a").forEach(function (l) { links[l.getAttribute("data-id")] = l; });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) Object.keys(links).forEach(function (k) { links[k].classList.toggle("active", k === en.target.id); });
        });
      }, { rootMargin: "-90px 0px -70% 0px" });
      body.querySelectorAll("h2").forEach(function (h) { io.observe(h); });
    }
    window.scrollTo(0, 0);
  }

  function route() {
    var m = location.hash.match(/^#\/article\/([\w-]+)/);
    if (m) renderArticle(m[1]); else renderHub();
  }

  document.addEventListener("DOMContentLoaded", route);
  window.addEventListener("hashchange", function () {
    if (/^#\/article\//.test(location.hash) || !document.getElementById("cards")) route();
  });
})();
