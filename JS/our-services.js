"use strict";
const parentEl = document.querySelector(".section-3-tabs");
const tabs = document.querySelectorAll(".tabs-title");
const items = document.querySelectorAll(".tabs-item");
let imgThirdSect = document.querySelector(".image-section-3");
parentEl.addEventListener("click", (e) => {
  let currentItem = e.target;
  console.log(currentItem);
  let itemId = currentItem.getAttribute("data-item");
  console.log(itemId);
  let currentTab = document.querySelector(itemId);
  console.log(currentTab);
  if (!currentItem.classList.contains("active")) {
    tabs.forEach(function (item) {
      item.classList.remove("active");
    });

    items.forEach(function (item) {
      item.classList.remove("active");
    });

    currentItem.classList.add("active");
    currentTab.classList.add("active");
  }
});

document.querySelector(".tabs-title").click();
