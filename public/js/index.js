let slideIndex = 0;
let direction = 1; // 1 means moving forward, -1 means moving backward
const slideInterval = 3000; // Time in milliseconds for each slide

function showSlides() {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;

    // Calculate the transform value to show the correct image
    const offset = -slideIndex * 100; // Move by 100% for each image
    slides.style.transition = "transform 0.5s ease-in-out"; // Smooth transition
    slides.style.transform = `translateX(${offset}%)`;

    // Update the slideIndex based on the current direction
    slideIndex += direction;

    // Reverse direction if the last or first slide is reached
    if (slideIndex === totalSlides - 1 || slideIndex === 0) {
        direction *= -1; // Reverse the direction
    }
}

// Run the showSlides function every 'slideInterval' milliseconds
setInterval(showSlides, slideInterval);
