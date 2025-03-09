/**
 * This function is moving forward the slide images...!⏭️
 */
function forward(){
    const active = document.querySelector(".active");
    active.classList.remove("active");
    if(active.nextElementSibling){
        active.nextElementSibling.classList.add("active");
    }else{
        active.parentElement.firstElementChild.classList.add("active");
    }

    const span = document.querySelector(".navigation .active");
    span.classList.remove("active");
    if(span.nextElementSibling) {
        span.nextElementSibling.classList.add("active");
    }else{
        span.parentElement.firstElementChild.classList.add("active");
    }
}

/**
 * This function is moving backward the slide images...!⏮️
 */
function backward(){
    const active = document.querySelector(".active");
    active.classList.remove("active");
    if(active.previousElementSibling){
        active.previousElementSibling.classList.add("active");
    }else{
        active.parentElement.lastElementChild.classList.add("active");
    }

    const span = document.querySelector(".navigation .active");
    span.classList.remove("active");
    if(span.previousElementSibling) {
        span.previousElementSibling.classList.add("active");
    }else{
        span.parentElement.lastElementChild.classList.add("active");
    }

}