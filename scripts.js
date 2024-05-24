document.addEventListener("DOMContentLoaded", function() {
    const textLines = [
        "<span class='bold'>Swinson Consulting</span>",
        "",
        "Over 30 years of experience in:",
        "IT stuff,",
        "accounting services,",
        "and edutainment video production.",
        "",
        "<br>For more information, contact us at:",
        "<a href='mailto:info@swinsonconsulting.com'>info@swinsonconsulting.com</a>."
    ];

    const textElement = document.getElementById("text");
    const cursorElement = document.getElementById("cursor");

    let lineIndex = 0;
    let charIndex = 0;
    let currentText = '';

    function typeCharacter() {
        if (lineIndex < textLines.length) {
            let line = textLines[lineIndex];
            if (charIndex < line.length) {
                currentText += line.charAt(charIndex);
                textElement.innerHTML = currentText;
                charIndex++;
                setTimeout(typeCharacter, 100); // Adjust the speed here (100ms per character)
            } else {
                currentText += '<br>';
                textElement.innerHTML = currentText;
                charIndex = 0;
                lineIndex++;
                setTimeout(typeCharacter, 500); // Delay before next line starts
            }
        } else {
            cursorElement.style.display = 'none'; // Hide cursor after typing is done
        }
    }

    // Start the typing effect
    setTimeout(typeCharacter, 500); // Initial delay before starting the typing effect
});
