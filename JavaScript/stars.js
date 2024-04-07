// Function to check if the user is within 200vh
function isWithin200vh() {
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY || window.pageYOffset;
    return scrollPosition < 1.5 * windowHeight;
}

function createSpan() {
    if (!isWithin200vh()) return; // Exit if not within 200vh

    // Create a new <span> element
    const span = document.createElement('span');
    // Add the CSS class to the <span> element
    span.classList.add('spanParticle');

    // Generate a random color
    const color = getRandomColor();
    colorizeWords(color);
    // Set a random position for the <span> element
    setRandomPosition(span);
    // Apply styles to the <span> element based on the generated color
    setSpanStyle(span, color);

    // Generate a random duration for the animation
    const duration = Math.random() * 8 + 1;
    // Set the animation duration for the <span> element
    span.style.animationDuration = `${duration}s`;

    // Append the <span> element to a container with id "particle-container"
    document.getElementById('particle-container').appendChild(span);

    // Remove the <span> element after the animation duration
    setTimeout(() => {
        span.classList.add('animate');
        setTimeout(() => {
            span.remove();
        }, duration * 1000);
    }, 100);
}

// Set a random position for the given element
function setRandomPosition(element) {
    // Generate random values for positioning
    const minPosition = -Math.floor(Math.random() * 36) - 40;
    const maxHeight = Math.floor(Math.random() * 36) + 5;
    const randomTop = Math.min(maxHeight, Math.random() * (100 - minPosition) + minPosition);
    const randomRight = Math.random() * (100 - minPosition) + minPosition;

    // Apply the random position to the element
    element.style.top = `${randomTop}%`;
    element.style.right = `${randomRight}%`;
}

// Apply styles to the given element based on the provided color
function setSpanStyle(element, color) {
    element.style.background = `rgb(${color})`;
    element.style.boxShadow = `0 0 0 4px rgba(${color}, 0.1), 0 0 0 8px rgba(${color}, 0.1), 0 0 20px rgba(${color}, 1)`;
}

// Add 'active' class to element with id 'intro' after 3000 milliseconds (3 seconds)
setTimeout(() => {
    const intro = document.getElementById('intro');
    intro.classList.add('active');
    // Call createSpan function after the loading is finished
    createSpan();
}, 3000);

// Generate a random RGB color and return it as a string
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `${r}, ${g}, ${b}`;
}

function colorizeWords(color) {
    // Change the color of a specific element with id "coloring"
    const coloring = document.getElementById("coloring");
    coloring.style.color = `rgb(${color})`;
}

setInterval(() => {
    if (isWithin200vh()) {
        createSpan();
    }
}, 75);