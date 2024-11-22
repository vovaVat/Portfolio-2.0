const menuBtn = document.querySelector(".menu-btm");
const mobMenu = document.querySelector(".mob-menu");
const mobMenuClose = document.querySelector(".mob-menu-close");
const mobMenuItems = document.querySelectorAll(".mob-list-item");
const header = document.querySelector(".page-header");

menuBtn.addEventListener("click", () => {
    mobMenu.classList.add("active");
    header.classList.add("hidden");
    menuBtn.classList.add("hidden");
});

mobMenuClose.addEventListener("click", () => {
    mobMenu.classList.remove("active");
    header.classList.remove("hidden");
    menuBtn.classList.remove("hidden");
});