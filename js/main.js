// ================================
// MOBILE MENU
// ================================

document.addEventListener("DOMContentLoaded", function () {
  // Get Menu Elements
  const menu = document.getElementById("mobile-menu")
  const openBtn = document.getElementById("menu-open")
  const closeBtn = document.getElementById("menu-close")
  const menuLinks = menu.querySelectorAll("[data-menu-link]")

  // A function to open the menu
  function openMenu() {
    menu.hidden = false // removes [hidden] so the overlay is visible
  }

  // A function to close the menu
  function closeMenu() {
    menu.hidden = true
    document.body.classList.remove("menu-open")
  }

  // Listen for open and close clicks
  openBtn.addEventListener("click", openMenu)
  closeBtn.addEventListener("click", closeMenu)

  // Close the menu when a menu link is clicked
  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  // Close menu when Escape key is pressed
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !menu.hidden) closeMenu()
  })
})

// ================================
// BOOKING FORM (CONTACT PAGE)
// ================================

// SELECT BUTTON TOGGLE
document.querySelectorAll(".select-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active")
  })
})

// COUNTER (+ / -)
document.querySelectorAll(".person").forEach((person) => {
  const countEl = person.querySelector(".count")
  const plus = person.querySelector(".plus")
  const minus = person.querySelector(".minus")

  if (!countEl || !plus || !minus) return

  plus.addEventListener("click", () => {
    countEl.textContent = parseInt(countEl.textContent) + 1
  })

  minus.addEventListener("click", () => {
    let current = parseInt(countEl.textContent)
    if (current > 0) {
      countEl.textContent = current - 1
    }
  })
})

// FORM SUBMIT → SHOW RESULT
const bookingForm = document.getElementById("bookingForm")
const result = document.getElementById("result")

if (bookingForm && result) {
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault()

    bookingForm.classList.add("hidden")
    result.classList.remove("hidden")
  })
}
