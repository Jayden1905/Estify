const navLink = document.querySelector(".nav-link");

navLink.addEventListener("click", () => {
  navLink.classList.toggle("nav-link-active");
  console.log("Clicked");
});
