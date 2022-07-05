const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-links-container");
const heroSection = document.querySelector(".hero-container");
const linkedin = document.querySelector(".fa-linkedin");
const github = document.querySelector(".fa-github");

menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

linkedin.addEventListener("click", () => {
  window.open(
    "https://linkedin.com/in/bongani-mokonotela-52196921b/",
    "_blank"
  );
});
github.addEventListener("click", () => {
  window.open("https://github.com/BonganiMokonotela", "_blank");
});
