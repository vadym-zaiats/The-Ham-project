"use strict";
let button = document.querySelector(".section-5-button");

button.addEventListener("click", () => {
  document
    .querySelector(".grid-section-5")
    .classList.replace("grid-section-5", "grid-section-5-more");
  document.querySelectorAll(".image-section-5").forEach((e) => {
    e.classList.remove("hide");
  });
  button.style.visibility = "hidden";
});
