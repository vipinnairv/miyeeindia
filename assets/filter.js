/* Apps / Tools category filter. Buttons carry data-filter; cards carry data-category. */
(function () {
  var bar = document.querySelector(".filter-bar");
  var grid = document.getElementById("app-grid");
  if (!bar || !grid) return;
  var status = document.getElementById("filter-status");
  var cards = grid.querySelectorAll(".card[data-category]");
  bar.addEventListener("click", function (e) {
    var btn = e.target.closest(".filter-pill");
    if (!btn) return;
    var f = btn.getAttribute("data-filter");
    bar.querySelectorAll(".filter-pill").forEach(function (b) { b.setAttribute("aria-pressed", b === btn ? "true" : "false"); });
    var shown = 0;
    cards.forEach(function (c) {
      var on = f === "all" || c.getAttribute("data-category") === f;
      c.hidden = !on;
      if (on) shown++;
    });
    if (status) status.textContent = shown + (shown === 1 ? " app shown" : " apps shown");
  });
})();
