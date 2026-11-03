/* Behaviour for the static guide pages in /guides: table of contents with
   scroll highlighting, copy link and the mobile contents toggle. */
(function () {
  var body = document.getElementById("body");
  var toc = document.getElementById("toc");
  if (!body || !toc) return;

  // Scroll to headings without following the <base> URL.
  toc.addEventListener("click", function (e) {
    var link = e.target.closest("a[data-id]"); if (!link) return;
    e.preventDefault();
    var target = document.getElementById(link.getAttribute("data-id"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
    toc.classList.remove("open");
  });

  var tt = document.getElementById("toc-toggle");
  if (tt) tt.addEventListener("click", function () {
    var open = toc.classList.toggle("open");
    tt.setAttribute("aria-expanded", open ? "true" : "false");
  });

  var copy = document.getElementById("copy-link");
  if (copy) copy.addEventListener("click", function () {
    var url = document.querySelector('link[rel="canonical"]');
    window.CCH.copyText(url ? url.href : location.href.split("#")[0]);
  });

  if ("IntersectionObserver" in window) {
    var links = {};
    toc.querySelectorAll("a[data-id]").forEach(function (l) { links[l.getAttribute("data-id")] = l; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) Object.keys(links).forEach(function (k) { links[k].classList.toggle("active", k === en.target.id); });
      });
    }, { rootMargin: "-90px 0px -70% 0px" });
    body.querySelectorAll("h2[id]").forEach(function (h) { io.observe(h); });
  }
})();
