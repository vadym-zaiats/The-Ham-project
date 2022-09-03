"use strict";
const parentEl = document.querySelector(".section-3-tabs");
const tabs = document.querySelectorAll(".tabs-title");
const items = document.querySelectorAll(".tabs-item");
const currentPic = document.querySelector(".image-section-3");

parentEl.addEventListener("click", (e) => {
  let currentItem = e.target;
  let itemId = currentItem.getAttribute("data-item");
  let currentTab = document.querySelector(itemId);
  let someVar = e.target.dataset.item;

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
  switch (someVar) {
    case "#connect_1":
      currentPic.src = "./img/w_p/1.jpg";
      break;
    case "#connect_2":
      currentPic.src = "./img/w_p/2.jpg";
      break;
    case "#connect_3":
      currentPic.src = "./img/w_p/3.jpg";
      break;
    case "#connect_4":
      currentPic.src = "./img/w_p/4.jpg";
      break;
    case "#connect_5":
      currentPic.src = "./img/w_p/5.jpg";
      break;
    case "#connect_6":
      currentPic.src = "./img/w_p/6.jpg";
      break;
  }
});

document.querySelector(".tabs-title").click();
