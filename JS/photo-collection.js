"use strict";

(() => {
  let button = document.querySelector(".section-5-button");
  let parentEl = document.querySelector(".section-5");
  let tabs = document.querySelectorAll(".tabs-section-5");
  let grid = document.querySelector(".grid-section-5");
  let items;

  parentEl.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("section-5-button") &&
      document.querySelectorAll(".image-section-5").length == 12
    ) {
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
          <img class="image-section-5 graphic-design" src="./img/b_n/9.png" alt="?" data-img="./img/b_n/9.png" />
          <img class="image-section-5 wordpress" src="./img/b_n/10.png" alt="?" data-img="./img/b_n/10.png" />
          <img class="image-section-5 landing-pages" src="./img/b_n/11.png" alt="?" data-img="./img/b_n/11.png" />
          <img class="image-section-5 landing-pages" src="./img/b_n/12.png" alt="?" data-img="./img/b_n/12.png" />`
      );
      let activeItemName = document.querySelector(".tabs-section-5.active")
        .dataset.item;
      items = document.querySelectorAll(".grid-section-5 img");
      getStyle(activeItemName);
    } else if (
      e.target.classList.contains("section-5-button") &&
      document.querySelectorAll(".image-section-5").length == 24
    ) {
      grid.insertAdjacentHTML(
        "beforeend",
        `<img class="image-section-5 graphic-design" src="./img/b_n/13.png" alt="?" data-img="./img/b_n/13.png" />
          <img class="image-section-5 web-design" src="./img/b_n/14.png" alt="?" data-img="./img/b_n/14.png" />
          <img class="image-section-5 web-design" src="./img/b_n/15.png" alt="?" data-img="./img/b_n/15.png" />
          <img class="image-section-5 wordpress" src="./img/b_n/16.png" alt="?" data-img="./img/b_n/16.png" />
          <img class="image-section-5 graphic-design" src="./img/b_n/17.png" alt="?" data-img="./img/b_n/17.png" />
          <img class="image-section-5 web-design" src="./img/b_n/18.png" alt="?" data-img="./img/b_n/18.png" />
          <img class="image-section-5 graphic-design" src="./img/b_n/19.png" alt="?" data-img="./img/b_n/19.png" />
          <img class="image-section-5 wordpress" src="./img/b_n/20.png" alt="?" data-img="./img/b_n/20.png" />
          <img class="image-section-5 graphic-design" src="./img/b_n/21.png" alt="?" data-img="./img/b_n/21.png" />
          <img class="image-section-5 wordpress" src="./img/b_n/22.png" alt="?" data-img="./img/b_n/22.png" />
          <img class="image-section-5 landing-pages" src="./img/b_n/23.png" alt="?" data-img="./img/b_n/23.png" />
          <img class="image-section-5 landing-pages" src="./img/b_n/24.png" alt="?" data-img="./img/b_n/24.png" />`
      );
      let activeItemName = document.querySelector(".tabs-section-5.active")
        .dataset.item;
      items = document.querySelectorAll(".grid-section-5 img");
      getStyle(activeItemName);
      button.style.visibility = "hidden";
    }

    if (e.target.classList.contains("tabs-section-5")) {
      items = document.querySelectorAll(".grid-section-5 img");
      let someW = e.target;
      let currentItem = e.target.dataset.item;
      if (!someW.classList.contains("active")) {
        tabs.forEach(function (e) {
          e.classList.remove("active");
        });
        someW.classList.add("active");
      }
      getStyle(currentItem);
    }
  });

  grid.addEventListener("mouseover", (e) => {
    e.target.setAttribute("src", "./img/Hover.png");
  });

  grid.addEventListener("mouseout", (e) => {
    let img = e.target;
    let startImg = img.getAttribute("data-img");
    img.setAttribute("src", startImg);
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

  function getStyle(className) {
    switch (className) {
      case "all":
        getImages("image-section-5");
        break;
      case "graphic-design":
        getImages(className);
        break;
      case "web-design":
        getImages(className);
        break;
      case "landing-pages":
        getImages(className);
        break;
      case "wordpress":
        getImages(className);
        break;
    }
  }
})();
