let index = 0;
const carousel = document.getElementById('carousel');
const slides = carousel.children.length;

function updateCarousel() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % slides;
  updateCarousel();
}

function prevSlide() {
  index = (index - 1 + slides) % slides;
  updateCarousel();
}

setInterval(nextSlide, 5000);
