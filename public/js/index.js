let slideIndex = 0;
const slideInterval = 3000; // Time in milliseconds for each slide

function showSlides() {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    // Update the slideIndex
    slideIndex = (slideIndex + 1) % totalSlides;

    // Calculate the transform value to show the next image
    const offset = -slideIndex * 100; // Move by 100% for each image

    slides.style.transition = "transform 0.5s ease-in-out"; // Smooth transition
    slides.style.transform = `translateX(${offset}%)`;

    // Check if the last slide is reached to reset the loop without delay
    if (slideIndex === totalSlides - 1) {
        setTimeout(() => {
            slides.style.transition = "none"; // Disable transition for immediate jump
            slides.style.transform = "translateX(0)";
            slideIndex = -1; // Reset slideIndex to -1 so next increment starts from 0
        }, 500); // Match this with the transition duration
    }
}

// Run the showSlides function every 'slideInterval' milliseconds
setInterval(showSlides, slideInterval);
