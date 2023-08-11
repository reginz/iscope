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
