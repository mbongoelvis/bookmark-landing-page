let first = document.querySelector(".first-drop")
let second = document.querySelector(".second-drop")
let third = document.querySelector(".third-drop")
let fourth = document.querySelector(".fourth-drop")

// adding event listeners

first.addEventListener("click", function(e){
    if (first.classList.contains("hidden") || first.classList.contains("img-rotate")){
        first.classList.remove("hidden")
        first.classList.toggle("img-rotate")
    }
    else{
        first.classList.add("hidden")
        first.classList.toggle("img-rotate")
    }
})
second.addEventListener("click", function (e) {
    if (second.classList.contains("hidden") || second.classList.contains("img-rotate")) {
        second.classList.remove("hidden")
        second.classList.toggle("img-rotate")
    }
    else {
        second.classList.add("hidden")
        second.classList.toggle("img-rotate")
    }
})
third.addEventListener("click", function (e) {
    if (third.classList.contains("hidden") || third.classList.contains("img-rotate")) {
        third.classList.remove("hidden")
        third.classList.toggle("img-rotate")
    }
    else {
        third.classList.add("hidden")
        third.classList.toggle("img-rotate")
    }
})
fourth.addEventListener("click", function (e) {
    if (fourth.classList.contains("hidden") || fourth.classList.contains("img-rotate")) {
        fourth.classList.remove("hidden")
        fourth.classList.toggle("img-rotate")
    }
    else {
        fourth.classList.add("hidden")
        fourth.classList.toggle("img-rotate")
    }
})