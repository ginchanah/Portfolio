// JavaScript Document
console.log("hi");


let menuButton = document.querySelector("header label input")
let menuList = document.querySelector("header ul")

menuButton.onclick = showMenu;

function showMenu(){
    menuList.classList.toggle("header-show")
    console.log("Menu button clicked")  
}