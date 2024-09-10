
let open = document.querySelector('.navbar--icon');
let menu = document.querySelector('.nav--open');
let close = document.querySelector('.nav--open-icon');
let navLinks = document.querySelectorAll('.nav-link');


open.addEventListener('click', function () {
    menu.classList.toggle('close');
});

close.addEventListener('click', function () {
    menu.classList.toggle('close');
});

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        menu.classList.add('close');
    });
});
