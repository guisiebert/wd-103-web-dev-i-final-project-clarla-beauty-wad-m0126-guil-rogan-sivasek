document.addEventListener("DOMContentLoaded", () => {
  const testButton = document.getElementById("test-js");
  if (testButton) {
    testButton.addEventListener("click", () => {
      alert("Hello, world!");
    });
  }

  const menu = document.getElementById("mobile-menu");
  const openBtn = document.getElementById("menu-open");
  const closeBtn = document.getElementById("menu-close");

  if (!menu || !openBtn || !closeBtn) return;

  const menuLinks = menu.querySelectorAll("[data-menu-link]");
  const mqDesktop = window.matchMedia("(min-width: 1280px)");

  function openMenu() {
    menu.hidden = false;
    openBtn.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
    closeBtn.focus();
  }

  function closeMenu() {
    menu.hidden = true;
    openBtn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
    openBtn.focus();
  }

  openBtn.addEventListener("click", openMenu);

  closeBtn.addEventListener("click", closeMenu);

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !menu.hidden) closeMenu();
  });

  function onViewportChange() {
    if (mqDesktop.matches && !menu.hidden) closeMenu();
  }

  if (typeof mqDesktop.addEventListener === "function") {
    mqDesktop.addEventListener("change", onViewportChange);
  } else if (typeof mqDesktop.addListener === "function") {
    mqDesktop.addListener(onViewportChange);
  }
});
