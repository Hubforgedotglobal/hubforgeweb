/* HubForge navigation. No dependencies. */
(function () {
  "use strict";

  var toggle = document.getElementById("siteNavToggle");
  var menu = document.getElementById("siteNavMenu");
  if (!toggle || !menu) return;

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.classList.toggle("is-open", open);
  }

  toggle.addEventListener("click", function () {
    setOpen(!menu.classList.contains("is-open"));
  });

  menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setOpen(false);
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setOpen(false);
  });

  document.addEventListener("click", function (event) {
    if (!menu.classList.contains("is-open")) return;
    if (menu.contains(event.target) || toggle.contains(event.target)) return;
    setOpen(false);
  });
})();
