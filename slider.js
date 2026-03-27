const slides = document.querySelectorAll(".about-image .slider");
let current = 0;

setInterval(() => {
  slides[current].classList.remove("active"); // l'image actuelle disparaît
  current = (current + 1) % slides.length;     // passe à la suivante
  slides[current].classList.add("active");    // la nouvelle image apparaît avec fondu
}, 4000);
