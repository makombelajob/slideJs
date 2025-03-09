const right = document.querySelector("#right");
right.addEventListener("click", avancer);

// fonction qui permet d'avancer vers la droite
function avancer() {
const active = document.querySelector(".active");
active.classList.remove("active");
if (active.nextElementSibling) {
active.nextElementSibling.classList.add("active");
} else {
active.parentElement.firstElementChild.classList.add("active");
}
function reculer() {
const active = document.querySelector(".active");
active.classList.remove("active");
if (active.previousElementSibling) {
active.previousElementSibling.classList.add("active");
} else {
active.parentElement.lastElementChild.classList.add("active");
}
    const span = document.querySelector(".navigation .active");
    span.classList.remove("active");
    if(span.nextElementSibling) {
        span.nextElementSibling.classList.add("active");
    }else{
        span.parentElement.firstElementChild.classList.add("active");
    }
};


    const span = document.querySelector(".navigation .active");
    span.classList.remove("active");
    if (span.nextElementSibling) {
        span.nextElementSibling.classList.add("active");
    } else {
        span.parentElement.firstElementChild.classList.add("active");
    }
};

const left = document.querySelector("#left");
left.addEventListener("click", reculer);

// créer une variable qui contient l'ID de l'interval (2000 = 2 sécondes)
let intervalle = setInterval(avancer,2000);

const diapo = document.querySelector(".diapo");
// Annuler le defilement automatique
diapo.addEventListener("mouseenter", function() {
clearInterval(intervalle);
});

//Remettre en route le defilement automatique
diapo.addEventListener("mouseleave", function() {
intervalle = setInterval(avancer, 2000);
});
