'use strict';
const addProductBtn = document.getElementById('addProductBtn');
const productListBtn = document.getElementById('productListBtn');
const usersListBtn = document.getElementById('usersListBtn');
const addUserBtn = document.getElementById('addUserBtn');

homeBtn.addEventListener('click',e => {
    $('section').css('display','none');
    $('#home').css('display','block');
});

usersBtn.addEventListener('click',e => {
    $('section').css('display','none');
    $('#users').css('display','block');
});

productsBtn.addEventListener('click',e => {
    $('section').css('display','none');
    $('#products').css('display','block');
});

addProductBtn.addEventListener('click', e => {
    productListBtn.classList.remove('active');
    e.target.classList.add('active');
    $('.productList').css('display','none');
    $('.addProduct').css('display','block');
})

productListBtn.addEventListener('click', e => {
    addProductBtn.classList.remove('active');
    e.target.classList.add('active');
    $('.addProduct').css('display','none');
    $('.productList').css('display','block');
})


addUserBtn.addEventListener('click', e => {
    usersListBtn.classList.remove('active');
    e.target.classList.add('active');
    $('.usersList').css('display','none');
    $('.addUser').css('display','block');
})

usersListBtn.addEventListener('click', e => {
    addUserBtn.classList.remove('active');
    e.target.classList.add('active');
    $('.addUser').css('display','none');
    $('.usersList').css('display','block');
})