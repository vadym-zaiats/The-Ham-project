"use strict";
//
(() => {
  const photoCol = document.querySelector(".carousel");
  const photos = document.querySelectorAll(".carousel-photo");
  let items = document.querySelectorAll(".block");
  let list = document.querySelector(".photo-collection-carousel");
  let firstPhoto = document.querySelector('[data-about="#text1"]');
  let lastPhoto = document.querySelector('[data-about="#text4"]');

  photoCol.addEventListener("click", (e) => {
    let currentClick = e.target;
    let itemDataAtt = currentClick.getAttribute("data-about");
    let currentText = document.querySelector(itemDataAtt);
    // --------------стрелка лево--------------
    if (currentClick.classList.contains("arrow-back")) {
      let currentPerson = list.querySelector(".active");
      if (currentPerson.parentElement.previousElementSibling === null) {
        document.querySelector(".main-photo").src = "./img/section-7/4.png";
        firstPhoto.classList.remove("active");
        lastPhoto.classList.add("active");
        items.forEach((text) => {
          text.classList.remove("active");
        });
        document.getElementById("text4").classList.add("active");
      } else {
        currentPerson.parentElement.previousElementSibling
          .querySelector(".carousel-photo")
          .classList.add("active");

        currentPerson.classList.remove("active");

        document.querySelector(".main-photo").src =
          currentPerson.parentElement.previousElementSibling
            .querySelector(".carousel-photo")
            .getAttribute("src");

        items.forEach((text) => {
          text.classList.remove("active");
        });

        document
          .querySelector(
            currentPerson.parentElement.previousElementSibling
              .querySelector(".carousel-photo")
              .getAttribute("data-about")
          )
          .classList.add("active");
      }
    }
    // --------------стрелка право--------------
    if (currentClick.classList.contains("arrow-next")) {
      let currentPerson = list.querySelector(".active");
      if (currentPerson.parentElement.nextElementSibling === null) {
        document.querySelector(".main-photo").src = "./img/section-7/1.png";
        lastPhoto.classList.remove("active");
        firstPhoto.classList.add("active");
        items.forEach((text) => {
          text.classList.remove("active");
        });
        document.getElementById("text1").classList.add("active");
      } else {
        currentPerson.parentElement.nextElementSibling
          .querySelector(".carousel-photo")
          .classList.add("active");

        currentPerson.classList.remove("active");

        document.querySelector(".main-photo").src =
          currentPerson.parentElement.nextElementSibling
            .querySelector(".carousel-photo")
            .getAttribute("src");

        items.forEach((text) => {
          text.classList.remove("active");
        });

        document
          .querySelector(
            currentPerson.parentElement.nextElementSibling
              .querySelector(".carousel-photo")
              .getAttribute("data-about")
          )
          .classList.add("active");
      }
    }
    // --------------по нажатияю на картинку--------------
    if (
      !currentClick.classList.contains("active") &&
      currentClick.closest(".carousel-photo")
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
})();
