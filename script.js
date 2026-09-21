(function () {
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("primaryNav");
  if (!toggle || !nav) return;

  function closeNav() {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }

  toggle.addEventListener("click", function () {
    var isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", isOpen ? "false" : "true");
    nav.classList.toggle("is-open", !isOpen);
  });

  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) closeNav();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeNav();
  });
})();

(function () {
  var header = document.getElementById("siteHeader");
  if (!header) return;

  function sync() {
    header.classList.toggle("is-stuck", window.scrollY > 24);
  }

  sync();
  window.addEventListener("scroll", sync, { passive: true });
})();

(function () {
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".process__tab"));
  var panels = Array.prototype.slice.call(document.querySelectorAll(".process__steps"));
  if (!tabs.length || !panels.length) return;

  function activate(phase) {
    tabs.forEach(function (tab) {
      var isActive = tab.dataset.phase === phase;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });
    panels.forEach(function (panel) {
      panel.hidden = panel.dataset.phase !== phase;
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      activate(tab.dataset.phase);
    });
  });
})();

(function () {
  var form = document.getElementById("contactForm");
  var status = document.getElementById("contactFormStatus");
  if (!form || !status) return;

  // Static site with no backend yet — this only confirms client-side validation
  // until a real submission endpoint is wired up.
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;
    status.textContent = "Thanks! (Form isn't wired to send anywhere yet.)";
    form.reset();
  });
})();

(function () {
  if (!("IntersectionObserver" in window)) return;

  var targets = document.querySelectorAll(
    ".hero__content, .hero__aside, .stat, .pitch__title, .pitch-row, .process__intro, .process__panel, .projects__title, .projects__item, .testimonial__quote, .testimonial__attribution, .footer-cta__inner"
  );

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px" }
  );

  targets.forEach(function (el, index) {
    el.classList.add("reveal");
    el.style.transitionDelay = (index % 4) * 70 + "ms";
    observer.observe(el);
  });
})();

(function () {
  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
