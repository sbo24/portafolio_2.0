
let open = document.querySelector('.navbar--icon');
let menu = document.querySelector('.nav--open');
let close = document.querySelector('.nav--open-icon');
let navLinks = document.querySelectorAll('.nav-link');

// Abrir o cerrar el menú al hacer clic en el ícono
open.addEventListener('click', function () {
    menu.classList.toggle('close');
});

// Cerrar el menú al hacer clic en el ícono de cerrar
close.addEventListener('click', function () {
    menu.classList.toggle('close');
});

// Cerrar el menú al hacer clic en cualquier enlace del menú
navLinks.forEach(link => {
    link.addEventListener('click', function () {
        menu.classList.add('close');
    });
});
