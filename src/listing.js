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
  if (window.scrollY > 71) {
    navBarList.classList.add("fixed");
    navBarList.classList.add("shadow-xl");
    $("#list").removeClass("after:bottom-3");
    $("#list").addClass("after:bottom-0");
    // $("#list").fadeOut();
  } else {
    navBarList.classList.remove("fixed");
    navBarList.classList.remove("shadow-xl");
    $("#list").removeClass("after:bottom-0");
    $("#list").addClass("after:bottom-3");
    // $("#list").fadeIn();
  }
};
