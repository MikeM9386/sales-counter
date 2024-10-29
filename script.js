// Include the canvas-confetti library
var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1/dist/confetti.browser.min.js';
document.head.appendChild(script);

script.onload = function() {
    let count = parseInt(localStorage.getItem('count')) || 0;
    const countDisplay = document.getElementById('count');
    const reachedButton = document.getElementById('reachedButton');
    const resetButton = document.getElementById('resetButton');

    countDisplay.textContent = count;

    reachedButton.addEventListener('click', incrementCount);
    resetButton.addEventListener('click', resetCount);

    function incrementCount() {
        count++;
        countDisplay.textContent = count;
        localStorage.setItem('count', count);
        // Trigger confetti animation
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }

    function resetCount() {
        count = 0;
        countDisplay.textContent = count;
        localStorage.setItem('count', count);
    }
};
