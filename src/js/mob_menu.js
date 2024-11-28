const menuBtn = document.querySelector(".menu-btm");
const mobMenu = document.querySelector(".mob-menu");
const mobMenuClose = document.querySelector(".mob-menu-close");
const mobMenuLink = document.querySelectorAll(".link a");
const header = document.querySelector(".page-header");
const main = document.querySelector("main");
const footer = document.querySelector("footer")

menuBtn.addEventListener("click", onMenu);

function onMenu() {
  mobMenu.classList.add("active");
  header.classList.add("hidden");
  main.classList.add("hidden");
  footer.classList.add("hidden");
  document.body.classList.add("no-scroll");

}

mobMenuClose.addEventListener("click", closeMenu);
mobMenuLink.forEach(item => item.addEventListener("click", closeMenu));

function closeMenu() {
  mobMenu.classList.remove("active");
  header.classList.remove("hidden");
  main.classList.remove("hidden");
  footer.classList.remove("hidden");
  document.body.classList.remove("no-scroll");
}

mobMenuLink.forEach(item => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = item.getAttribute("href").substring(1);
    smoothScroll(targetId);
    mobMenu.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });
});

function smoothScroll(targetId) {
  const element = document.getElementById(targetId);
  element.scrollIntoView({ behavior: "smooth" });
}

const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;

function saveTheme(theme) {
  localStorage.setItem("theme", theme);
}

function getSavedTheme() {
  return localStorage.getItem("theme");
}

function applyTheme(theme) {
  if (theme === "dark") {
    body.classList.add("dark");
    themeToggle.classList.add("theme-toggle-dark");
  } else {
    body.classList.remove("dark");
    themeToggle.classList.remove("theme-toggle-dark");
  }
}

const savedTheme = getSavedTheme();
if (savedTheme) {
  applyTheme(savedTheme);
}

const favicon = document.querySelector("link[rel='icon']");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeToggle.classList.toggle("theme-toggle-dark");
  const newTheme = body.classList.contains("dark") ? "dark" : "light";
  saveTheme(newTheme);
});