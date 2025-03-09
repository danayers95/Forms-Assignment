// JavaScript code for form validation

// Retrieve the form and input field elements
const form = document.getElementById('myForm');
const inputField = document.getElementById('inputField');

// Add an event listener to the form to handle form submission
form.addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();
    
    // Retrieve the input field value
    const inputValue = inputField.value;
    
    // Regular expression pattern for alphanumeric input (letters and numbers)
    const alphanumericPattern = /^[a-zA-Z0-9]+$/;
    
    // Check if the input value matches the alphanumeric pattern
    if (alphanumericPattern.test(inputValue)) {
        // Valid input: display confirmation message
        alert('Form submitted successfully with valid input: ' + inputValue);
    } else {
        // Invalid input: alert error message
        alert('Error: Please enter a valid alphanumeric value (letters and numbers only).');
    }
});
