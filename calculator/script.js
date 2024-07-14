let displayValue = ''; // Stores the current display value
let operatorClicked = false; // Flag to track if an operator was clicked

// Function to append clicked button value to display
function appendToDisplay(val) {
    if (val === '.' && displayValue.includes('.')) return; // Prevent multiple decimal points
    if (operatorClicked && isNaN(val)) {
        // If an operator was clicked and the next input is not a number
        displayValue = ''; // Clear display to start fresh
        operatorClicked = false; // Reset operator flag
    }
    displayValue += val;
    document.getElementById('display').innerText = displayValue;
}

// Function to clear the display
function clearDisplay() {
    displayValue = '';
    document.getElementById('display').innerText = '0';
}

// Function to perform calculation
function calculate() {
    try {
        let result = eval(displayValue);
        if (isNaN(result) || !isFinite(result)) {
            document.getElementById('display').innerText = 'Error';
        } else {
            document.getElementById('display').innerText = result;
        }
    } catch (error) {
        document.getElementById('display').innerText = 'Error';
    }
    displayValue = ''; // Clear display after calculation
    operatorClicked = false; // Reset operator clicked flag
}

// Function to perform all clear (AC)
function allClear() {
    displayValue = ''; // Clear display value
    document.getElementById('display').innerText = '0';
}

// Example of using a loop to process each character
function processDisplay() {
    for (let i = 0; i < displayValue.length; i++) {
        console.log(displayValue[i]); // Example: Log each character to console
        // Add additional operations here as needed
    }
}
