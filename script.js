let count = parseInt(localStorage.getItem('count')) || 0;
const countDisplay = document.getElementById('count');
const incrementButton = document.getElementById('incrementButton');
const resetButton = document.getElementById('resetButton');
const counterDiv = document.querySelector('.counter');

countDisplay.textContent = count;

incrementButton.addEventListener('click', incrementCount);
resetButton.addEventListener('click', resetCount);

function incrementCount() {
    count++;
    countDisplay.textContent = count;
    localStorage.setItem('count', count);
}

function resetCount() {
    count = 0;
    countDisplay.textContent = count;
    localStorage.setItem('count', count);
}

// Function to adjust text color based on background
function adjustTextColor() {
    // Get the background color of the body
    const bgColor = window.getComputedStyle(document.body).backgroundColor;

    // Convert RGB color to an array of numbers
    const rgb = bgColor.match(/\d+/g).map(Number);

    // Calculate the luminance
    const luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;

    // Determine if background is light or dark
    const isDarkBackground = luminance < 0.5;

    // Set text color based on background luminance
    const textColor = isDarkBackground ? '#FFFFFF' : '#000000';

    // Apply text color to elements
    counterDiv.style.color = textColor;
    incrementButton.style.color = textColor;
    resetButton.style.color = textColor;
    countDisplay.style.color = textColor;

    // Adjust button borders
    incrementButton.style.borderColor = textColor;
    resetButton.style.borderColor = textColor;

    // Adjust button hover background
    const hoverBgColor = isDarkBackground ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)';
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
        button:hover {
            background-color: ${hoverBgColor} !important;
        }
    `, styleSheet.cssRules.length);
}

// Call the function on load
adjustTextColor();
