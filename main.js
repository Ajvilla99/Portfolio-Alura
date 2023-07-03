const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const slider = document.querySelector('.slider')

prev.addEventListener('click', () => {
    slider.scrollLeft -= 700
    console.log(slider)
})

next.addEventListener('click', () => {
    slider.scrollLeft += 300
    console.log(slider)
})

// slider.addEventListener('click', () => )
