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
    const hiddenElement = document.createElement("div");
    hiddenElement.style.display = "none";
    document.body.appendChild(hiddenElement);
    const cursorElement = document.getElementById("cursor");

    let lineIndex = 0;
    let charIndex = 0;
    let currentText = '';

    function typeCharacter() {
        if (lineIndex < textLines.length) {
            let line = textLines[lineIndex];
            if (charIndex < line.length) {
                currentText += line.charAt(charIndex);
                hiddenElement.innerHTML = currentText;
                charIndex++;
                setTimeout(typeCharacter, 50); // Speed up the character printing (50ms per character)
            } else {
                currentText += '<br>';
                hiddenElement.innerHTML = currentText;
                textElement.innerHTML = hiddenElement.innerHTML;
                charIndex = 0;
                lineIndex++;
                setTimeout(typeCharacter, 200); // Speed up the delay before next line starts (300ms)
            }
        } else {
            cursorElement.style.display = 'none'; // Hide cursor after typing is done
        }
    }

    // Start the typing effect
    setTimeout(typeCharacter, 500); // Initial delay before starting the typing effect
});
