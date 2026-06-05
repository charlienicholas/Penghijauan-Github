// Mobile Hamburger Menu Logic
const sideMenu = document.getElementById("side-menu");
const openBtn = document.getElementById("menu-open");
const closeBtn = document.getElementById("menu-close");

function toggleMenu() {
  sideMenu.classList.toggle("translate-x-full");
}

[openBtn, closeBtn].forEach((el) => el.addEventListener("click", toggleMenu));

// Logika untuk toggle theme
const btnTheme = document.getElementById("theme-btn");

// Cek preferensi awal
if (localStorage.getItem("theme") === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

// Event Listener Klik
btnTheme.addEventListener("click", () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});
