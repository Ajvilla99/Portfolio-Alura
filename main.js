const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const slider = document.querySelector('.slider');
const imagenes = document.querySelectorAll('.img_proyect');
const fondo = document.getElementById('slider_bg');

imagenes.forEach(img => {
    img.addEventListener('click', (a) => {
        let src = a.target.getAttribute('src')
        fondo.style.backgroundImage = `url(${src})`;
        fondo.style.backgroundSize = 'cover'
    })
});

prev.addEventListener('click', () => {
    slider.scrollLeft -= 253;
})

next.addEventListener('click', () => {
    slider.scrollLeft += 252;
})

const labelName = document.querySelector('.form__label-name');
const formName = document.querySelector('.form__name');

formName.addEventListener('click', (a) => {
    console.log(a);
})


console.log(labelName);
console.log(formName);
