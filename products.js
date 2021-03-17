const products = {
    "toy01":{
        "img":"img/unnamed.jpg",
        "name":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "url":"#",
        "price":"2599,00",
    },
    "toy02":{
        "img":"img/unnamed.jpg",
        "name":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "url":"#",
        "price":"1599,00"
    },
    "toy03":{
        "img":"img/0.jpg",
        "name":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "url":"#",
        "price":"599,00"
    },
    "toy04":{
        "img":"img/1c.webp",
        "name":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "url":"#",
        "price":"1099,00"
    },
    "toy05":{
        "img":"img/Без названия.jpg",
        "name":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "url":"#",
        "price":"800,00"
    },
    "toy06":{
        "img":"img/Aurora1-e1476252651143.jpg",
        "name":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "url":"#",
        "price":"2599,00"
    },
    "toy07":{
        "img":"img/depositphotos_2744879-stock-photo-teddy-bear-toy.jpg",
        "name":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "url":"#",
        "price":"2599,00"
    },
    "toy08":{
        "img": "img/igrushkibanner1-350x350.png",
        "name":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "url":"#",
        "price":"2009,00"
    },
    "toy09":{
        "img":"img/unnamed.jpg",
        "name":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "url":"#",
        "price":"2100,00"
    },
    "toy10":{
        "img":"img/unnamed.jpg",
        "name":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "url":"#",
        "price":"3000,00"
    },
    "toy11":{
        "img":"img/0.jpg",
        "name":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "url":"#",
        "price":"2799,00"
    },
    "toy12":{
        "img":"img/1c.webp",
        "name":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "url":"#",
        "price":"490,00"
    },
    "toy13":{
        "img":"img/Без названия.jpg",
        "name":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "url":"#",
        "price":"1293,00"
    },
    "toy14":{
        "img":"img/Aurora1-e1476252651143.jpg",
        "name":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "url":"#",
        "price":"1000,00"
    },
    "toy15":{
        "img":"img/depositphotos_2744879-stock-photo-teddy-bear-toy.jpg",
        "name":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "url":"#",
        "price":"2599,00"
    },
    "toy16":{
        "img":"img/igrushkibanner1-350x350.png",
        "name":"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "url":"#",
        "price":"2599,00"
    },
}


let data = {}
let catalog
let a = () =>{
    if (document.querySelector('.categories__grid')){
        catalog = document.querySelector('.categories__grid')
    }if(document.querySelector('.slider__items')){
        catalog = document.querySelector('.slider__items')
    }if(document.querySelector('.slider__items__kids')){
        catalog = document.querySelector('.slider__items__kids')
    }
}
a()
catalog.addEventListener('click', event => {
    if (event.target.classList.contains('slider__basket')) {
         let articul = event.target.dataset['id'];
        data[articul] = products[articul];
        data[articul]['count'] = 1;
    }
    localStorage.setItem('products',JSON.stringify(data));
})

//catalog.addEventListener('click', event => {
   // if (event.target.classList.contains('slider__basket')) {
       // let articul = event.target.dataset['id'];
       // data[articul] = products[articul];
       // data[articul]['count'] = 1;
    //}
    //localStorage.setItem('products',JSON.stringify(data));
//})

console.log(data)
