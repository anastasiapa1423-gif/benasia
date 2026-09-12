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

(function () {
  var form = document.getElementById("contactForm");
  var status = document.getElementById("contactFormStatus");
  if (!form || !status) return;

  // NOTE: this is a static site with no backend, so there is nowhere for
  // this data to go yet. This just confirms the form works client-side
  // (validation, focus) until a real submission endpoint is wired up.
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;
    status.textContent = "Thanks! (Form isn't wired to send anywhere yet — ask Claude to connect it.)";
    form.reset();
  });
})();
