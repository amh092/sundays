// declaring vars 
var burger = document.getElementById("burger");
var headerNav = document.querySelector("header nav ul");
var triangle = document.querySelector(".triangle");
var arrowDown = document.querySelector(".arrow-down");
var arrowDown2 = document.querySelector(".arrow-down h1");
var arrowDown3 = document.querySelector(".arrow-down img");


burger.addEventListener("click",function(){
    headerNav.classList.toggle("enabled")
    triangle.classList.toggle("enabled-tri")
    arrowDown.classList.toggle("hide-it")
    arrowDown2.classList.toggle("hide-it")
    arrowDown3.classList.toggle("hide-it")
   
    
})
