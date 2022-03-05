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
  const yourHeader = $(".listing-navigation").height();

  $(window).scroll(function () {
    if ($(this).scrollTop() > yourHeader) {
      $(".listing-nav-bar").addClass("fixed");
      $(".listing-nav-bar").addClass("shadow-xl");
      $(".nav-list").css("height", "6rem");
    } else {
      $(".listing-nav-bar").removeClass("fixed");
      $(".listing-nav-bar").removeClass("shadow-xl");
      $(".nav-list").css("height", "3rem");
    }
  });
});
