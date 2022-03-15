// Grab everything we need
const btn = document.querySelector("button.mobile-menu-toggler");
const menu = document.querySelector(".mobile-menu");

// Event listener
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
