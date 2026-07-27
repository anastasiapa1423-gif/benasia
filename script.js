(function () {
  var toggle = document.getElementById("navToggle");
  var nav = document.querySelector(".primary-nav");
  var navList = document.getElementById("primary-nav-list");

  if (!toggle || !nav || !navList) return;

  function closeNav() {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }

  function openNav() {
    toggle.setAttribute("aria-expanded", "true");
    nav.classList.add("is-open");
  }

  toggle.addEventListener("click", function () {
    var isOpen = toggle.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }
  });

  navList.addEventListener("click", function (event) {
    if (event.target.tagName === "A") closeNav();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeNav();
  });
})();
