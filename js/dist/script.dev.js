"use strict";

var right = document.querySelector("#right");
right.addEventListener("click", avancer); // fonction qui permet d'avancer vers la droite

function avancer() {
  var active = document.querySelector(".active");
  active.classList.remove("active");

  if (active.nextElementSibling) {
    active.nextElementSibling.classList.add("active");
  } else {
    active.parentElement.firstElementChild.classList.add("active");
  }

  var span = document.querySelector(".navigation .active");
  span.classList.remove("active");

  if (span.nextElementSibling) {
    span.nextElementSibling.classList.add("active");
  } else {
    span.parentElement.firstElementChild.classList.add("active");
  }
}

;

function reculer() {
  var active = document.querySelector(".active");
  active.classList.remove("active");

  if (active.previousElementSibling) {
    active.previousElementSibling.classList.add("active");
  } else {
    active.parentElement.lastElementChild.classList.add("active");
  }

  var span = document.querySelector(".navigation .active");
  span.classList.remove("active");

  if (span.nextElementSibling) {
    span.nextElementSibling.classList.add("active");
  } else {
    span.parentElement.firstElementChild.classList.add("active");
  }
}

;
var left = document.querySelector("#left");
left.addEventListener("click", reculer); // créer une variable qui contient l'ID de l'interval (2000 = 2 sécondes)

var intervalle = setInterval(avancer, 2000);
var diapo = document.querySelector(".diapo"); // Annuler le defilement automatique

diapo.addEventListener("mouseenter", function () {
  clearInterval(intervalle);
}); //Remettre en route le defilement automatique

diapo.addEventListener("mouseleave", function () {
  intervalle = setInterval(avancer, 2000);
});