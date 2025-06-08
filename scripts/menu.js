const menuBtn = document.querySelector(".menu");
const navlinks = document.querySelector(".navlinks");

menuBtn.addEventListener("click", () => {
    navlinks.classList.toggle("active");
});