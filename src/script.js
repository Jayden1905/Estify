const menuToggle = document.querySelector(".menu-toggle");
const menuItems = document.querySelector(".menu-items");
const menuLinks = document.querySelectorAll(".menu-link");
const tabs = document.querySelectorAll("[data-tab-target]");
const search = document.querySelector(".search");
const searchText = document.querySelector(".search-text");
const Location = document.querySelector(".location");
const inputLocation = document.getElementById("input-location");

window.addEventListener("click", function (e) {
  if (search.contains(e.target) || Location.contains(e.target)) {
    // Clicked in box
    searchText.classList.remove("hidden");
  } else {
    // Clicked outside the box
    searchText.classList.add("hidden");
  }
  if (menuToggle.contains(e.target)) {
    menuItems.classList.toggle("hidden");
  } else {
    menuItems.classList.add("hidden");
  }
});

menuLinks.forEach((n) =>
  n.addEventListener("click", () => {
    menuItems.classList.add("hidden");
  })
);

function fc() {
  inputLocation.focus();
}

function bl() {
  inputLocation.blur();
}
