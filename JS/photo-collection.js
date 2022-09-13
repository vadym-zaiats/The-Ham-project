"use strict";
let button = document.querySelector(".section-5-button");
let parentEl = document.querySelector(".section-5-tabs");
let tabs = document.querySelectorAll(".tabs-section-5");
let grid = document.querySelector(".grid-section-5");
let items;

parentEl.addEventListener("click", (item) => {
  items = document.querySelectorAll(".grid-section-5 img");
  console.log(items);
  let someW = item.target;
  let currentItem = item.target.dataset.item;
  if (!someW.classList.contains("active")) {
    tabs.forEach(function (item) {
      item.classList.remove("active");
    });
    someW.classList.add("active");
  }

  switch (currentItem) {
    case "all":
      getImages("image-section-5");
      break;
    case "graphic-design":
      getImages(currentItem);
      break;
    case "web-design":
      getImages(currentItem);
      break;
    case "landing-pages":
      getImages(currentItem);
      break;
    case "wordpress":
      getImages(currentItem);
      break;
  }
});

function getImages(className) {
  items.forEach((item) => {
    if (!item.classList.contains(className)) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
}

button.addEventListener("click", () => {
  grid.insertAdjacentHTML(
    "beforeend",
    `<img class="image-section-5 graphic-design" src="./img/b_n/1.png" alt="?" data-img="./img/b_n/1.png" />
    <img class="image-section-5 web-design" src="./img/b_n/2.png" alt="?" data-img="./img/b_n/2.png" />
    <img class="image-section-5 web-design" src="./img/b_n/3.png" alt="?" data-img="./img/b_n/3.png" />
    <img class="image-section-5 wordpress" src="./img/b_n/4.png" alt="?" data-img="./img/b_n/4.png" />
    <img class="image-section-5 graphic-design" src="./img/b_n/5.png" alt="?" data-img="./img/b_n/5.png" />
    <img class="image-section-5 web-design" src="./img/b_n/6.png" alt="?" data-img="./img/b_n/6.png" />
    <img class="image-section-5 graphic-design" src="./img/b_n/7.png" alt="?" data-img="./img/b_n/7.png" />
    <img class="image-section-5 wordpress" src="./img/b_n/8.png" alt="?" data-img="./img/b_n/8.png" />
    <img class="image-section-5 graphic-design" src="./img/l_p/1.jpg" alt="?" data-img="./img/l_p/1.jpg" />
    <img class="image-section-5 wordpress" src="./img/l_p/2.jpg" alt="?" data-img="./img/l_p/2.jpg" />
    <img class="image-section-5 landing-pages" src="./img/l_p/3.jpg" alt="?" data-img="./img/l_p/3.jpg" />
    <img class="image-section-5 landing-pages" src="./img/l_p/4.jpg" alt="?" data-img="./img/l_p/4.jpg" />`
  );
  let activeItemName = document.querySelector(".tabs-section-5.active").dataset
    .item;
  items = document.querySelectorAll(".grid-section-5 img");
  items.forEach((elem) => {
    if (elem.classList.contains(activeItemName)) {
      elem.style.display = "block";
    } else {
      elem.style.display = "none";
    }
  });
  button.style.visibility = "hidden";
});

grid.addEventListener("mouseover", (e) => {
  let img = e.target;
  img.setAttribute("src", "./img/hover.png");
});

grid.addEventListener("mouseout", (e) => {
  let img = e.target;
  let startImg = img.getAttribute("data-img");
  img.setAttribute("src", startImg);
});
