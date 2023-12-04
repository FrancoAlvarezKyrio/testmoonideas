$(document).ready(function () {
    $('.hamburger-menu').click(function () {
        $('nav ul').toggleClass('show');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    let currentIndex = 0;

    function showSlide(index) {
        const translateValue = -index * 100 + '%';
        carousel.style.transform = 'translateX(' + translateValue + ')';
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % 3;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 3000);
});
