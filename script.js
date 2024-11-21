// script.js
window.onload = function () {
    const tl = gsap.timeline();
  
    // Fade in the logo and tagline
    tl.to("#logo-container", { duration: 1, opacity: 1, y: -20 });
  
    // Slide up and reveal each category
    tl.to("#categories", { duration: 1, opacity: 1 }, "+=0.5");
    tl.to("#indus-gold", { duration: 1, opacity: 1, y: -20 }, "-=0.8");
    tl.to("#indus-lite", { duration: 1, opacity: 1, y: -20 }, "-=0.6");
    tl.to("#indus-safety", { duration: 1, opacity: 1, y: -20 }, "-=0.4");
    tl.to("#indus-prime", { duration: 1, opacity: 1, y: -20 }, "-=0.2");
  
    // Fade in the "Enter the Portal" button
    tl.to("#enter-portal", { duration: 1, opacity: 1 }, "+=0.5");
  };
  