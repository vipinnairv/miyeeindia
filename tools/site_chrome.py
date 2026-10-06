"""Shared header/footer pieces for generated pages (blog, reader) and for
refreshing the hand-written pages. Keep in sync with assets/style.css."""

LINKEDIN = "https://www.linkedin.com/in/vipin-nair-22a789207/"
X_URL = "https://x.com/vipinnairv"
EMAIL = "miyee.india@gmail.com"

LI_SVG = ('<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>')
X_SVG = ('<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>')
MAIL_SVG = ('<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>')


def brand(prefix):
    return (f'<a class="brand" href="{prefix}index.html"><span class="logo-mark" aria-hidden="true">M</span>'
            f'<span class="brand-text">Miyee<span>India</span> Tech Labs</span></a>')


def footer(prefix, pages):
    links = "".join(f'<li><a href="{prefix}{f}">{n}</a></li>' for f, n in pages)
    return f'''<footer class="site-footer">
  <div class="wrap footer-grid">
    <div class="footer-brand">
      {brand(prefix)}
      <p>Free products and tools to help the MSME business community grow.</p>
      <p class="fineprint">A personal, non-commercial initiative by Vipin Nair. Views and content are personal and do not represent any employer.</p>
    </div>
    <nav class="footer-col" aria-label="Footer">
      <h2>Explore</h2>
      <ul>{links}</ul>
    </nav>
    <div class="footer-col">
      <h2>Connect</h2>
      <ul>
        <li><a href="mailto:{EMAIL}">{MAIL_SVG} {EMAIL}</a></li>
        <li><a href="{LINKEDIN}" target="_blank" rel="noopener noreferrer">{LI_SVG} LinkedIn</a></li>
        <li><a href="{X_URL}" target="_blank" rel="noopener noreferrer">{X_SVG} X (Twitter)</a></li>
        <li><a href="{prefix}contact.html">Contact page</a></li>
      </ul>
    </div>
  </div>
  <div class="wrap footer-bottom">
    <p>© 2026 Vipin Nair. All rights reserved.</p>
    <p>Free to use · No ads</p>
  </div>
</footer>'''
