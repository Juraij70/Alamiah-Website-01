// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const mainMenu = document.getElementById("main-menu");
const overlay = document.getElementById("menu-overlay");

function toggleMenu() {
  hamburger.classList.toggle("active");
  mainMenu.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.style.overflow = mainMenu.classList.contains("active")
    ? "hidden"
    : "";
}

function closeMenu() {
  hamburger.classList.remove("active");
  mainMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

// Toggle on hamburger click
hamburger.addEventListener("click", toggleMenu);

// Close on overlay click
overlay.addEventListener("click", closeMenu);

// Close on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

// Close when a menu link is clicked
document.querySelectorAll(".main-menu li a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});
