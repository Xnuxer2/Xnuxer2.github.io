/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    nav.classList.toggle('active');
};

/*==================== scroll sections avtive link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttributes('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx--x');
    nav.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .quote-container, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content, .about-content', { origin: 'right'});


/*==================== scroll reveal ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Front End Developer', 'Beginner Programmer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});