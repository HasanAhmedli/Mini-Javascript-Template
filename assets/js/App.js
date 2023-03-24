import { set, ref, push, onValue } from 'https://cdnjs.cloudflare.com/ajax/libs/firebase/9.13.0/firebase-database.js';
import { db } from './ConnectFireBase.mjs';



function writeData(productName, productCategory, categoryPhoto, productPrice, productCurrency, productDiscount, productPhoto, stars, wishlisted, addedCard, compared, description) {
    set(push(ref(db, 'products/')), {
        productName, productCategory, categoryPhoto, productPrice, productCurrency, productDiscount, productPhoto, stars, wishlisted, addedCard, compared, description
    })
    console.log('OK!')
}

// writeData('Wall Photo','Decor','https://woodmart.xtemos.com/handmade/wp-content/uploads/sites/3/2018/10/handmade-categories-4-opt-430x358.jpg',599,'AZN',0,'https://woodmart.xtemos.com/handmade/wp-content/uploads/sites/3/2017/09/26-430x490.jpg',0,false,false,false,'Clock for wall');

onValue(ref(db, 'products/'), function (response) {
    let data = response.val();
    let productBox = document.getElementById('productBox');
    for (const [key, value] of Object.entries(data)) {
            function ProductList(){
                //tooltip
                const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
                const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
        
                    let showProduct = `<div class="product"><img width="430" height="491"
                    src=${value.productPhoto} class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wd-lazy-load woodmart-lazy-load wd-lazy-fade wd-loaded" alt="" loading="lazy"
                    sizes="(max-width: 430px) 100vw, 430px"/> <span class="product_name">${value.productName}</span><br><span class="product_category">${value.productCategory}</span><br>
                    <span class="product_star_count"></span>
                    <span class="product_price">${value.productPrice} ${value.productCurrency}</span><br> <div class="product_event">
                    <ul>
                        <li><a href="#" data-bs-toggle="tooltip" data-bs-title="Compare"><i
                                    class="fa-solid fa-code-compare"></i></a></li>
                        <li><a href="#"><i class="fa-solid fa-cart-shopping" data-bs-toggle="tooltip"
                                    data-bs-title="Add to card"></i></a></li>
                        <li><a href="#" data-bs-toggle="tooltip" data-bs-title="Quick view"><i
                                    class="fa-solid fa-magnifying-glass"></i></a></li>
                        <li><a href="#" data-bs-toggle="tooltip" data-bs-title="Add to wishlist"><i
                                    class="fa-regular fa-heart"></i></a></li></ul></div></div>`;
                                    
                    let div = document.createElement('div');
                    div.dataset.key = key;
                    div.classList.add('col-3');
                    div.innerHTML = showProduct;
                    productBox.append(div)
            }
            
           
            ProductList();
            // categoryList()
          

    }
})

next.addEventListener('click',function(){
    productBox.scrollTop += 417;
})

pre.addEventListener('click',function(){
    productBox.scrollTop -= 417;
})