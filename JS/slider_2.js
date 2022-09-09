"use strict";
//
const photoCol = document.querySelector(".carousel");
const photos = document.querySelectorAll(".carousel-photo");
const items = document.querySelectorAll(".block");

let width = 88; // ширина li в котором картинка
let list = document.querySelector(".photo-collection-carousel");
let position = 0; // положение ленты прокрутки

photoCol.addEventListener("click", (e) => {
  let currentClick = e.target;
  let itemDataAtt = currentClick.getAttribute("data-about");
  let currentTab = document.querySelector(itemDataAtt);
  //   ----Назад----
  if (currentClick.classList.contains("arrow-back")) {
    if (position === 0) {
      position = -440;
    }
    position += width;
    list.style.marginLeft = position + "px";
  }
  //   ----Вперед----
  if (currentClick.classList.contains("arrow-next")) {
    if (position === -352) {
      position = 88;
    }
    position -= width;
    list.style.marginLeft = position + "px";
  }
  //   ----по картинке----
  if (
    !currentClick.classList.contains("active") &&
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

  currentClick.classList.add("active");
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
