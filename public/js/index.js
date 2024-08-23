let slideIndex = 0;
let slides = document.querySelectorAll('.slides img');
let totalSlides = slides.length;

function showSlides() {
    // Increment slideIndex until it reaches the second-to-last image
    if (slideIndex < totalSlides - 2) {
        slideIndex++;
    } else {
        // Reset to the first slide
        slideIndex = 0;
    }
    document.querySelector('.slides').style.transform = `translateX(-${slideIndex * 1536}px)`;
}

// Slide every 3 seconds
setInterval(showSlides, 3000);
