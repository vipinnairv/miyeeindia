/* Theme + mobile menu. Loaded in <head> (no defer) so the theme applies before first paint. */
(function () {
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);
  } catch (e) {}

  function current() {
    var t = root.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  document.addEventListener("DOMContentLoaded", function () {
    var tbtn = document.getElementById("theme-toggle");
    if (tbtn) {
      var sync = function () {
        var light = current() === "light";
        tbtn.textContent = light ? "☾" : "☀";
        tbtn.setAttribute("aria-label", light ? "Switch to dark mode" : "Switch to light mode");
      };
      sync();
      tbtn.addEventListener("click", function () {
        var next = current() === "light" ? "dark" : "light";
        root.setAttribute("data-theme", next);
        try { localStorage.setItem("theme", next); } catch (e) {}
        sync();
      });
    }

    var mbtn = document.getElementById("menu-toggle");
    var links = document.getElementById("nav-links");
    if (mbtn && links) {
      mbtn.addEventListener("click", function () {
        var open = links.classList.toggle("open");
        mbtn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
  });
})();
