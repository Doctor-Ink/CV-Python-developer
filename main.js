const burger = document.querySelector('.burger-button')
const menu = document.querySelector('.burger-ul')
const menuLinks = document.querySelectorAll('.burger-link')
const burger_wraper = document.querySelector('.menu-wraper')


burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});


document.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(burger_wraper);

    if (! withinBoundaries ) {
        menu.classList.remove('active')
        burger.classList.remove('active')
    }
})

menuLinks.forEach((link) =>
    link.addEventListener('click', () => {
        menu.classList.remove('active')
        burger.classList.remove('active')
    })
);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        menu.classList.remove('active')
        burger.classList.remove('active')
    }
})


