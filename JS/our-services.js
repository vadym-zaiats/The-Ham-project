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

//
//
//
//
//
// const parentEl = document.querySelector(".section-3-tabs");
// const tabs = document.querySelectorAll(".tabs-title");
// const items = document.querySelectorAll(".tabs-item");
// const currentPic = document.querySelector(".image-section-3");

// parentEl.addEventListener("click", (e) => {
//   let currentItem = e.target;
//   let itemId = currentItem.getAttribute("data-item");
//   let currentTab = document.querySelector(itemId);
//   let someVar = e.target.dataset.item;

//   if (!currentItem.classList.contains("active")) {
//     tabs.forEach(function (item) {
//       item.classList.remove("active");
//     });

//     items.forEach(function (item) {
//       item.classList.remove("active");
//     });
//     currentTab.classList.add("active");
//   }
//   switch (someVar) {
//     case "#connect_1":
//       currentPic.src = "./img/w_p/1.jpg";
//       tabs.forEach((e) => {
//         e.className = "tabs-title";
//       });
//       document.getElementById("tringle1").classList.add("tringle1");
//       document.getElementById("tringle1").classList.add("active");

//       break;
//     case "#connect_2":
//       currentPic.src = "./img/w_p/2.jpg";
//       tabs.forEach((e) => {
//         e.className = "tabs-title";
//       });
//       document.getElementById("tringle2").classList.add("tringle2");
//       document.getElementById("tringle2").classList.add("active");
//       break;
//     case "#connect_3":
//       currentPic.src = "./img/w_p/3.jpg";
//       tabs.forEach((e) => {
//         e.className = "tabs-title";
//       });
//       document.getElementById("tringle3").classList.add("tringle3");
//       document.getElementById("tringle3").classList.add("active");
//       break;
//     case "#connect_4":
//       currentPic.src = "./img/w_p/4.jpg";
//       tabs.forEach((e) => {
//         e.className = "tabs-title";
//       });
//       document.getElementById("tringle4").classList.add("tringle4");
//       document.getElementById("tringle4").classList.add("active");
//       break;
//     case "#connect_5":
//       currentPic.src = "./img/w_p/5.jpg";
//       tabs.forEach((e) => {
//         e.className = "tabs-title";
//       });
//       document.getElementById("tringle5").classList.add("tringle5");
//       document.getElementById("tringle5").classList.add("active");
//       break;
//     case "#connect_6":
//       currentPic.src = "./img/w_p/6.jpg";
//       tabs.forEach((e) => {
//         e.className = "tabs-title";
//       });
//       document.getElementById("tringle6").classList.add("tringle6");
//       document.getElementById("tringle6").classList.add("active");
//       break;
//   }
// });

// document.querySelector(".tabs-title").click();
