window.addEventListener('storage',function(e){
    let b = localStorage.getItem('products')
    b = JSON.parse(b)
    
    let basket= ()=>{
        let order = `<div class='order'></div>`;
        let orders = `<div class='orders'></div>`;
        for( let key in b){
            order += `<div class="orderwr">`;
            order += `<div class="img__order">`
            order += `<img src="${b[key]['img']}">`;
            order += `</div>`;
            order += `<h2 class='order__title'>${b[key]['name']}</h2>`;
            order += `<p class='price'>${b[key]['price']}</p>`;
            order += `<div class='count__plus'>`;
            order += `<button class="plus__or" data-id='${[key]}'>+</button>`;
            order += `<div class="count">${b[key]['count']}</div>`;
            order += `<button class="minus__or" data-id='${[key]}'>-</button>`;
            order += `<div class='count__total'>${b[key]['count']*parseInt(b[key]['price'])}</div>`;
            order += `</div>`;
            order += `<button class='order__delete' data-id='${[key]}'></button>`;
            order += `</div>`
        }
        document.querySelector('.order__block').innerHTML = order;
       // document.querySelector('.buy__block').innerHTML = orders;
        document.onclick = event =>{
            if (event.target.classList.contains('plus__or')){
                plusCount(event.target.dataset.id);
            }if (event.target.classList.contains('minus__or')){
                minusCount(event.target.dataset.id);
            }if (event.target.classList.contains('order__delete')){
                deleteProduct(event.target.dataset.id);
            }
        }
    }
    basket()
    
    let plusCount = id =>{
        b[id]['count']++
        basket()
        console.log(b[id]['count']*parseInt(b[id]['price']))
        
    }
    let minusCount = id =>{
        if(b[id]['count'] <=0){
            deleteProduct(id)
        }else 
        b[id]['count']--
        basket()
    }
    let deleteProduct= id =>{
        delete b [id]
        basket()
    }
   // let total = (id) =>{
   //     totalCount= b[id]['price']
    //}


})

