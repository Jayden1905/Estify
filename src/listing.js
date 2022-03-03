const navigation = document.querySelector(".navgation");
const menuToggle = document.getElementById("menu-toggle");
const menuItems = document.getElementById("menu-items");
const menuLinks = document.querySelectorAll(".menu-link");
const navBarList = document.querySelector(".listing-nav-bar");
const ulList = document.querySelector(".ul-list");

$(document).ready(function () {
  $(window).click(function (e) {
    if (menuToggle.contains(e.target)) {
      menuItems.classList.toggle("scale-0");
      e.preventDefault();
    } else {
      menuItems.classList.add("scale-0");
    }
    menuLinks.forEach((n) =>
      n.addEventListener("click", () => {
        menuItems.classList.add("scale-0");
        e.preventDefault();
      })
    );
  });
});

window.onscroll = () => {
  if (window.scrollY > 75) {
    navBarList.classList.add("fixed");
    navBarList.classList.add("shadow-xl");
    ulList.classList.remove("h-12");
    ulList.classList.add("h-20");
  } else {
    navBarList.classList.remove("fixed");
    navBarList.classList.remove("shadow-xl");
    ulList.classList.remove("fixed");
    ulList.classList.add("h-12");
  }
};
