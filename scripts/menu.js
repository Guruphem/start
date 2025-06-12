const menuBtn = document.querySelector(".menu-toggle-icon");
const navlinks = document.querySelector(".navlinks");
const copyright = document.querySelector(".copyright-year");
const bodyElementTag = document.body;
const mainElementTag = document.querySelector("main");

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

const eachLinks = document
  .querySelectorAll(".navlinks li a")
  .forEach((link) => {
    menuAndLinkToggle(link, navlinks);
  });

const currentDate = new Date();
const year = currentDate.getFullYear();
copyright.innerText = `©${year}`;
