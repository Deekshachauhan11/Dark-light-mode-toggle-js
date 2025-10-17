

let bd = document.querySelector("body");
let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    bd.classList.toggle("theme")
    btn.classList.toggle("btn")
})