const navigation = document.querySelector(".navgation");
const menuToggle = document.getElementById("menu-toggle");
const menuItems = document.getElementById("menu-items");
const menuLinks = document.querySelectorAll(".menu-link");
// const navBarList = document.querySelector(".listing-nav-bar");
// const ulList = document.querySelector(".ul-list");
// const btnHeart = document.querySelector(".btn-heart");
// const heart = document.querySelector(".heart");

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
      $(".nav-list").css("height", "5rem");
      $(".product-listing").addClass("top-20");
    } else {
      $(".listing-nav-bar").removeClass("fixed");
      $(".listing-nav-bar").removeClass("shadow-xl");
      $(".nav-list").css("height", "3rem");
      $(".product-listing").removeClass("top-20");
    }
  });
});

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
