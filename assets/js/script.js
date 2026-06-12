// AOS Init
AOS.init({
  duration: 800,
  once: true,
  offset: 80,
});

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

// Category filter pills
const categoryPills = document.getElementById("category-pills");
const artikelCards = document.querySelectorAll(".artikel-card");

const categories = new Set();
artikelCards.forEach((card) => {
  card.querySelectorAll(".kategori span").forEach((s) => categories.add(s.textContent));
});

categories.forEach((cat) => {
  const btn = document.createElement("button");
  btn.textContent = cat;
  btn.className = "px-4 py-1.5 rounded-lg text-sm font-heading font-semibold border border-accent/30 text-accent dark:text-bg dark:border-bg/30 cursor-pointer transition-all hover:bg-accent/10";
  btn.dataset.category = cat;
  btn.addEventListener("click", () => filterCategory(cat));
  categoryPills.appendChild(btn);
});

const semuaBtn = document.createElement("button");
semuaBtn.textContent = "Semua";
semuaBtn.className = "px-4 py-1.5 rounded-lg text-sm font-heading font-semibold border border-accent/30 text-accent dark:text-bg dark:border-bg/30 cursor-pointer transition-all hover:bg-accent/10 bg-accent text-bg";
semuaBtn.dataset.category = "all";
semuaBtn.addEventListener("click", () => filterCategory("all"));
categoryPills.prepend(semuaBtn);

function filterCategory(cat) {
  document.querySelectorAll("#category-pills button").forEach((b) => {
    b.classList.remove("bg-accent", "text-bg");
    b.classList.add("text-accent", "dark:text-bg", "dark:border-bg/30");
  });

  const active = cat === "all" ? semuaBtn : document.querySelector(`#category-pills button[data-category="${cat}"]`);
  if (active) {
    active.classList.remove("text-accent", "dark:text-bg", "dark:border-bg/30");
    active.classList.add("bg-accent", "text-bg");
  }

  artikelCards.forEach((card) => {
    const cats = [...card.querySelectorAll(".kategori span")].map((s) => s.textContent);
    card.classList.toggle("hidden", cat !== "all" && !cats.includes(cat));
  });
}

// Filter artikel berdasarkan input search
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();

  artikelCards.forEach((card) => {
    const title = card.querySelector("h1").textContent.toLowerCase();
    const categories = [...card.querySelectorAll(".kategori span")].map((s) => s.textContent.toLowerCase());
    const match = title.includes(query) || categories.some((cat) => cat.includes(query));
    card.classList.toggle("hidden", !match && query !== "");
  });
});

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
