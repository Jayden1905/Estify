const menuToggle = document.querySelector(".menu-toggle");
// const menuItems = document.querySelector(".menu-items");
// const btnSearch = document.getElementById("btn-search");
// const searchText = document.querySelector(".search-text");
//
// menuToggle.addEventListener("click", () => {
//   menuItems.classList.toggle("scale-0");
// });
//
// btnSearch.addEventListener("click", () => {
//   searchText.classList.toggle("hidden");
// });
$(document).ready(function () {
  if (menuToggle.contains(e.target)) {
    $("#menu-items").hasClass.toggle("scale-0");
  } else {
    $("#menu-items").hadClass.add("scale-0");
  }
});
