// grabbing hamburger button
const hamburger = document.getElementById("hamburger");

// grabbing nav menu
const navMenu = document.getElementById("nav-menu");

// grabbing all nav links inside menu
const navLinks = document.querySelectorAll("#nav-menu a");

// open and close mobile menu
hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");

  // update accessibility state
  const isExpanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", !isExpanded);
});

// close menu after clicking a nav link
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  });
});