let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(n) {
  currentSlide = (n + totalSlides) % totalSlides; // Looping to the beginning if the end is reached
  const offset = -100 * currentSlide + '%';
  document.querySelector('.slide-container').style.transform = `translateX(${offset})`;
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.style.opacity = 1;
      slide.style.transform = 'translateY(0)';
    } else {
      slide.style.opacity = 0;
      slide.style.transform = 'translateY(20px)';
    }
  });
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

showSlide(0);
