/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== scroll section active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

/*==================== add sticky class to header ====================*/
let header = document.querySelector('header');

window.onscroll = () => {
    let top = window.scrollY;

    // Handle section link activation on scroll
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // Add/remove sticky class on scroll
    header.classList.toggle('sticky', top > 100);

    // Remove toggle icon and navbar on link click (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal ====================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .skills-box, .skills-row, .certificate-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'top' });
ScrollReveal().reveal('.home-content h1, .about-content', { origin: 'bottom' });

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['Beginner Coder', 'Youtuber', 'Cyclist', 'Calisthenics Athlete'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function sendMmail() {
    var params = {
        from_name : document.getElementById("fullname").value,
        email_id : document.getElementById("email_adress").value,
        mobile_number : document.getElementById("mobile_number").value,
        email_subject : document.getElementById("email_subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_8x1thfq", "template_eofnne4", params).then(function (res) {
        alert("Sucess! " + res.status);
    })
}