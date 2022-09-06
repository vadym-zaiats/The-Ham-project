"use strict";

let i = 1;
for (let li of carousel.querySelectorAll(".carousel-photo")) {
  li.style.position = "relative";
  li.insertAdjacentHTML(
    "beforeend",
    `<span style="position:absolute;left:0;top:0">${i}</span>`
  );
  i++;
}

/* конфигурация */
let width = 84; // ширина li в котором картинка
// let count = 1; // количество картинок по скроллу

let list = carousel.querySelector("ul");
let listElems = carousel.querySelectorAll("li");

let position = 0; // положение ленты прокрутки

carousel.querySelector(".arrow-back").onclick = function () {
  if (position === 0) {
    position = -420;
  }
  // сдвиг влево
  position += width;
  list.style.marginLeft = position + "px";
};

carousel.querySelector(".arrow-next").onclick = function () {
  if (position === -336) {
    position = 84;
  }
  // сдвиг вправо
  position -= width;
  list.style.marginLeft = position + "px";
};
