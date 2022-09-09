"use strict";
//
const photoCol = document.querySelector(".carousel");
const photos = document.querySelectorAll(".carousel-photo");
const items = document.querySelectorAll(".block");

let width = 88; // ширина li в котором картинка
let list = document.querySelector(".photo-collection-carousel");
let position = 0; // положение ленты прокрутки

const firstPhoto = document.querySelector('[data-about="#text1"]');
const lastPhoto = document.querySelector('[data-about="#text8"]');

photoCol.addEventListener("click", (e) => {
  let currentClick = e.target;
  let itemDataAtt = currentClick.getAttribute("data-about");
  let currentText = document.querySelector(itemDataAtt);
  let currentPerson = document.querySelector(
    ".photo-collection-carousel .active"
  );
  //
  if (currentClick.classList.contains("arrow-back")) {
    if (firstPhoto.classList.contains("active")) {
      list.style.marginLeft = "-352px";
      firstPhoto.classList.remove("active");
      lastPhoto.classList.add("active");
    } else {
      currentPerson.parentElement.previousElementSibling
        .querySelector(".carousel-photo")
        .classList.add("active");

      currentPerson.classList.remove("active");
    }
  }

  if (currentClick.classList.contains("arrow-next")) {
    if (lastPhoto.classList.contains("active")) {
      list.style.marginLeft = "0";
      lastPhoto.classList.remove("active");
      firstPhoto.classList.add("active");
    } else {
      currentPerson.parentElement.nextElementSibling
        .querySelector(".carousel-photo")
        .classList.add("active");

      currentPerson.classList.remove("active");
    }
  }
  //
  //
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

  if (currentClick.classList.contains("carousel-photo")) {
    currentClick.classList.add("active");
    currentText.classList.add("active");
  }
});
