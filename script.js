/* --toggle icon navbar-- */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    console.log(navbar)
}

/* --Scroll section active link-- */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav li a');

window.onscroll = () => {
    sections.forEach( sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if ( top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('nav ul li a[href*=' + id + ']').classList.add('active');
            });

        };
    });
    /* --Sicky Navbar-- */
    let header = document.querySelector('menu');

    header.classList.toggle('sticky', window.scrollY > 100);
}

