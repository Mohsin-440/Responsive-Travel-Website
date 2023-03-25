const menu = document.querySelector('.icon');
const navlinks = document.querySelector('.nav-links');

menu.addEventListener('click',()=>{
    navlinks.classList.toggle('mobile-menu');
})