function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hidden");
}

document.addEventListener("click", function (event) {
  const menu = document.querySelector(".menu");
  const toggleButton = document.querySelector('.flex[onclick="toggleMenu()"]');

  if (
    !menu.contains(event.target) &&
    !toggleButton.contains(event.target) &&
    !menu.classList.contains("hidden")
  ) {
    menu.classList.add("hidden");
  }
});

document.querySelector(".menu").addEventListener("click", function (event) {
  event.stopPropagation();
});

document
  .querySelector('.flex[onclick="toggleMenu()"]')
  .addEventListener("click", function (event) {
    event.stopPropagation();
  });

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

const track = document.querySelector(".carousel-track");
const cards = Array.from(track.children);
const nextButton = document.getElementById("nextBtn");
const prevButton = document.getElementById("prevBtn");
const cardWidth = cards[0].getBoundingClientRect().width;

let currentIndex = 0; // Starting at the 2nd card

updateCarouselPosition();

function updateCarouselPosition() {
  const moveValue = -(cardWidth + 5) * currentIndex;
  track.style.transform = `translateX(${moveValue}px)`;
}

nextButton.addEventListener("click", function () {
  // Ensure we don't go beyond the 3rd card for the leftmost position
  if (currentIndex < cards.length - 3) {
    currentIndex++;
  }
  updateCarouselPosition();
});

prevButton.addEventListener("click", function () {
  // Ensure we don't go before the 1st card for the leftmost position
  if (currentIndex > -1) {
    currentIndex--;
  }
  updateCarouselPosition();
});
