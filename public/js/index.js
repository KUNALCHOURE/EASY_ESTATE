let slideIndex = 0;
let slides = document.querySelectorAll('.slides img');
let totalSlides = slides.length;
let slideWidth = slides[0].clientWidth;

function showSlides() {
    // Check if the current slide is the last visible one
    if (slideIndex < totalSlides - 2) {
        slideIndex++;
    } else {
        // Reset to the first slide
        slideIndex = 0;
    }
    document.querySelector('.slides').style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}


window.addEventListener('resize', () => {
    slideWidth = slides[0].clientWidth;
    document.querySelector('.slides').style.transform = `translateX(-${slideIndex * slideWidth}px)`;
});


setInterval(showSlides, 3000);
