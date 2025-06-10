let index = 0;
const carousel = document.getElementById('carousel');
const slides = carousel.children.length;

const bgImages = [
  "assets/image1.png",
  "assets/image2.png",
  "assets/image3.png"
];

const hero = document.getElementById("hero");

function switchBackground() {
  index = (index + 1) % bgImages.length;
  hero.style.backgroundImage = `url('${bgImages[index]}')`;
}

setInterval(switchBackground, 5000);



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
