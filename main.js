const iconMenu = document.querySelector('.icon__menu');
const menu = document.querySelector('.menu__nav')

iconMenu.addEventListener("click", function(){
    menu.classList.toggle("show__menu");
})