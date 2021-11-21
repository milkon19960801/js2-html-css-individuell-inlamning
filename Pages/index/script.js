"use strict";

const buttonsHtmlCollection = document.getElementsByTagName("button");

const buttons = [...buttonsHtmlCollection];

buttons.forEach((element) => {
  element.addEventListener("click", () => {
    element.parentElement.querySelector(".description").style.display =
      "inline";
  });
});
