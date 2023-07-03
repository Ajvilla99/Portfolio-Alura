const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slider = document.querySelector('.slider');
const prueba = document.querySelector('.box__container-proyect');
const imagen = document.querySelectorAll('.img_proyect');
const fondo = document.getElementById('carta');
console.log(imagen);
console.log(fondo);

imagen.forEach(img => {
    img.addEventListener('click', (a) => {
        let src = a.target.getAttribute('src')
        fondo.style.backgroundImage = `url(${src})`;
        console.log(src);
    })
});

prev.addEventListener('click', () => {
    slider.scrollLeft -= 230;
})

next.addEventListener('click', () => {
    slider.scrollLeft += 228;
})