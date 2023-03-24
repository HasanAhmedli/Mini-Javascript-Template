'use strict';

loginBtn.addEventListener('click',function(){
    document.getElementsByClassName('loginBox')[0].style.right = 0
});

closeLoginBtn.addEventListener('click',function(){
    document.getElementsByClassName('loginBox')[0].style.right = '-30%'
});