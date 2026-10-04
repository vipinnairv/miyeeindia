#!/usr/bin/env python3
"""Build the blog from Markdown files.

Usage:  python3 tools/build_blog.py

Reads blog/posts/*.md, writes blog/<slug>.html for each post and blog.html (the index).
Each post starts with front matter:

    ---
    title: Post title
    date: 2026-10-04
    tags: GST, Update
    summary: One or two sentences shown on the blog index.
    ---

Supported Markdown: ## / ### headings, paragraphs, - bullet lists, 1. numbered lists,
**bold**, *italic*, `code` and [links](url). Raw HTML is escaped.
Add a post = add a .md file, run this script, commit. Cloudflare Pages can also run it
as the build command (python3 tools/build_blog.py) so only the .md file needs committing.
"""
import html
import re
import sys
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
POSTS = ROOT / "blog" / "posts"
SITE = "MiyeeIndia Tech Labs"
PAGES = [("index.html", "Home"), ("products.html", "Products"), ("downloads.html", "Free Downloads"),
         ("blog.html", "Blog"), ("services.html", "Services"), ("about.html", "About Us"),
         ("contact.html", "Contact Us")]
ACCENTS = ["c-orange", "c-teal", "c-violet", "c-pink", "c-amber"]


def shell(prefix, current, title, desc, body):
    nav = "".join(
        '<li><a href="%s%s"%s>%s</a></li>' % (prefix, f, ' aria-current="page"' if f == current else "", n)
        for f, n in PAGES)
    foot = "".join(f'<a href="{prefix}{f}">{n}</a>' for f, n in PAGES)
    t, d = html.escape(title), html.escape(desc, quote=True)
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{t}</title>
<meta name="description" content="{d}">
<meta name="theme-color" content="#ffffff">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%23F26B21'/%3E%3Ctext x='16' y='23' font-size='20' font-weight='800' text-anchor='middle' fill='%23ffffff' font-family='sans-serif'%3EM%3C/text%3E%3C/svg%3E">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{prefix}assets/style.css">
<script src="{prefix}assets/theme.js"></script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="site-nav">
  <div class="wrap nav-inner">
    <a class="brand" href="{prefix}index.html">Miyee<span>India</span> Tech Labs</a>
    <nav class="nav-tools" aria-label="Main">
      <ul class="nav-links" id="nav-links">{nav}</ul>
      <button class="icon-btn" id="theme-toggle" type="button" aria-label="Toggle theme">☀</button>
      <button class="icon-btn menu-btn" id="menu-toggle" type="button" aria-label="Menu" aria-expanded="false" aria-controls="nav-links">☰</button>
    </nav>
  </div>
</header>
<main id="main">
{body}
</main>
<footer class="site-footer">
  <div class="wrap">
    <div class="links">{foot}</div>
    <p class="tagline">Free products and tools to help the MSME business community grow.</p>
    <p>Built by Vipin Nair · <a href="mailto:miyee.india@gmail.com">miyee.india@gmail.com</a></p>
  </div>
