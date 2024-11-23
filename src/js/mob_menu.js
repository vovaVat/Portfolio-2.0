const menuBtn = document.querySelector(".menu-btm");
const mobMenu = document.querySelector(".mob-menu");
const mobMenuClose = document.querySelector(".mob-menu-close");
const mobMenuItems = document.querySelectorAll(".mob-nav");
const header = document.querySelector(".page-header");
const main = document.querySelector("main");
const footer = document.querySelector("footer")

menuBtn.addEventListener("click", onMenu);

function onMenu() {
  mobMenu.classList.add("active");
    header.classList.add("hidden");
    main.classList.add("hidden");
    footer.classList.add("hidden");
}

mobMenuClose.addEventListener("click", closeMenu);

function closeMenu() {
       mobMenu.classList.remove("active");
    header.classList.remove("hidden");
    main.classList.remove("hidden");
    footer.classList.remove("hidden");
}



mobMenuItems.forEach(item => 
    item.addEventListener("click", closeMenu));