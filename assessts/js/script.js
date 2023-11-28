const nav = document.querySelector('.mobile-nav');
navMenuBTN = document.querySelector('.nav-menu-btn');
navCloseBTN = document.querySelector('.nav-close-btn');

const navToggleFunc = () => {nav.classList.toggle("active")};
navMenuBTN.addEventListener('click',navToggleFunc);
navCloseBTN.addEventListener('click',navToggleFunc);

const themeBtn = document.querySelectorAll('.theme-btn');
for (let i =0; i < themeBtn.length; i++) {
  themeBtn[i].addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');

        for (let j =0; j < themeBtn.length; j++) {
          themeBtn[j].classList.toggle('light');
          themeBtn[j].classList.toggle('dark');
        }
    });
}
