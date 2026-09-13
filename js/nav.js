(function () {
  const toggle = document.querySelector(".nav-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  if (!toggle || !mobileNav) return;

  function closeMenu() {
    mobileNav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    mobileNav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  }

  toggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.contains("is-open");
    isOpen ? closeMenu() : openMenu();
  });

  // Close on link click (mobile nav navigates within the page)
  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close on Escape, return focus to toggle
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileNav.classList.contains("is-open")) {
      closeMenu();
      toggle.focus();
    }
  });

  // Close if viewport is resized past the mobile breakpoint
  const mq = window.matchMedia("(min-width: 901px)");
  mq.addEventListener("change", (e) => {
    if (e.matches) closeMenu();
  });
})();