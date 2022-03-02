const menuToggle = document.querySelector(".menu-toggle");
const menuItems = document.querySelector(".menu-items");
const menuLinks = document.querySelectorAll(".menu-link");
const search = document.querySelector(".search");
const searchText = document.querySelector(".search-text");
const Location = document.querySelector(".location");
const inputLocation = document.getElementById("input-location");
const guest = document.querySelector(".guest");

$(document).ready(function () {
  $("#text-search").attr("hidden", true);
  $(window).click(function (e) {
    if (
      search.contains(e.target) ||
      Location.contains(e.target) ||
      guest.contains(e.target)
    ) {
      // Clicked in box
      $("#text-search").show("fast");
    } else {
      // Clicked outside the box
      $("#text-search").hide("fast");
    }
    if (menuToggle.contains(e.target)) {
      menuItems.classList.toggle("scale-0");
    } else {
      menuItems.classList.add("scale-0");
    }
    e.preventDefault();

    $(window).load(function () {
      $("#text-search").setAttribute("hidden", true);
    });
  });

  menuLinks.forEach((n) =>
    n.addEventListener("click", () => {
      menuItems.classList.add("hidden");
    })
  );

  $(".search").click(function () {
    inputLocation.focus();
  });

  $(".search").blur(function () {
    inputLocation.blur();
  });

  $(".location").click(function () {
    inputLocation.focus();
  });

  $(".search").blur(function () {
    inputLocation.blur();
  });

  $(window).resize(function () {
    if ($(this).width() < 1024) {
      $(".divIWantedToHide").hide();
    } else {
      $(".divIWantedToHide").show();
    }
  });
});
