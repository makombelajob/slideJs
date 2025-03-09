
const next = document.querySelector("#right");
right.addEventListener("click", function() {
    forward();
})

const prev = document.querySelector("#left");
prev.addEventListener("click", function() {
    backward();
});

let interval = setInterval(forward, 1000);
const slide = document.querySelector(".diapo");
slide.addEventListener("mouseenter", function () {
    clearInterval(interval);
});

slide.addEventListener("mouseleave", function() {
    let interval = setInterval(forward, 1000);
});