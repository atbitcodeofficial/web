let hamburger = document.querySelector(".hamburger");
let ul = document.querySelector(".ul");
let topBar = document.querySelector(".bar-1");
let middleBar = document.querySelector(".bar-2");
let bottomBar = document.querySelector(".bar-3");

hamburger.addEventListener("click", ()=>{
    ul.classList.toggle("nav-toggle");
    topBar.classList.toggle("top-cross");
    bottomBar.classList.toggle("bottom-cross");
    middleBar.classList.toggle("hidden");
})
