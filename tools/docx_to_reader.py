#!/usr/bin/env python3
"""Convert a .docx into read-only-in-browser reader pages (no download link).

Usage:
    python3 tools/docx_to_reader.py SOURCE.docx --slug gst-master-guide \
        --title "GST: The Professional's Master Guide" [--skip "Appendix"]

Output: read/<slug>/index.html (cover + contents), read/<slug>/NNN.html (one per H1),
        read/<slug>/img/*.webp (images, resized).

The source .docx is NOT copied into the site. Requires: pip install mammoth pillow.
Note: anything shown in a browser can still be captured by a determined reader. The
pages add friction only (no download link, copy/print/save shortcuts and the context
menu are blocked by assets/reader.js, and printing is hidden by CSS).
"""
import argparse
import html
import io
import re
import sys
from pathlib import Path

import mammoth
from PIL import Image

sys.path.insert(0, str(Path(__file__).resolve().parent))
from build_blog import shell  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent


def strip_tags(s):
    return html.unescape(re.sub(r"<[^>]+>", "", s)).strip()


def convert(src, out):
    img_dir = out / "img"
    counter = {"n": 0}

    def handle(image):
        with image.open() as fh:
            data = fh.read()
        im = Image.open(io.BytesIO(data))
        if im.mode not in ("RGB", "RGBA"):
            im = im.convert("RGBA" if "A" in im.mode else "RGB")
        im.thumbnail((1100, 1600))
        img_dir.mkdir(parents=True, exist_ok=True)
        counter["n"] += 1
        name = f"{counter['n']:03d}.webp"
        im.save(img_dir / name, quality=78, method=6)
        return {"src": f"img/{name}", "alt": ""}

    with open(src, "rb") as fh:
        result = mammoth.convert_to_html(fh, convert_image=mammoth.images.img_element(handle))
    return result.value


def split_chapters(doc_html, skip):
    parts = re.split(r"(?=<h1[ >])", doc_html)
    front = parts[0]
    chapters = []
    for p in parts[1:]:
        title = strip_tags(re.match(r"<h1[^>]*>(.*?)</h1>", p, re.S).group(1))
        if skip and any(s.lower() in title.lower() for s in skip):
            continue
        chapters.append({"title": title, "html": p})
    return front, chapters


def tidy(h):
    h = h.replace(" \u2014 ", " - ").replace("\u2014", "-")
    h = re.sub(r"<p>(\s|&nbsp;)*</p>", "", h)
    h = re.sub(r"(<table.*?</table>)", r'<div class="tbl">\1</div>', h, flags=re.S)
    return h


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("src")
    ap.add_argument("--slug", required=True)
    ap.add_argument("--title", required=True)
    ap.add_argument("--skip", action="append", default=[], help="skip chapters whose title contains this text")
    a = ap.parse_args()

    out = ROOT / "read" / a.slug
    if out.exists():
        for f in out.rglob("*"):
            if f.is_file():
                f.unlink()
    out.mkdir(parents=True, exist_ok=True)

    front, chapters = split_chapters(convert(a.src, out), a.skip)
    names = [f"{i + 1:03d}.html" for i in range(len(chapters))]

    # anchor id -> page, so internal links survive the split
    where = {}
    for name, ch in zip(names, chapters):
        for m in re.finditer(r'id="([^"]+)"', ch["html"]):
            where[m.group(1)] = name
    for m in re.finditer(r'id="([^"]+)"', front):
        where.setdefault(m.group(1), "index.html")

    def fix_links(h, current):
        def rep(m):
            target = where.get(m.group(1))
            if not target:
                return 'href="#"'
            return f'href="#{m.group(1)}"' if target == current else f'href="{target}#{m.group(1)}"'
        return re.sub(r'href="#([^"]+)"', rep, h)

    def toc(current):
        items = []
        for name, ch in zip(names, chapters):
            cur = ' aria-current="page"' if name == current else ""
            items.append(f'<li><a href="{name}"{cur}>{html.escape(ch["title"])}</a></li>')
        return "\n".join(items)

    title = html.escape(a.title)
    fine = ('<p class="fineprint">© Vipin Nair. This guide is for reading online only. Copying, downloading, '
            'printing and redistribution are not permitted. For study and general reference; not legal, tax or investment advice.</p>')
    crumbs = f'<p class="crumbs"><a href="../../library.html">Library</a> / <a href="index.html">{title}</a></p>'

    def page(current, inner, ptitle, desc):
        body = f'''<div class="reader" data-guard>
  <button class="toc-toggle" type="button" aria-expanded="false" aria-controls="toc">Contents</button>
  <aside class="toc" id="toc" aria-label="Contents">
    <p class="toc-title"><a href="index.html">{title}</a></p>
    <ol>
{toc(current)}
    </ol>
  </aside>
  <article class="doc">
{inner}
{fine}
  </article>
</div>
<script src="../../assets/reader.js"></script>'''
        return shell("../../", "library.html", f"{ptitle} | {a.title} | MiyeeIndia Tech Labs", desc, body)

    # cover / index
    cover = tidy(fix_links(front, "index.html"))
    start = f'<p><a class="btn btn-primary" href="{names[0]}">Start reading</a></p>' if names else ""
    (out / "index.html").write_text(
        page("index.html", f'{crumbs}\n<div class="cover">{cover}</div>\n{start}', a.title,
             f"Read {a.title} online. Reading only; downloads are not available."),
        encoding="utf-8")

    for i, (name, ch) in enumerate(zip(names, chapters)):
        prev = f'<a href="{names[i - 1]}">← {html.escape(chapters[i - 1]["title"])}</a>' if i else "<span></span>"
        nxt = (f'<a href="{names[i + 1]}">{html.escape(chapters[i + 1]["title"])} →</a>'
               if i + 1 < len(names) else "<span></span>")
        inner = f'{crumbs}\n{tidy(fix_links(ch["html"], name))}\n<nav class="pager" aria-label="Chapter navigation">{prev}{nxt}</nav>'
        (out / name).write_text(
            page(name, inner, ch["title"], f'{ch["title"]} from {a.title}. Reading only.'), encoding="utf-8")

    print(f"{a.slug}: {len(chapters)} chapter page(s), {len(list((out / 'img').glob('*'))) if (out / 'img').exists() else 0} image(s)")


if __name__ == "__main__":
    main()
