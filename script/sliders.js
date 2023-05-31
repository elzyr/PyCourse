// JavaScript
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide();
}

setInterval(nextSlide, 3000); // Automatyczne przejście do następnego slajdu co 3 sekundy

// JavaScript
const slides2 = document.querySelectorAll('.slide2');
let currentSlide2 = 0;

function showSlide2() {
    slides2.forEach((slide2, index2) => {
        if (index2 === currentSlide2) {
            slide2.classList.add('active');
        } else {
            slide2.classList.remove('active');
        }
    });
}

function nextSlide2() {
    currentSlide2++;
    if (currentSlide2 >= slides2.length) {
        currentSlide2 = 0;
    }
    showSlide2();
}

setInterval(nextSlide2, 3000); // Automatyczne przejście do następnego slajdu co 3 sekundy

