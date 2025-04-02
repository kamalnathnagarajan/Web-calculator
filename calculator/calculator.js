let outputScreen = document.getElementById("output-screen");

// Function to display numbers and operators
function display(value) {
    outputScreen.value += value;
}

// Function to evaluate the result
function calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
    } catch (err) {
        alert("Invalid Input");
    }
}

// Function to clear the entire screen
function clearOutput() {
    outputScreen.value = "";
}

// Function to delete the last character
function deleteLast() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}

// Listen for keyboard input
document.addEventListener("keydown", function(event) {
    // Number keys (0-9) and operators
    const key = event.key;

    // Check if the pressed key is a valid input
    if (key >= '0' && key <= '9') {
        display(key); // For digits
    } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
        display(key); // For operators
    } else if (key === '.') {
        display('.'); // For decimal point
    } else if (key === 'Enter') {
        calculate(); // Press Enter to calculate
    } else if (key === 'Backspace') {
        deleteLast(); // Press Backspace to delete the last character
    } else if (key === 'Escape') {
        clearOutput(); // Press Escape to clear the screen
    } else if (key.toUpperCase() === 'C') {
        clearOutput(); // Press 'C' to clear the screen
    }
});
    