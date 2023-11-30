const hamburgerMenuIcon = document.getElementById("hamburgerMenuIcon");
const closeMenuIcon = document.getElementById("closeMenuIcon");
const overlayMenuClick = document.getElementById("overlay-menu");
const overlayMenu = document.querySelector(".overlay-menu");
const mobileMenuWrapper = document.querySelector(
    ".mobile-menu-wrapper"
);

closeMenuIcon.addEventListener("click", () => {
    closeMenu();
});

overlayMenuClick.addEventListener("click", () => {
    closeMenu();
});

hamburgerMenuIcon.addEventListener("click", () => {
    overlayMenu.classList.add("active-overlay");
    mobileMenuWrapper.classList.add("active-menu");
});

function closeMenu() {
    overlayMenu.classList.remove("active-overlay");
    mobileMenuWrapper.classList.remove("active-menu");
}

