//The below variables store the elements needed for mobile menu panel triggering on the page
const menuBtn = document.querySelector(".menu-toggle-icon");
const navlinks = document.querySelector(".navlinks");
const copyright = document.querySelector(".copyright-year");
const bodyElementTag = document.body;
const mainElementTag = document.querySelector("main");

//A function that takes html element as an argument, listen for a click event on the element to trigger navlinks active and inactive state on mobile and tablet devices
function menuAndLinkToggle(toggleElement, affectedElement) {
  toggleElement.addEventListener("click", () => {
    if (!affectedElement.classList.contains("active")) {
      affectedElement.classList.add("active");
      menuBtn.src = "icons/close-svgrepo-new.svg";
      bodyElementTag.classList.add("no-scroll");
    } else {
      affectedElement.classList.remove("active");
      menuBtn.src = "icons/menu (2).svg";
      bodyElementTag.classList.remove("no-scroll");
    }
  });
}
menuAndLinkToggle(menuBtn, navlinks);

//An iterated event listener that toggles in-ativity of the menu panel when active on mobile and tab devices
const eachLinks = document
  .querySelectorAll(".navlinks li a")
  .forEach((link) => {
    menuAndLinkToggle(link, navlinks);
  });

//JS date object used to get cuurent year for footer copyright year
const currentDate = new Date();
const year = currentDate.getFullYear();
copyright.innerText = `${year}`;
console.log(copyright.innerText);
console.log(copyright);
