let slideIndex = 0;
const slideInterval = 3000; // Time in milliseconds for each slide

function showSlides() {
    const slides = document.querySelectorAll('.slides img');
    const totalSlides = slides.length;

    // Reset the slideIndex if it goes beyond the last slide
    slideIndex = (slideIndex + 1) % totalSlides;

    // Calculate the transform value to show the next image
    const offset = -slideIndex * 100; // Move by 100% for each image

    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

// Run the showSlides function every 'slideInterval' milliseconds
setInterval(showSlides, slideInterval);
