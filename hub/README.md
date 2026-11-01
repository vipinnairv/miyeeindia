# Compliance Community Hub

Free, original compliance education for India. Authored by Vipin.

A static website (no build step) with four modules:

| Page | Module |
| --- | --- |
| `news.html` | Regulatory News & Deep-Dive Blog Hub: search, category tabs, reading-time badges, regulatory updates feed, and a reader view with a sticky table of contents and copy-link button (`news.html#/article/<id>`) |
| `community.html` | Community Help: Public Awareness, Micro-Business (MSME) Empowerment and Student Study Zone tracks (`#awareness`, `#msme`, `#students`) |
| `support.html` | Support Our Community: contribution tiers, custom amount, payment placeholders and the mandatory non-80G disclosure |
| `gaushala.html` | Gaumata Raksha & Gaushala Initiative |

## Content

Articles live in `assets/data/articles-*.js` as one array, `window.ARTICLES`. Each object has
`id, domain, domainLabel, title, summary, author ("Authored by Vipin"), date, readTime, tags, body`.
Every body follows the same 7-part structure:

1. Statutory Overview and Legislative Intent
2. Applicability and Threshold Matrix
3. Step-by-Step Compliance and Filing Workflow
4. Statutory Due Dates and Frequency Table
5. Interest, Late Fees and Penal Consequences
6. Practical Audit Pitfalls and Best Practices
7. Statutory References and Official Sources

Regulatory updates are in `assets/data/updates.js`.

### Editorial rules
- No em dashes or en dashes anywhere.
- Every article and update shows "Authored by Vipin".
- Every article ends with a sources section citing Acts, Rules, notifications and portals.

### Adding an article
Push a new object into `window.ARTICLES` in the relevant domain file using the same 7 headings. The hub, search, tabs and reader pick it up automatically.

## Payments
Contribution and Gaushala support buttons are placeholders only. No payment details are configured and no money can be collected until real UPI or gateway details are added.

## Publishing
Enable GitHub Pages: Settings, Pages, Deploy from a branch, `main`, `/ (root)`.

## Disclaimer
Educational content only, not legal, tax or professional advice. Verify against the latest notifications on the official portals before acting.
