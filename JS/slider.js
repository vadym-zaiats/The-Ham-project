"use strict";

let width = 84; // ширина li в котором картинка

let list = carousel.querySelector("ul");
let listElems = carousel.querySelectorAll("li");

let position = 0; // положение ленты прокрутки

carousel.querySelector(".arrow-back").onclick = function () {
  if (position === 0) {
    position = -420;
  }
  position += width;
  list.style.marginLeft = position + "px";
};

carousel.querySelector(".arrow-next").onclick = function () {
  if (position === -336) {
    position = 84;
  }
  position -= width;
  list.style.marginLeft = position + "px";
};
