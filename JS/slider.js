"use strict";
//
const photoCol = document.querySelector(".carousel");
const photos = document.querySelectorAll(".carousel-photo");
const items = document.querySelectorAll(".block");

let width = 88; // ширина li в котором картинка
let list = document.querySelector(".photo-collection-carousel");
let position = 0; // положение ленты прокрутки

photoCol.addEventListener("click", (e) => {
  let currentItem = e.target; // img
  let itemId = currentItem.getAttribute("data-about"); // #text
  let currentTab = document.querySelector(itemId); // текст персоны

  if (currentItem.classList.contains("arrow-back")) {
    if (position === 0) {
      position = -440;
    }
    position += width;
    list.style.marginLeft = position + "px";
  } else if (currentItem.classList.contains("arrow-next")) {
    if (position === -352) {
      position = 88;
    }
    position -= width;
    list.style.marginLeft = position + "px";
  }

  if (
    !currentItem.classList.contains("active") &&
    e.target.closest(".carousel-photo")
  ) {
    photos.forEach((item) => {
      item.classList.remove("active");
    });

    items.forEach((text) => {
      text.classList.remove("active");
    });

    document.querySelector(".main-photo").src = e.target.getAttribute("src");
  }

  currentItem.classList.add("active");
  currentTab.classList.add("active");
});

// document.querySelector(".arrow-back").addEventListener("click", () => {
//   if (position === 0) {
//     position = -440;
//   }
//   position += width;
//   list.style.marginLeft = position + "px";
// });

// document.querySelector(".arrow-next").addEventListener("click", () => {
//   if (position === -352) {
//     position = 88;
//   }
//   position -= width;
//   list.style.marginLeft = position + "px";
// });
