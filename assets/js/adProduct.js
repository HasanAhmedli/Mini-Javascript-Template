import { set, ref, push, onValue } from 'https://cdnjs.cloudflare.com/ajax/libs/firebase/9.13.0/firebase-database.js';
import { db } from './ConnectFireBase.mjs';
const productname = document.getElementById('productname');
const productcategory = document.getElementById('productcategory');
const productprice = document.getElementById('productprice');
const productcurrency = document.getElementById('productcurrency');
const productdiscount = document.getElementById('productdiscount');
const description = document.getElementById('description');
const starcount = document.getElementById('starcount');
const productphoto = document.getElementById('productphoto');
const categoryphoto = document.getElementById('categoryphoto');






function setProduct(productName, productCategory, categoryPhoto, productPrice, productCurrency, productDiscount, productPhoto, stars, wishlisted, addedCard, compared, description) {
    set(push(ref(db, 'Products/')), {
        productName, productCategory, categoryPhoto, productPrice, productCurrency, productDiscount, productPhoto, stars, wishlisted, addedCard, compared, description
    })
    console.log('Product added')
}

function setCategory(categoryName,productCount,categoryPhoto) {
 set(push(ref(db,'category/')), {
    categoryName,productCount,categoryPhoto
 }) 
 console.log('Category added')  
}

addProduct.addEventListener('submit',e => {
    e.preventDefault();
    
    setProduct(
        productname.value,
        productcategory.value,
        productprice.value,
        productcurrency.value,
        productdiscount.value,
        description.value,
        starcount.value,
        false,false,false,
        productphoto.value,
        categoryphoto.value
    )

    setCategory(
        productcategory.value,
        1,
        categoryphoto.value
    )
})