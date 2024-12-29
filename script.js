// JavaScript Document
console.log("hi");


let menuButton = document.querySelector("header label input")
let menuList = document.querySelector("header ul")

menuButton.onclick = showMenu;

function showMenu(){
    menuList.classList.toggle("header-show")
    console.log("Menu button clicked")  
}

window.addEventListener('scroll', function() {
    const element = document.getElementById('turntransparent');
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    
    const fadeOutSpeed = 3; // Change this value to control the speed
    const opacity = 1 - (scrollPosition / maxScroll) * fadeOutSpeed;
    element.style.opacity = opacity < 0 ? 0 : opacity; // Ensure opacity doesn't go below 0
});

const header = document.getElementById('header-index');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            header.classList.add('shadow'); // Add shadow class when scrolling
        } else {
            header.classList.remove('shadow'); // Remove shadow class when at the top
        }
});

const headerItems = document.querySelectorAll('.header-item');


headerItems.forEach(headerItem => {
    headerItem.addEventListener('mousedown', () => {
        headerItem.classList.add('active');
    });

    headerItem.addEventListener('mouseup', () => {
        headerItem.classList.remove('active');
    });

    headerItem.addEventListener('mouseleave', () => {
        headerItem.classList.remove('active'); // Remove class if mouse leaves while pressed
    });
});