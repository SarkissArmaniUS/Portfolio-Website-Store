//Main Scripts
window.addEventListener("scroll", function(){
    var navbar = this.document.querySelector("nav");
    navbar.classList.toggle("sticky", window.scrollY > 0)
})

/* Search Form */
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cartItem.classList.remove('active');
    supportChat.classList.remove('active');
    mobileMenu.classList.remove('active');
}

/* Store Cart */
let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    searchForm.classList.remove('active');
    supportChat.classList.remove('active');
    mobileMenu.classList.remove('active');
}

/* Support Chat */
let supportChat = document.querySelector('.support-chat-container');

document.querySelector('#chat-btn').onclick = () =>{
    supportChat.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    mobileMenu.classList.remove('active');
}

/* Mobile Menu */
let mobileMenu = document.querySelector('.mobile-menu-container');

document.querySelector('#mobile-menu').onclick = () =>{
    mobileMenu.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
    supportChat.classList.remove('active');
}

/* Window Scrolling */
window.onscroll = () =>{
    searchForm.classList.remove('active');
}


