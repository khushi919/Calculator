// Function to get the greeting message based on the time of day
function getGreetingMessage() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= 5 && currentHour < 12) {
        return 'Hi, Good morning!  \nHere you can perform basic math calculations!';
    } else if (currentHour >= 12 && currentHour < 18) {
        return 'Hi, Good afternoon!  \nHere you can perform basic math calculations!';
    } else {
        return 'Hi, Good evening! \nHere you can perform basic math calculations!';
    }
}

// Function to display the greeting message in an alert
function displayGreetingMessage() {
    const greetingMessage = getGreetingMessage();
    alert(greetingMessage);
}

// Event listener for page load
window.addEventListener('load', displayGreetingMessage);

let displayValue = '';
const display = document.getElementById('display');

function appendToDisplay(value) {
    displayValue += value;
    display.value = displayValue;
}


function clearDisplay() {
    displayValue = '';
    display.value = '';
}

function calculate() {
    try {
        // Evaluate the expression
        let result = eval(displayValue);
        display.value = result;
        displayValue = result.toString(); // Update displayValue with the result

        // Clear the display for the next input
        setTimeout(() => {
            clearDisplay();
            appendToDisplay(result); // Display the result for chaining operations
        }, 1000); // Delay for 1 second before clearing the display
    } catch (error) {
        display.value = 'Error';
    }
}

// Event listeners for keyboard input
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === 'Backspace') {
        displayValue = displayValue.slice(0, -1); // Remove the last character
        display.value = displayValue;
    }
});