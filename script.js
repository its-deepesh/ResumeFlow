const yearEl = document.querySelector("#year");
yearEl.textContent = new Date().getFullYear();

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector("nav ul");
menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});