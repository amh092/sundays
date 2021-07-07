// declaring vars 
var burger = document.getElementById("burger");
var headerNav = document.querySelector("header nav ul");
var triangle = document.querySelector(".triangle");

burger.addEventListener("click",function(){
    headerNav.classList.toggle("enabled")
    triangle.classList.toggle("enabled")
    
})
