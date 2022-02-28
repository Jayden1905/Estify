const menuToggle = document.querySelector(".menu-toggle");
const menuItems = document.querySelector(".menu-items");
const menuLinks = document.querySelectorAll(".menu-link");
const tabs = document.querySelectorAll("[data-tab-target]");
const search = document.querySelector(".search");
const searchText = document.querySelector(".search-text");

menuToggle.addEventListener("click", () => {
  menuItems.classList.toggle("hidden");
});

menuLinks.forEach((n) =>
  n.addEventListener("click", () => {
    menuItems.classList.add("hidden");
  })
);

search.addEventListener("click", () => {
  searchText.classList.toggle("hidden");
});
