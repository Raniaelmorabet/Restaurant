window.addEventListener('scroll', function () {
    let nav = document.querySelector('.sticky');
    let navbarHeader = document.querySelector('.navbarHeader')
    let navbarMenus = document.querySelector('.navbarMenus');
    let button = document.querySelector('#book');
    let icon = document.querySelector('.icon1');
    let scrolled = window.scrollY > 50;
// the scroll navbar functionality
    if (scrolled) {
        nav.classList.add('scrolled');
        navbarHeader.classList.add('scrolled');
        navbarMenus.classList.add('scrolled')
        button.classList.add('scrolled');
        icon.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
        navbarHeader.classList.remove('scrolled');
        navbarMenus.classList.remove('scrolled')
        button.classList.remove('scrolled');
        icon.classList.remove('scrolled');
    }
});
// the navbar icon functionality
let navbarMenus = document.querySelector(".navbarMenus");
let responsiveNav = document.querySelector(".res-btn");

responsiveNav.addEventListener('click', () => {
    let isVisible = navbarMenus.getAttribute('data-visible') === 'true';

    console.log('Button clicked. Was visible:', isVisible);

    navbarMenus.setAttribute('data-visible', String(!isVisible));
    console.log('Now visible:', !isVisible);
});

