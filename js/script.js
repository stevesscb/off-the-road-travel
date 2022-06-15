const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        navLinks.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        navLinks.classList.remove('open');
        menuOpen = false;
    }
});

/*---------------------------- gallery --------------------------------*/

const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4;

//set first image opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
    //reset the opacity
    imgs.forEach(img => (img.style.opacity = 1));
    //change curent image to src of clicked image
    current.src = e.target.src;

    //add fading class
    current.classList.add('fade-in');

    //removes fading class
    setTimeout(() => current.classList.remove('fade-in'),
        500);

    //change the opacitu to opacity var
    e.target.style.opacity = opacity;
};

