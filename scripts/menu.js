//The below variables store the elements needed for mobile menu panel triggering on the page
const menuBtn = document.querySelector(".menu-toggle-icon");
const navlinks = document.querySelector(".navlinks");
const copyright = document.querySelector(".copyright-year");
const wrapper = document.querySelector("nav");

//An event listener for a click event on the menu btn element to trigger navlinks active and inactive state on mobile and tablet devices
function menuToggle(eventElement, affectedElement) {
    eventElement.addEventListener("click", () => {
        affectedElement.classList.toggle("active");
        if (affectedElement.classList.contains("active")) {
            eventElement.classList.add("open");
            document.body.classList.add("no-scroll");
        } else {
            eventElement.classList.remove("open");
            document.body.classList.remove("no-scroll");
        }
    });
}
menuToggle(menuBtn, navlinks);

const eachLinks = document
    .querySelectorAll(".navlinks li a")
    .forEach((link) => {
        menuToggle(link, navlinks);
        preventPageReload(link, navlinks);
    });

//A function that prevents the browser auto reload when a navlink of the current page is clicked
function preventPageReload(link) {
    link.addEventListener("click", (event) => {
        if (link.href === window.location.href) {
            event.preventDefault();
            menuBtn.classList.remove("open");
        }
    });
}

//JS date object used to get cuurent year for footer copyright year
const currentDate = new Date();
const year = currentDate.getFullYear();
copyright.innerText = `${year}`;