// Function to delay execution of MainCursor function
function delayMainCursor() {
    setTimeout(MainCursor, 5000); // 5 seconds delay (5000 milliseconds)
}

// Call the delayMainCursor function to start the delay
delayMainCursor();


function MainCursor() {
    // Create the custom cursor element
    var customCursor = document.createElement("img");
    customCursor.id = "custom-cursor";
    customCursor.src = "Icons/cursor.png"; // Default custom cursor image

    // Append the custom cursor to the body
    document.body.appendChild(customCursor);

    // Function to handle mousemove event
    function handleMouseMove(event) {
        var cursor = document.getElementById("custom-cursor");
        // Update cursor position

        cursor.style.left = (event.clientX - cursor.width / 3.5) + "px";
        cursor.style.top = (event.clientY - cursor.height / 9) + "px";
        // Check if cursor is above a link or button
        changeCursor(event.target);
    }

// Function to change cursor image based on element type
function changeCursor(element) {
    var cursor = document.getElementById("custom-cursor");
    if (element.tagName === "A" || element.tagName === "BUTTON") {
        cursor.src = "Icons/pointer.png"; // Pointer custom cursor image for links and buttons
    } else if (element.tagName === "IMG") {
        if (element.parentNode.tagName === "A") {
            cursor.src = "Icons/pointer.png"; // Pointer custom cursor image for images inside links
        } else {
            cursor.src = "Icons/cursor.png"; // Custom cursor image for standalone images
        }
    } else {
        cursor.src = "Icons/cursor.png"; // Default custom cursor image for other elements
    }
}


    // Add event listeners
    document.addEventListener("mousemove", function (event) {
        document.getElementById("custom-cursor").style.display = "block";
        handleMouseMove(event);
    });

    document.addEventListener("mouseleave", function () {
        document.getElementById("custom-cursor").style.display = "none";
    });
};