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
let cardWidth = cards[0].getBoundingClientRect().width;

let currentIndex = 1; // Starting at the 2nd card

updateCarouselPosition();

function updateCarouselPosition() {
  const moveValue = -(cardWidth + 10) * currentIndex;
  track.style.transform = `translateX(${moveValue}px)`;
}

nextButton.addEventListener("click", function () {
  cardWidth = cards[0].getBoundingClientRect().width; // Update cardWidth
  if (currentIndex < cards.length - 1) {
    currentIndex++;
  }
  updateCarouselPosition();
});

prevButton.addEventListener("click", function () {
  cardWidth = cards[0].getBoundingClientRect().width; // Update cardWidth
  if (currentIndex > 0) {
    currentIndex--;
  }
  updateCarouselPosition();
});

//TABS 
//WHO WE HELP TABS
document.getElementById('woman-button').addEventListener('click', function() {
  this.classList.remove('text-white');
  this.classList.add('bg-white', 'text-[#3c4bbe]');
  document.getElementById('man-button').classList.remove('bg-white', 'text-[#3c4bbe]');
  document.getElementById('man-button').classList.add('text-white')
  document.getElementById('woman-card').style.display = 'block';
  document.getElementById('man-card').style.display = 'none';
});

document.getElementById('man-button').addEventListener('click', function() {
  this.classList.add('bg-white', 'text-[#3c4bbe]');
  this.classList.remove('text-white');
  document.getElementById('woman-button').classList.remove('bg-white', 'text-[#3c4bbe]');
  document.getElementById('woman-button').classList.add('text-white');
  document.getElementById('woman-card').style.display = 'none';
  document.getElementById('man-card').style.display = 'block';
});
//HOW CAN WE HELP TANS
//HOW CAN WE HELP TABS
document.getElementById('monalisa-button').addEventListener('click', function() {
  this.classList.add('bg-[#3c4bbe]', 'text-white');
  document.getElementById('viasure-button').classList.remove('bg-[#3c4bbe]', 'text-white');
  document.getElementById('viasure-button').classList.add('text-[#3c4bbe]');

  document.getElementById('monalisa-card').style.display = 'block';
  document.getElementById('viasure-card').style.display = 'none';
});

document.getElementById('viasure-button').addEventListener('click', function() {
  this.classList.add('bg-[#3c4bbe]', 'text-white');
  document.getElementById('monalisa-button').classList.remove('bg-[#3c4bbe]', 'text-white');
  document.getElementById('monalisa-button').classList.add('text-[#3c4bbe]');
  document.getElementById('monalisa-card').style.display = 'none';
  document.getElementById('viasure-card').style.display = 'block';
});

document.getElementById('vancouver-button').addEventListener('click', function() {
  document.getElementById('toronto-location').style.display = 'none';
  document.getElementById('toronto-button').classList.remove('bg-[#3c4bbe]', 'text-white');
  document.getElementById('toronto-button').classList.add('text-[#3c4bbe]', 'border-[#3c4bbe]');
  document.getElementById('toronto-button').style.backgroundColor = 'transparent';
  this.classList.add('bg-[#3c4bbe]', 'text-white');
  this.classList.remove('text-[#3c4bbe]', 'border-[#3c4bbe]');
  this.style.backgroundColor = '#3c4bbe'; // change background color to #3c4bbe
  document.getElementById('vancouver-location').style.display = 'flex';
});

document.getElementById('toronto-button').addEventListener('click', function() {
  this.classList.add('bg-[#3c4bbe]', 'text-white');
  this.classList.remove('text-[#3c4bbe]', 'border-[#3c4bbe]');
  this.style.backgroundColor = '#3c4bbe'; // change background color to #3c4bbe
  document.getElementById('vancouver-button').classList.remove('bg-[#3c4bbe]', 'text-white');
  document.getElementById('vancouver-button').classList.add('text-[#3c4bbe]', 'border-[#3c4bbe]');
  document.getElementById('vancouver-button').style.backgroundColor = 'transparent';
  document.getElementById('toronto-location').style.display = 'flex';
  document.getElementById('vancouver-location').style.display = 'none';
});

function toggleDropdown() {
  var dropdownMenu = document.getElementById("dropdown-menu");
  if (dropdownMenu.style.display === "none") {
    dropdownMenu.style.display = "block";
  } else {
    dropdownMenu.style.display = "none";
  }
}
