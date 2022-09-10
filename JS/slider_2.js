"use strict";
//
const photoCol = document.querySelector(".carousel");
const photos = document.querySelectorAll(".carousel-photo");
let items = document.querySelectorAll(".block");

let width = 88; // ширина li в котором картинка
let list = document.querySelector(".photo-collection-carousel");
let position = 0; // положение ленты прокрутки

let firstPhoto = document.querySelector('[data-about="#text1"]');
let lastPhoto = document.querySelector('[data-about="#text8"]');

photoCol.addEventListener("click", (e) => {
  let currentClick = e.target;
  let itemDataAtt = currentClick.getAttribute("data-about");
  console.log(currentClick);
  let currentText = document.querySelector(itemDataAtt);
  console.log(itemDataAtt);

  if (currentClick.classList.contains("arrow-back")) {
  }

  if (currentClick.classList.contains("arrow-next")) {
  }
  //
  //
  if (
    !currentClick.classList.contains("active") &&
    currentClick.closest(".carousel-photo")
  ) {
    photos.forEach((item) => {
      item.classList.remove("active");
    });

    items.forEach((text) => {
      text.classList.remove("active");
    });

    document.querySelector(".main-photo").src = e.target.getAttribute("src");
  }

  if (currentClick.classList.contains("carousel-photo")) {
    currentClick.classList.add("active");
    currentText.classList.add("active");
  }
});
