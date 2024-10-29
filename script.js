let count = 0;
const countDisplay = document.getElementById('count');
const incrementButton = document.getElementById('incrementButton');
const resetButton = document.getElementById('resetButton');

incrementButton.addEventListener('click', incrementCount);
resetButton.addEventListener('click', resetCount);

function incrementCount() {
    count++;
    countDisplay.textContent = count;
}

function resetCount() {
    count = 0;
    countDisplay.textContent = count;
}
