#!/usr/bin/env node
/* Builds one static, crawlable HTML page per guide in /guides and rewrites
   sitemap.xml. Run after editing assets/data/articles-*.js:

     node tools/build-guides.js

   The generated files are committed; Cloudflare serves them as-is. */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const SITE = "https://miyeeindia.in";
const ctx = { window: {} };
vm.createContext(ctx);
for (const f of ["mca", "sebi", "gst", "income-tax", "labour"]) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, "assets/data/articles-" + f + ".js"), "utf8"), ctx);
}
const ARTICLES = ctx.window.ARTICLES.slice().sort((a, b) => b.date.localeCompare(a.date));

// Topic cover photos, reused from the News hub.
const hub = fs.readFileSync(path.join(ROOT, "assets/js/hub.js"), "utf8");
const COVERS = {};
for (const m of hub.matchAll(/"([a-z-]+)": "(assets\/img\/photos\/[^"]+)"/g)) COVERS[m[1]] = m[2];

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const slug = (s, used) => {
  const base = s.toLowerCase().replace(/<[^>]+>/g, "").replace(/&[a-z]+;/g, " ").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60) || "section";
  let id = base, n = 2; while (used[id]) id = base + "-" + n++; used[id] = 1; return id;
};
const fmtDate = (iso) => new Date(iso + "T00:00:00Z").toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
const plain = (html) => html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

const PERSON = { "@type": "Person", "@id": SITE + "/#vipin-nair", name: "Vipin Nair", url: SITE + "/" };

function page(a) {
  const used = {}; const toc = [];
  // Give every h2 an id and build the table of contents at build time.
  const body = a.body.replace(/<h2>([\s\S]*?)<\/h2>/g, (m, inner) => {
    const id = slug(inner, used); toc.push([id, plain(inner)]);
    return '<h2 id="' + id + '">' + inner + "</h2>";
  });
  const url = SITE + "/guides/" + a.id;
  const title = a.title + " | Vipin Nair";
  const desc = a.summary.length > 300 ? a.summary.slice(0, 297) + "..." : a.summary;
  const image = SITE + "/" + (COVERS[a.domain] || "assets/img/og-image.jpg");
  const related = ARTICLES.filter((x) => x.id !== a.id && x.domain === a.domain).concat(ARTICLES.filter((x) => x.domain !== a.domain)).slice(0, 3);
  const ld = [
    { "@context": "https://schema.org", "@type": "Article", headline: a.title.slice(0, 110), description: desc, image: [image],
      datePublished: a.date, dateModified: a.date, author: PERSON, publisher: PERSON, mainEntityOfPage: url,
      articleSection: a.domainLabel, keywords: (a.tags || []).join(", "), inLanguage: "en-IN", wordCount: plain(a.body).split(" ").length },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" },
      { "@type": "ListItem", position: 2, name: "News & Blogs", item: SITE + "/news" },
      { "@type": "ListItem", position: 3, name: a.title, item: url }] }
  ];
  return `<!DOCTYPE html>
<html lang="en-IN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<base href="../">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="${url}">
<meta name="author" content="Vipin Nair">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Vipin Nair">
<meta property="og:locale" content="en_IN">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${image}">
<meta property="article:published_time" content="${a.date}">
<meta property="article:author" content="Vipin Nair">
<meta property="article:section" content="${esc(a.domainLabel)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@vipinnairv">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${image}">
<link rel="icon" href="assets/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,500;8..60,600;8..60,700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/style.css">
<link rel="stylesheet" href="assets/css/site.css">
<script src="assets/theme.js"></script>
${ld.map((o) => '<script type="application/ld+json">' + JSON.stringify(o) + "</script>").join("\n")}
</head>
<body data-page="news">
<main id="main">
<div class="wrap art-layout"><article class="art-main">
<nav class="crumbs" aria-label="Breadcrumb"><a href="./">Home</a> <span aria-hidden="true">/</span> <a href="news">News &amp; Blogs</a> <span aria-hidden="true">/</span> <span>${esc(a.domainLabel)}</span></nav>
<header class="art-head"><div class="meta"><span class="pill ${a.domain}">${esc(a.domainLabel)}</span><span class="pill">${esc(a.readTime)}</span></div>
<h1 style="margin-top:14px">${esc(a.title)}</h1>
<div class="meta"><span class="author-badge"><img src="assets/img/vipin-nair.webp" alt="" width="26" height="26">${esc(a.author)}</span><span>Published <time datetime="${a.date}">${fmtDate(a.date)}</time></span></div>
<div class="art-actions"><button class="btn" type="button" id="copy-link">Copy link</button><button class="btn" type="button" onclick="window.print()">Print or save as PDF</button><button class="btn toc-btn" type="button" id="toc-toggle" aria-expanded="false">Contents</button></div>
<p class="muted">${esc(a.summary)}</p></header>
<div class="article-body" id="body">${body}</div>
<p style="margin-top:28px"><span class="author-badge"><img src="assets/img/vipin-nair.webp" alt="" width="26" height="26">${esc(a.author)}</span></p>
<div class="callout"><strong>Educational content.</strong> This guide explains the law in general terms and is not professional advice. Verify thresholds, rates and due dates against the latest notifications on the official portals cited above before acting.</div>
<section class="related" aria-label="Related guides"><h2>Related guides</h2><div class="grid grid-3">
${related.map((r) => `<a class="card article-card" href="guides/${r.id}"><div class="body"><div class="meta"><span class="pill ${r.domain}">${esc(r.domainLabel)}</span><span class="pill">${esc(r.readTime)}</span></div><h3>${esc(r.title)}</h3></div></a>`).join("\n")}
</div></section>
</article><nav class="art-toc" id="toc" aria-label="Table of contents"><h2>On this page</h2><ol>
${toc.map(([id, t]) => `<li><a href="#${id}" data-id="${id}">${esc(t)}</a></li>`).join("\n")}
</ol></nav></div>
</main>
<script src="assets/js/site.js"></script>
<script src="assets/js/article.js"></script>
</body>
</html>
`;
}

fs.mkdirSync(path.join(ROOT, "guides"), { recursive: true });
for (const a of ARTICLES) fs.writeFileSync(path.join(ROOT, "guides", a.id + ".html"), page(a));

// Sitemap: main pages plus every guide.
const today = new Date().toISOString().slice(0, 10);
const pages = [["/", "1.0"], ["/news", "0.9"], ["/community", "0.7"], ["/support", "0.5"], ["/gaushala", "0.5"], ["/disclaimer", "0.4"], ["/privacy", "0.3"]];
const urls = pages.map(([p, pr]) => `  <url><loc>${SITE}${p}</loc><lastmod>${today}</lastmod><priority>${pr}</priority></url>`)
  .concat(ARTICLES.map((a) => `  <url><loc>${SITE}/guides/${a.id}</loc><lastmod>${a.date}</lastmod><priority>0.8</priority></url>`));
fs.writeFileSync(path.join(ROOT, "sitemap.xml"), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls.join("\n") + "\n</urlset>\n");
console.log("Built " + ARTICLES.length + " guide pages and sitemap.xml with " + urls.length + " URLs");
