const burger = document.querySelector('.menu__burger');
const menyLeft = document.querySelector('.menu__left');
const arrow = document.querySelector('.arrow');
const menu = document.querySelector('.menu__title');

const clickBurger = ()=>{
    menyLeft.classList.add('active')
}
const clickArrow = ()=>{
    menyLeft.classList.remove('active')
}
const clickMenu = ()=>{
    menyLeft.classList.remove('active')
}


burger.addEventListener('click',clickBurger)
arrow.addEventListener('click',clickArrow)
menu.addEventListener('click',clickMenu)









