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

window.onload = () => {
    const textElement = document.querySelector('.fade-in-text');
    const text = textElement.innerText;
    textElement.innerHTML = ''; // Clear the existing text
  
    // Split the text into individual letters and wrap them in <span> tags
    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
  
      // If it's a space, we still want to add it but handle the animation differently.
      if (char === ' ') {
        span.innerHTML = '&nbsp;'; // Use a non-breaking space to preserve the space
        span.style.display = 'inline-block'; // Ensure it behaves like other characters
        span.style.animation = 'none'; // No animation for space
      } else {
        span.innerText = char;
        span.style.animationDelay = `${index * 0.1}s`; // Delay each letter's animation
      }
  
      textElement.appendChild(span);
    });
  };
  