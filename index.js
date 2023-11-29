window.addEventListener('scroll', function () {
    let nav = document.querySelector('.sticky');
    let navbarHeader = document.querySelector('.navbarHeader')
    let navbarMenus = document.querySelector('.navbarMenus');
    let button = document.querySelector('#book');
    let icon = document.querySelector('.icon1');
    let scrolled = window.scrollY > 50;

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
