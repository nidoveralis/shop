const prev = document.querySelector('.prev__arrow');
const next = document.querySelector('.next__arrow');
const wrapper = document.querySelector('.slider__items')
const slider = document.querySelector('.hidden__items')
const items = document.querySelectorAll('.item__wrapper')
const itemWidth = wrapper.clientWidth/3;
const prevKids = document.querySelector('.prev__arrow__kids');
const nextKids = document.querySelector('.next__arrow__kids');
const wrapperKids = document.querySelector('.slider__items__kids')
const sliderKids = document.querySelector('.hidden__items__kids')
const itemsKids = document.querySelectorAll('.item__wrapper__kids')
const itemWidthKids = wrapperKids.clientWidth/3;

let position = 0; 

const slideShow = () =>{
    slider.style.transform = `translateX(${position}px)`;
    slider.style.transform = `translateX(${position}px)`;
}
const slideNext = ()=>{
    position-=itemWidth
    slideShow()
    checkBtns()
    
}
const slidePrev = ()=>{
    position+=itemWidth
    slideShow()
    checkBtns()
}
const checkBtns = () => {
    prev.disabled = position === 0;
    next.disabled = position <= -(items.length-4)*itemWidth;
};


let positionKids = 0; 

const slideShowKids = () =>{
    sliderKids.style.transform = `translateX(${positionKids}px)`;
    sliderKids.style.transform = `translateX(${positionKids}px)`;
}
const slideNextKids = ()=>{
    positionKids-=itemWidthKids
    slideShowKids()
    checkBtnsKids()
    
}
const slidePrevKids = ()=>{
    positionKids+=itemWidthKids
    slideShowKids()
    checkBtnsKids()
}
const checkBtnsKids = () => {
    prevKids.disabled = positionKids === 0;
    nextKids.disabled = positionKids <= -(itemsKids.length-4)*itemWidthKids;
};
prev.addEventListener('click',slidePrev)
next.addEventListener('click',slideNext)

prevKids.addEventListener('click',slidePrevKids)
nextKids.addEventListener('click',slideNextKids)

checkBtns()
checkBtnsKids()
