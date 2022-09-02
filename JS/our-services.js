"use strict";
const parentEl = document.querySelector(".section-3-tabs");
const tabs = document.querySelectorAll(".tabs-title");
const items = document.querySelectorAll(".tabs-item");

parentEl.addEventListener("click", (e) => {
  let currentItem = e.target;
  let itemId = currentItem.getAttribute("data-item");
  let currentTab = document.querySelector(itemId);
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
