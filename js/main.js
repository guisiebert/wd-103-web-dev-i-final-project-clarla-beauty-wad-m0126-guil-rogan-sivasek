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
    document.body.classList.add("menu-open");
    closeBtn.focus();
  }

  function closeMenu() {
    menu.hidden = true;
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

// ================================
// BOOKING FORM (CONTACT PAGE)
// ================================

// SELECT BUTTON TOGGLE
document.querySelectorAll(".select-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
  });
});

// COUNTER (+ / -)
document.querySelectorAll(".person").forEach(person => {
  const countEl = person.querySelector(".count");
  const plus = person.querySelector(".plus");
  const minus = person.querySelector(".minus");

  if (!countEl || !plus || !minus) return;

  plus.addEventListener("click", () => {
    countEl.textContent = parseInt(countEl.textContent) + 1;
  });

  minus.addEventListener("click", () => {
    let current = parseInt(countEl.textContent);
    if (current > 0) {
      countEl.textContent = current - 1;
    }
  });
});

// FORM SUBMIT → SHOW RESULT
const bookingForm = document.getElementById("bookingForm");
const result = document.getElementById("result");

if (bookingForm && result) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    bookingForm.classList.add("hidden");
    result.classList.remove("hidden");
  });
}
