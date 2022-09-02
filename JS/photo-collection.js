"use strict";
let button = document.querySelector(".section-5-button");

button.addEventListener("click", () => {
  document
    .querySelector(".grid-section-5")
    .classList.replace("grid-section-5", "grid-section-5-more");
  button.style.visibility = "hidden";
});

const parentEl = document.querySelector(".section-5-tabs");
const items = document.querySelectorAll(".image-section-5");
const tabs = document.querySelectorAll(".tabs-section-5");

parentEl.addEventListener("click", (item) => {
  let someW = item.target;
  let currentItem = item.target.dataset.item;
  if (!someW.classList.contains("active")) {
    tabs.forEach(function (item) {
      item.classList.remove("active");
    });
    someW.classList.add("active");
  }

  switch (currentItem) {
    case "all":
      getImages("image-section-5");
      break;
    case "graphic-design":
      getImages(currentItem);
      break;
    case "web-design":
      getImages(currentItem);
      break;
    case "landing-pages":
      getImages(currentItem);
      break;
    case "wordpress":
      getImages(currentItem);
      break;
  }
});

function getImages(className) {
  items.forEach((item) => {
    if (item.classList.contains(className)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
