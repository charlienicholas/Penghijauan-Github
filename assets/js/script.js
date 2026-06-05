// Mobile Hamburger Menu Logic
const sideMenu = document.getElementById("side-menu");
const openBtn = document.getElementById("menu-open");
const closeBtn = document.getElementById("menu-close");

function toggleMenu() {
  sideMenu.classList.toggle("translate-x-full");
}

[openBtn, closeBtn].forEach((el) => el.addEventListener("click", toggleMenu));