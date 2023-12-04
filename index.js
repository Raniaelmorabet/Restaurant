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
    navbarMenus.classList.toggle("visible");
});
// the titling image
    const tiltingImage = document.querySelector('.contact-img .tilting-image');
    tiltingImage.addEventListener('mousemove', function(event) {
        const boundingRect = tiltingImage.getBoundingClientRect();
        const offsetX = event.clientX - boundingRect.left - boundingRect.width / 2;
        const offsetY = event.clientY - boundingRect.top - boundingRect.height / 2;
        const tiltAngleX = offsetX / 20;
        const tiltAngleY = offsetY / 20;

        tiltingImage.style.transform = `perspective(1000px) rotateX(${tiltAngleY}deg) rotateY(${tiltAngleX}deg)`;
    });

    tiltingImage.addEventListener('mouseout', function() {
        tiltingImage.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });