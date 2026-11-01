/* News & Blogs hub and article reader. Routes:
   news.html                      hub (articles and updates)
   news.html#/article/<id>        reader view for one article
   news.html#updates              hub scrolled to updates */
(function () {
  var DOMAINS = [
    { id: "all", label: "All" },
    { id: "mca", label: "Company Law (MCA)" },
    { id: "sebi", label: "SEBI" },
    { id: "gst", label: "GST" },
    { id: "income-tax", label: "Income Tax" },
    { id: "labour", label: "Labour Laws" }
  ];
  var state = { domain: "all", q: "" };
  var H = window.CCH;

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
      '<div class="meta"><span class="pill ' + a.domain + '">' + H.escapeHtml(a.domainLabel) + '</span><span class="pill">' + a.readTime + "</span></div>" +
      "<h3>" + H.escapeHtml(a.title) + "</h3><p>" + H.escapeHtml(a.summary) + "</p>" +
      '<div class="meta"><span class="byline">' + H.escapeHtml(a.author) + "</span><span>&middot;</span><time datetime=\"" + a.date + "\">" + H.formatDate(a.date) + "</time></div></a>";
  }

  function updateHtml(u) {
    return '<article class="update-item"><time datetime="' + u.date + '">' + H.formatDate(u.date) + "</time><div>" +
      '<span class="pill ' + u.domain + '">' + H.escapeHtml(u.domainLabel) + "</span>" +
      "<h3>" + H.escapeHtml(u.title) + "</h3><p class=\"muted\" style=\"margin:0\">" + H.escapeHtml(u.summary) + "</p>" +
      '<p class="src"><span class="byline">Authored by Vipin</span> &middot; Source: ' + H.escapeHtml(u.source) +
      (u.link ? ' &middot; <a href="' + u.link + '">Read the guide</a>' : "") + "</p></div></article>";
  }

  function renderHub() {
    var app = document.getElementById("app");
    document.title = "News & Blogs | Compliance Community Hub";
    app.innerHTML =
      '<section class="hero"><div class="wrap"><span class="eyebrow">News &amp; Blogs</span>' +
      "<h1>Regulatory deep dives and the latest updates</h1>" +
      '<p class="lead">Long-form, original guides on company law, SEBI, GST, income tax and labour laws, each with applicability tables, filing workflows, due dates, penalties and official sources. Authored by Vipin.</p></div></section>' +
      '<section class="section"><div class="wrap">' +
      '<div class="hub-tools"><label class="search"><span aria-hidden="true">&#128269;</span><span class="visually-hidden" style="position:absolute;left:-999px">Search articles</span>' +
      '<input id="q" type="search" placeholder="Search by topic, form or section (e.g. GSTR-9, 44AD, SDD)" value="' + H.escapeHtml(state.q) + '"></label></div>' +
      '<div class="tabs" role="toolbar" aria-label="Filter by category">' +
      DOMAINS.map(function (d) { return '<button class="tab" type="button" data-d="' + d.id + '" aria-pressed="' + (state.domain === d.id) + '">' + d.label + "</button>"; }).join("") +
      '</div><p class="muted" id="count" style="margin:12px 0"></p><div class="grid grid-3" id="cards"></div></div></section>' +
      '<section class="section" id="updates" style="padding-top:0"><div class="wrap"><div class="section-head"><span class="eyebrow">Latest regulatory updates</span><h2>What changed recently</h2></div><div id="updates-list"></div></div></section>';

    var q = document.getElementById("q");
    q.addEventListener("input", function () { state.q = q.value.trim(); fill(); });
    app.querySelectorAll(".tab").forEach(function (b) {
      b.addEventListener("click", function () {
        state.domain = b.getAttribute("data-d");
        app.querySelectorAll(".tab").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        fill();
      });
    });
    fill();
    if (location.hash === "#updates") document.getElementById("updates").scrollIntoView();
  }

  function fill() {
    var list = articles().filter(matches);
    document.getElementById("cards").innerHTML = list.length ? list.map(cardHtml).join("") : '<div class="empty card">No articles match. Try a different word or category.</div>';
    document.getElementById("count").textContent = list.length + (list.length === 1 ? " article" : " articles");
    var ups = (window.UPDATES || []).slice().sort(function (a, b) { return b.date.localeCompare(a.date); }).filter(matches);
    document.getElementById("updates-list").innerHTML = ups.length ? ups.map(updateHtml).join("") : '<p class="muted">No updates match the current filter.</p>';
  }

  function slug(s, used) {
    var base = s.toLowerCase().replace(/<[^>]+>/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60) || "section";
    var id = base, n = 2; while (used[id]) id = base + "-" + n++; used[id] = 1; return id;
  }

  function renderArticle(id) {
    var a = articles().find(function (x) { return x.id === id; });
    var app = document.getElementById("app");
    if (!a) {
      app.innerHTML = '<div class="wrap section"><h1>Article not found</h1><p><a href="news.html">Back to News &amp; Blogs</a></p></div>';
      return;
    }
    document.title = a.title + " | Compliance Community Hub";
    app.innerHTML =
      '<div class="wrap reader"><article class="reader-main">' +
      '<p><a href="news.html">&larr; All articles</a></p>' +
      '<header class="reader-head"><div class="meta"><span class="pill ' + a.domain + '">' + H.escapeHtml(a.domainLabel) + '</span><span class="pill">' + a.readTime + "</span></div>" +
      "<h1>" + H.escapeHtml(a.title) + "</h1>" +
      '<div class="meta"><span class="author-badge">' + H.escapeHtml(a.author) + '</span><span>Published <time datetime="' + a.date + '">' + H.formatDate(a.date) + "</time></span></div>" +
      '<div class="reader-actions"><button class="btn" type="button" id="copy-link">Copy link</button>' +
      '<button class="btn" type="button" onclick="window.print()">Print / Save PDF</button>' +
      '<button class="btn toc-toggle" type="button" id="toc-toggle" aria-expanded="false">Contents</button></div>' +
      '<p class="muted">' + H.escapeHtml(a.summary) + "</p></header>" +
      '<div class="article-body" id="body">' + a.body + "</div>" +
      '<p style="margin-top:24px"><span class="author-badge">' + H.escapeHtml(a.author) + '</span></p>' +
      '<div class="callout"><strong>Educational content.</strong> This guide explains the law in general terms and is not professional advice. Verify thresholds, rates and due dates against the latest notifications on the official portals cited above before acting.</div>' +
      '</article><nav class="toc" id="toc" aria-label="Table of contents"><h2>On this page</h2><ol id="toc-list"></ol></nav></div>';

    var body = document.getElementById("body"), used = {}, tocItems = [];
    body.querySelectorAll("h2").forEach(function (h) {
      h.id = slug(h.textContent, used);
      tocItems.push('<li><a href="#' + h.id + '" data-id="' + h.id + '">' + H.escapeHtml(h.textContent) + "</a></li>");
    });
    document.getElementById("toc-list").innerHTML = tocItems.join("");
    H.wrapTables(body);

    // In-page links: keep the router hash intact while scrolling to headings.
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

    // Highlight the section currently in view.
    if ("IntersectionObserver" in window) {
      var links = {}; document.querySelectorAll("#toc a").forEach(function (l) { links[l.getAttribute("data-id")] = l; });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            Object.keys(links).forEach(function (k) { links[k].classList.toggle("active", k === en.target.id); });
          }
        });
      }, { rootMargin: "-80px 0px -70% 0px" });
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
