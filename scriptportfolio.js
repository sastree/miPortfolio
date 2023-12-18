const sr = ScrollReveal ({
    distance: '35px',
    duration: 2400,
    reset: false
});

sr.reveal('.main-img',{delay:210, origin: 'left'});
sr.reveal('.main-text h1',{delay:310, origin: 'top'});
sr.reveal('.main-text h4',{delay:410, origin: 'right'});
sr.reveal('.social',{delay:210, origin: 'bottom'});

sr.reveal('.row',{delay:510, origin: 'left'});
sr.reveal('.button',{delay:610, origin: 'top'});
sr.reveal('.center',{delay:710, origin: 'right'});

sr.reveal('.portfolio',{delay:150, origin: 'top'});


document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.logo').addEventListener('click', function () {

        document.body.classList.toggle('white-background');
        document.querySelector('.nombre').classList.toggle('black');
        document.querySelector('.oscurecer').classList.toggle('oscuro');
        document.querySelector('.a').classList.toggle('oscuro');
        document.querySelector('.b').classList.toggle('oscuro');
        document.querySelector('.c').classList.toggle('oscuro');
        document.querySelector('.d').classList.toggle('oscuro');
        document.querySelector('.oscurecer1').classList.toggle('oscuro');
        document.querySelector('.oscurecer2').classList.toggle('oscuro');
        document.querySelector('.oscurecer3').classList.toggle('oscuro');
    });
});