</footer>
</body>
</html>
'''


def inline(text):
    text = html.escape(text, quote=False)
    text = re.sub(r"`([^`]+)`", r"<code>\1</code>", text)
    text = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", text)
    text = re.sub(r"(?<!\*)\*([^*]+)\*(?!\*)", r"<em>\1</em>", text)

    def link(m):
        url = m.group(2)
        ext = url.startswith("http")
        attrs = ' target="_blank" rel="noopener noreferrer"' if ext else ""
        return f'<a href="{url}"{attrs}>{m.group(1)}</a>'

    return re.sub(r"\[([^\]]+)\]\(([^)\s]+)\)", link, text)


def render(md):
    out, para, items, kind = [], [], [], None

    def flush():
        nonlocal para, items, kind
        if para:
            out.append("<p>" + inline(" ".join(para)) + "</p>")
            para = []
        if items:
            out.append(f"<{kind}>" + "".join(f"<li>{inline(i)}</li>" for i in items) + f"</{kind}>")
            items, kind = [], None

    for line in md.splitlines():
        s = line.strip()
        if not s:
            flush()
        elif s.startswith("### "):
            flush(); out.append(f"<h3>{inline(s[4:])}</h3>")
        elif s.startswith("## "):
            flush(); out.append(f"<h2>{inline(s[3:])}</h2>")
        elif re.match(r"[-*] ", s):
            if kind != "ul": flush()
            kind = "ul"; items.append(s[2:])
        elif re.match(r"\d+\. ", s):
            if kind != "ol": flush()
            kind = "ol"; items.append(re.sub(r"^\d+\. ", "", s))
        else:
            if items: flush()
            para.append(s)
    flush()
    return "\n".join(out)


def parse(path):
    raw = path.read_text(encoding="utf-8")
    m = re.match(r"---\n(.*?)\n---\n(.*)", raw, re.S)
    if not m:
        sys.exit(f"{path.name}: missing front matter")
    meta = {k.strip(): v.strip() for k, v in (l.split(":", 1) for l in m.group(1).splitlines() if ":" in l)}
    for key in ("title", "date", "summary"):
        if key not in meta:
            sys.exit(f"{path.name}: front matter needs '{key}'")
    meta["slug"] = path.stem
    meta["tags"] = [t.strip() for t in meta.get("tags", "").split(",") if t.strip()]
    meta["date_obj"] = date.fromisoformat(meta["date"])
    meta["body"] = m.group(2)
    return meta


def pretty(d):
    return f"{d.day} {d.strftime('%B %Y')}"


def main():
    posts = sorted((parse(p) for p in POSTS.glob("*.md")), key=lambda p: p["date_obj"], reverse=True)
    out_dir = ROOT / "blog"
    for old in out_dir.glob("*.html"):
        old.unlink()

    cards = []
    for i, p in enumerate(posts):
        tags = " · ".join(p["tags"])
        meta = pretty(p["date_obj"]) + (f" · {tags}" if tags else "")
        body = f'''
<section class="section">
  <div class="wrap">
    <article class="article">
      <a class="back-link" href="../blog.html">← All posts</a>
      <p class="post-meta">{html.escape(meta)}</p>
      <h1>{html.escape(p["title"])}</h1>
      {render(p["body"])}
    </article>
  </div>
</section>'''
        (out_dir / f'{p["slug"]}.html').write_text(
            shell("../", "blog.html", f'{p["title"]} | {SITE}', p["summary"], body), encoding="utf-8")
        tag = html.escape(p["tags"][0]) if p["tags"] else "Update"
        cards.append(f'''    <article class="card post-card {ACCENTS[i % len(ACCENTS)]}">
      <span class="tag">{tag}</span>
      <h3><a href="blog/{p["slug"]}.html">{html.escape(p["title"])}</a></h3>
      <p class="post-meta">{pretty(p["date_obj"])}</p>
      <p>{html.escape(p["summary"])}</p>
      <span class="read-more" aria-hidden="true">Read more →</span>
    </article>''')

    listing = "\n".join(cards) if cards else '<p style="text-align:center;color:var(--muted)">No posts yet.</p>'
    index = f'''
<section class="page-head">
  <div class="wrap">
    <span class="badge">BLOG</span>
    <h1>News and <span style="color:var(--brand)">updates</span></h1>
    <p>Product updates, tax and compliance notes, and tips from MiyeeIndia Tech Labs.</p>
  </div>
</section>
<section class="section">
  <div class="wrap grid">
{listing}
  </div>
</section>'''
    (ROOT / "blog.html").write_text(
        shell("", "blog.html", f"Blog | {SITE}", "News, updates and notes from MiyeeIndia Tech Labs.", index), encoding="utf-8")
    print(f"Built {len(posts)} post(s) and blog.html")


if __name__ == "__main__":
    main()
