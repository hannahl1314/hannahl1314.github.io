//bars
const navSlide = () => {
    const bars = document.querySelector(".bars");
    const navbar = document.querySelector(".nav-bar");
    const navLinks = document.querySelectorAll(".nav-bar li");
    bars.onclick = () => {
        navbar.classList.toggle("nav-active");
        //bars animation
        bars.classList.toggle("toggle");
    }
}

window.onload = () => navSlide();

