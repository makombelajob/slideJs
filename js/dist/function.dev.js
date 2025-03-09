"use strict";

/**
 * This function is moving forward the slide images...!⏭️
 */
function forward() {
  var active = document.querySelector(".active");
  active.classList.remove("active");

  if (active.nextElementSibling) {
    active.nextElementSibling.classList.add("active");
  } else {
    active.parentElement.firstElementChild.classList.add("active");
  }
}
/**
 * This function is moving backward the slide images...!⏮️
 */


function backward() {
  var active = document.querySelector(".active");
  active.classList.remove("active");

  if (active.previousElementSibling) {
    active.previousElementSibling.classList.add("active");
  } else {
    active.parentElement.lastElementChild.add("active");
  }
}