
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon"); // Fix the typo from "humburger" to "hamburger"
    
    menu.classList.toggle("open"); // Add quotes to "open"
    icon.classList.toggle("open"); // Add quotes to "open"
}
