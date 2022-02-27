const menuToggle = document.querySelector(".menu-toggle");
const menuItems = document.querySelector(".menu-items");
const menuLinks = document.querySelectorAll(".menu-link");

menuToggle.addEventListener("click", () => {
  menuItems.classList.toggle("hidden");
});

menuLinks.forEach((n) =>
  n.addEventListener("click", () => {
    menuItems.classList.add("hidden");
  })
);
