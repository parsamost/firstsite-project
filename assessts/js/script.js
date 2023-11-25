const nav = document.querySelector('.mobile-nav');
navMenuBTN = document.querySelector('.nav-menu-btn');
navCloseBTN = document.querySelector('.nav-close-btn');

const navToggleFunc = () => {nav.classList.toggle("active")};
navMenuBTN.addEventListener('click',navToggleFunc);
navCloseBTN.addEventListener('click',navToggleFunc);
