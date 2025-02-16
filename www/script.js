document.addEventListener("DOMContentLoaded", function() {
    let startButton = document.getElementById("start-button");
    if (startButton) {
        startButton.addEventListener("click", function() {
            window.location.href = "app.html"; // Ensure this file exists
        });
    } else {
        console.error("Start button not found.");
    }
});
