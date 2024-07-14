// ========================= Toggle Icon Navbar =========================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ========================= Scroll Section Active =========================
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height ) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            });
        };
    });
    // ========================= Sticky Navbar =========================
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // ========================= Remove Toggle Icon Navbar =========================
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ========================= ScrollReveal =========================
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

// index html /////////////////////////////////////////////////////
ScrollReveal().reveal('.home-content, .heading, .heading1', { origin: 'top' });
ScrollReveal().reveal
('.home-img, .services-container, .portofolio-box, .contact form', 
{ origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal
('.home-content p, .about-content', 
{ origin: 'right' });

// Skill html ////////////////////////////////////////////////////
ScrollReveal().reveal('.heading, .heading1', { origin: 'top' });
ScrollReveal().reveal('.skill-left', { origin: 'left' });
ScrollReveal().reveal('.skill-right', { origin: 'right' });
ScrollReveal().reveal('.language-box', { origin: 'bottom' });

// project html ////////////////////////////////////////////////////
ScrollReveal().reveal('.about-project-wraper', { origin: 'bottom' });

// ========================= Typed js =========================
const typed = new Typed('.multiple-text', {
    strings: ['Electonic Engineer', 'Robotic Developer', '3D Designer', 'IOT Developer'],
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
