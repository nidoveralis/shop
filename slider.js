const slides = document.querySelectorAll('.slide');
const nextB = document.querySelector('.next');
const prevB = document.querySelector('.prev');
const dots = document.querySelectorAll('.dot');
let index =0;


const activeSlides = n =>{
    for(slide of slides){
        slide.classList.remove('active') 
    }
    slides[n].classList.add('active')
}
const activeDots = n =>{
    for(dot of dots){
        dot.classList.remove('active') 
    }
    dots[n].classList.add('active')
}


const clicNext = ()=>{
    if(index===slides.length-1){
        index=0
        activeSlides(index)
        activeDots(index)
    }else{
        index++
        activeSlides(index)
        activeDots(index)
    }
}
const clicPrev = ()=>{
    if(index===0){
        index=slides.length-1
        activeSlides(index)
        activeDots(index)
    }else{
        index--
        activeSlides(index)
        activeDots(index)
    }
}
dots.forEach((item,indexDots) =>{
    item.addEventListener('click', () =>{
        index=indexDots
        activeSlides(index)
        activeDots(index)
        clearInterval(inteval)
    })
})

const inteval = setInterval(clicNext, 2500)
nextB.addEventListener('click',clicNext)
prevB.addEventListener('click',clicPrev)