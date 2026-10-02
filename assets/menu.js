// Opens and closes the menu drawer that small screens use. Plain JavaScript, no libraries.
(function () {
  var root = document.documentElement;
  var button = document.querySelector(".menu-btn");
  var drawer = document.getElementById("menu");
  var scrim = document.querySelector(".scrim");
  if (!button || !drawer || !scrim) return;
  var closeButton = drawer.querySelector(".menu-close");
  var small = window.matchMedia("(max-width: 860px)");

  function focusable() {
    return Array.prototype.slice.call(drawer.querySelectorAll("a[href], button:not([disabled])"));
  }

  function setOpen(open, restoreFocus) {
    root.classList.toggle("menu-open", open);
    button.setAttribute("aria-expanded", String(open));
    drawer.inert = !open;
    if (open) closeButton.focus();
    else if (restoreFocus) button.focus();
  }

  drawer.inert = true;
  button.addEventListener("click", function () { setOpen(!root.classList.contains("menu-open"), true); });
  closeButton.addEventListener("click", function () { setOpen(false, true); });
  scrim.addEventListener("click", function () { setOpen(false, true); });
  drawer.addEventListener("click", function (event) {
    if (event.target.closest("a[href]")) setOpen(false, false);
  });
  document.addEventListener("keydown", function (event) {
    if (!root.classList.contains("menu-open")) return;
    if (event.key === "Escape") { setOpen(false, true); return; }
    if (event.key !== "Tab") return;
    var items = focusable();
    var first = items[0];
    var last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
  small.addEventListener("change", function (event) { if (!event.matches) setOpen(false, false); });
})();
