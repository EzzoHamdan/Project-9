

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // For smooth scrolling
    });
}

document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll('.scroll-to');
    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var targetId = this.getAttribute('data-target');
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});


document.getElementById("coloring").addEventListener("click", function () {

    const featuredElement = document.getElementById("featuredw");

    // Get the height of the viewport
    const viewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    // Get the height of the featured element
    const featuredHeight = featuredElement.clientHeight;

    // Define the additional offset (in pixels) you want
    const additionalOffset = 225; // Adjust this value as needed

    // Calculate the offset to scroll to the middle of the element with additional offset
    const offset = Math.max(0, (featuredHeight - viewportHeight) / 2) + additionalOffset;

    // Scroll to the middle of the element with smooth animation
    window.scroll({
        top: featuredElement.offsetTop - offset,
        behavior: 'smooth'
    });

    document.body.style.overflowY = 'auto';
});

// Set the interval and store the interval ID
var intervalID = setInterval(function () {
    document.getElementById('coloring').classList.toggle('shake');
}, 5000);

// Add click event listener to the element
document.getElementById('coloring').addEventListener('click', function () {
    // Clear the interval on click
    clearInterval(intervalID);
});