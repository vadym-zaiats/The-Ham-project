"use strict";

let persons = document.querySelectorAll(".carousel-photo");
let items = document.querySelectorAll(".block");

persons.forEach((person) => {
  person.addEventListener("click", (e) => {
    let currentItem = e.target; // img
    let itemId = currentItem.getAttribute("data-about"); // #text
    let currentTab = document.querySelector(itemId); // текст персоны

    if (!currentItem.classList.contains("active")) {
      persons.forEach((item) => {
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
});

let width = 88; // ширина li в котором картинка
let list = document.querySelector(".gallery ul");
let position = 0; // положение ленты прокрутки
let activePerson = document.querySelector(".gallery .active");
console.log(activePerson.nextElementSibling);

document.querySelector(".arrow-back").addEventListener("click", () => {
  if (position === 0) {
    position = -440;
  }
  position += width;
  list.style.marginLeft = position + "px";
});

document.querySelector(".arrow-next").addEventListener("click", () => {
  if (position === -352) {
    position = 88;
  }
  position -= width;
  list.style.marginLeft = position + "px";
});
