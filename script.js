// grabbing the hamburger button
const hamburger = document.getElementById("hamburger");

// grabbing the nav menu
const navMenu = document.getElementById("nav-menu");

// grabbing all nav links inside the menu
const navLinks = document.querySelectorAll("#nav-menu a");

// when user clicks hamburger
hamburger.addEventListener("click", function () {
  // show or hide mobile menu
  navMenu.classList.toggle("active");

  // animate hamburger into X
  hamburger.classList.toggle("active");

  // update accessibility state
  const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", !isExpanded);
});

// when user clicks any nav link
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    // close mobile menu after clicking link
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  });
});