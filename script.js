//hamburger
const navSlide = () => {
    const hamburger = document.querySelector(".hamburger");
    const navbar = document.querySelector(".nav-bar");
    const navLinks = document.querySelectorAll(".nav-bar li");
    hamburger.onclick = () => {
        navbar.classList.toggle("nav-active");
        //hamburger animation
        hamburger.classList.toggle("toggle");
    }
}
