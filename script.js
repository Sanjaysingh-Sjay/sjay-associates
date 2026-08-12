const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");
const navLinks = document.querySelectorAll("#main-nav a");

menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
});

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        nav.classList.remove("active");
    });

});