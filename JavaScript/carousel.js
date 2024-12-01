let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(n) {
  const slides = Array.from(document.querySelectorAll('.slide')).filter(slide => slide.style.display !== 'none');
  const totalSlides = slides.length;
  currentSlide = (n + totalSlides) % totalSlides;
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

function filterProjects(category) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach(slide => {
      const slideCategory = slide.getAttribute('data-category');
      if (category === 'all' || slideCategory === category) {
          slide.style.display = 'block';
      } else {
          slide.style.display = 'none';
      }
  });
  showSlide(0); // Reset to the first slide
}


function prevSlide() {
  showSlide(currentSlide - 1);
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

showSlide(0);
