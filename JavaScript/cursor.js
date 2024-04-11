if (!isPhone()) {

    // Create the div element for cosmic cursor
    var cosmicCursorDiv = document.createElement("div");
    cosmicCursorDiv.setAttribute("id", "cosmic-cursor");
    cosmicCursorDiv.classList.add("fade-out");


    var sideBarDiv = document.createElement("div");
    sideBarDiv.classList.add("side-bar");
    cosmicCursorDiv.appendChild(sideBarDiv);

    // Create a div element for middle bar
    var middleBarDiv = document.createElement("div");
    middleBarDiv.classList.add("middle-bar");
    cosmicCursorDiv.appendChild(middleBarDiv);

    var sideBarDiv = document.createElement("div");
    sideBarDiv.classList.add("side-bar");
    cosmicCursorDiv.appendChild(sideBarDiv);
    

    // Append the cosmic cursor div to the body
    document.body.appendChild(cosmicCursorDiv);

    // Create the h6 element for click text
    var clickTextH6 = document.createElement("h6");
    clickTextH6.setAttribute("id", "click-text");
    clickTextH6.classList.add("fade-out");
    clickTextH6.textContent = "Click anywhere to activate the audio";

    // Append the click text h6 to the body
    document.body.appendChild(clickTextH6);


    document.addEventListener("mousemove", function (e) {
        const cursor = document.querySelector("#cosmic-cursor");
        cursor.style.top = (e.pageY - 25) + "px";
        cursor.style.left = (e.pageX - 25) + "px";

        const clickText = document.querySelector("#click-text");
        clickText.style.top = (e.pageY + 25) + "px";
        clickText.style.left = (e.pageX - 50) + "px";
    });

    // Simulate loading by hiding the cosmic loader after a certain time (e.g., 10 seconds)
    window.onload = function () {
        setTimeout(function () {
            document.getElementById('cosmic-cursor').classList.add('active');
            document.getElementById('click-text').classList.add('active');


        }, 1000); 
    };
}