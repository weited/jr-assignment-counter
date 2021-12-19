const getCounterDisplay = document.getElementById("display");
var displayNumber = 0;

document.getElementById("plus").addEventListener("click", e => {
    displayNumber++;
    if (displayNumber > 100) {
        displayNumber = 100;
    }
    getCounterDisplay.innerHTML=displayNumber;
})

document.getElementById("minus").addEventListener("click", e => {
    displayNumber--;
    if (displayNumber < 0) {
        displayNumber = 0;
    }
    getCounterDisplay.innerHTML=displayNumber;
})
document.getElementById("reset").addEventListener("click", e => {
    getCounterDisplay.innerHTML="0";
    displayNumber = 0;
})