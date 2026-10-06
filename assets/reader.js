/* Reading-only guard for guide pages. Adds friction only: anything shown in a browser can
   still be captured by a determined reader (screenshots, developer tools). */
(function () {
  var root = document.querySelector("[data-guard]");
  if (!root) return;

  function block(e) { e.preventDefault(); }
  ["contextmenu", "copy", "cut", "dragstart", "selectstart"].forEach(function (t) {
    document.addEventListener(t, block);
  });

  document.addEventListener("keydown", function (e) {
    var k = (e.key || "").toLowerCase();
    if ((e.ctrlKey || e.metaKey) && ["s", "p", "c", "x", "a", "u"].indexOf(k) !== -1) e.preventDefault();
    if (k === "printscreen" && navigator.clipboard) {
      try { navigator.clipboard.writeText(""); } catch (err) {}
    }
  });

  var btn = document.querySelector(".toc-toggle");
  var toc = document.getElementById("toc");
  if (btn && toc) {
    btn.addEventListener("click", function () {
      var open = toc.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    var cur = toc.querySelector('[aria-current="page"]');
    if (cur) toc.scrollTop = Math.max(0, cur.offsetTop - 120);
  }
})();
