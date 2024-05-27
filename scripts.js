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
    let tempText = '';

    function typeCharacter() {
        if (lineIndex < textLines.length) {
            let line = textLines[lineIndex];
            if (charIndex < line.length) {
                tempText += line.charAt(charIndex);
                charIndex++;
                setTimeout(typeCharacter, 40); // Speed up the character printing (50ms per character)
            } else {
                currentText += tempText + '<br>';
                textElement.innerHTML = currentText;
                tempText = '';
                charIndex = 0;
                lineIndex++;
                setTimeout(typeCharacter, 100); // Speed up the delay before next line starts (200ms)
            }
            // Update the visible text with the new temporary text, excluding HTML tags in progress
            textElement.innerHTML = currentText + tempText.replace(/<[^>]*$/g, '');
        } else {
            cursorElement.style.display = 'none'; // Hide cursor after typing is done
        }
    }

    // Start the typing effect
    setTimeout(typeCharacter, 500); // Initial delay before starting the typing effect
});

