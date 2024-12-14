let currentIndex = 0;

function showSlides(index) {
  const slides = document.querySelectorAll(".review");
  const dots = document.querySelectorAll(".dot");

  // Handle index out of range
  if (index >= slides.length) currentIndex = 0;
  if (index < 0) currentIndex = slides.length - 1;

  // Hide all slides and remove active from dots
  slides.forEach((slide) => (slide.style.display = "none"));
  dots.forEach((dot) => dot.classList.remove("active"));

  // Show the current slide and activate the dot
  slides[currentIndex].style.display = "block";
  dots[currentIndex].classList.add("active");
}

function moveSlide(step) {
  currentIndex += step;
  showSlides(currentIndex);
}

function currentSlide(index) {
  currentIndex = index - 1;
  showSlides(currentIndex);
}

// Initialize the first slide
document.addEventListener("DOMContentLoaded", () => {
  showSlides(currentIndex);
});