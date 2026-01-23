// ----------- HERO BACKGROUND FADE -----------
let heroIndex = 0;
const backgroundImages = [
  "assets/image1.png",
  "assets/image2.png",
  "assets/image3.png",
];
const heroSection = document.getElementById("hero");

function switchHeroBackground() {
  heroIndex = (heroIndex + 1) % backgroundImages.length;
  heroSection.style.backgroundImage = `url('${backgroundImages[heroIndex]}')`;
}
setInterval(switchHeroBackground, 5000);

// ----------- CARD CAROUSEL -----------
const products = [
  { name: "Pão Francês", image: "assets/products/image1.webp" },
  { name: "Pão Francês Integral", image: "assets/products/image2.webp" },
  { name: "Hot Dog", image: "assets/products/image3.webp" },
  { name: "Hamburger", image: "assets/products/image4.webp" },
  { name: "Broa de Milho", image: "assets/products/image5.webp" },
  { name: "Broa de Côco", image: "assets/products/image6.webp" },
  { name: "Brioche", image: "assets/products/image7.webp" },
  { name: "Brioche de Côco", image: "assets/products/image8.webp" },
];

const carousel = document.getElementById("carousel");
const cardsPerPage = 4;
let currentIndex = 0;

function createCards() {
  const duplicatedProducts = [...products, ...products];
  duplicatedProducts.forEach((product) => {
    const card = document.createElement("div");
    card.className = "w-full sm:w-1/2 md:w-1/4 flex-shrink-0 p-2";
    card.innerHTML = `
      <div class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
        <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-xl font-semibold mb-2">${product.name}</h3>
          <button class="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition">
            View Details
          </button>
        </div>
      </div>
    `;
    carousel.appendChild(card);
  });
}

function moveCarouselManually(newIndex) {
  const cardWidth = carousel.children[0].offsetWidth;
  currentIndex = newIndex;
  carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

  if (currentIndex >= products.length) {
    setTimeout(() => {
      carousel.style.transition = "none";
      currentIndex = 0;
      carousel.style.transform = `translateX(0px)`;
      void carousel.offsetWidth; // force reflow
      carousel.style.transition = "transform 0.7s ease-in-out";
    }, 700);
  }
}

function nextSlide() {
  moveCarouselManually(currentIndex + cardsPerPage);
}

function prevSlide() {
  currentIndex =
    (currentIndex - cardsPerPage + products.length) % products.length;
  moveCarouselManually(currentIndex);
}

document.addEventListener("DOMContentLoaded", () => {
  createCards();
});
