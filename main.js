// const prev = document.querySelector('.prev');
// const next = document.querySelector('.next');
// const slider = document.querySelector('.slider');
// const imagenes = document.querySelectorAll('.img_proyect');
// const fondo = document.getElementById('slider_bg');

// imagenes.forEach(img => {
//     img.addEventListener('click', (a) => {
//         let src = a.target.getAttribute('src')
//         fondo.style.backgroundImage = `url(${src})`;
//         fondo.style.backgroundSize = 'cover';
//     });
// });

// prev.addEventListener('click', () => {
//     slider.scrollLeft -= 253;
// });

// next.addEventListener('click', () => {
//     slider.scrollLeft += 252;
// });

const menuMobile = document.querySelector('.menu-mobile');
const menuNav = document.querySelector('.navbar');
const menuMid = document.querySelector('.menu__mid');


menuMobile.addEventListener('click', () => {
    menuMobile.classList.toggle('bx-x')
    menuNav.classList.toggle('active')
    menuMid.classList.toggle('active')

})