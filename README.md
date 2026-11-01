# miyeeindia
Portfolio and resume website for Vipin Nair: Finance & Accounts professional, CA Inter, GST Practitioner.

A static single page (`index.html`). It uses the Miyee Tech Labs design system (`assets/style.css`, `assets/theme.js`), and portfolio-specific styles live in `assets/portfolio.css`.

- Light and dark themes, mobile-friendly
- **Download Resume** serves `assets/Vipin_Nair_Resume_2026.docx`
- **Print / Save as PDF** prints a clean resume layout

## Publish with GitHub Pages
Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`.
The site will be live at https://vipinnairv.github.io/miyeeindia/

## Compliance Community Hub
The same site also hosts the Compliance Community Hub, linked from the top menu:

| Page | What it is |
| --- | --- |
| `news.html` | News & Blogs: 14 seven-part regulatory articles (MCA, SEBI, GST, Income Tax, Labour) with search, category tabs and a reader view (`news.html#/article/<id>`), plus a regulatory updates feed |
| `community.html` | Community Help: Public Awareness, MSME and Student Study Zone tracks (`#awareness`, `#msme`, `#students`) |
| `support.html` | Support Us: voluntary contributions with the non-80G disclosure; payments are placeholders only |
| `gaushala.html` | Gaumata Raksha and Gaushala initiative |

Every page shares one theme: `assets/style.css` (design tokens), `assets/css/site.css` (shared components), `assets/theme.js` (light/dark and menu) and `assets/js/site.js` (common header and footer). `assets/portfolio.css` styles the portfolio page only. Article content lives in `assets/data/articles-*.js` (`window.ARTICLES`), updates in `assets/data/updates.js`, the hub logic in `assets/js/hub.js`, and illustrations in `assets/img/illustrations` and `assets/img/covers`. Every article shows "Authored by Vipin" and ends with a Statutory References and Official Sources section. No em dashes or en dashes are used.
