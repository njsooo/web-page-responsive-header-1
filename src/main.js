const btnToggleMobileNav = document.querySelector(".btn-toggle-mobile-nav");
const elCollapse = document.querySelector(".collapse");

btnToggleMobileNav.addEventListener("click", () => {
  if (elCollapse.style.maxHeight) {
    elCollapse.style.maxHeight = null;
  } else {
    elCollapse.style.maxHeight = elCollapse.scrollHeight + "px";
  }
});
