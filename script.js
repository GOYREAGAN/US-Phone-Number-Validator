const entry = document.getElementById("user-input");
const checking = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const display = document.getElementById("results-div");

// US phone number validation function
function isValidUSPhoneNumber(input) {
    // Remove leading/trailing whitespace
    const value = input.trim();

    // Valid formats:
    // 1 555-555-5555
    // 1 (555) 555-5555
    // 1 555 555 5555
    // 1(555)555-5555
    // 555-555-5555
    // (555)555-5555
    // 5555555555

    // Only allow optional leading "1" (with or without space/parentheses)
    // Area code must be 3 digits, then 3 digits, then 4 digits
    // Allow spaces, dashes, or parentheses in the right places

    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

    // Reject if leading "1" is followed by anything but space, (, or digit
    if (/^1[^ (\d]/.test(value)) return false;

    // Reject if leading "1" is followed by more than one digit (e.g., "10", "11")
    if (/^1\d{2,}/.test(value)) return false;

    // Reject if leading digit is not 1 or missing (e.g., "2", "0", "-1")
    if (/^[-0-9]/.test(value) && !/^1[\s(]?/.test(value) && !/^(\(\d{3}\)|\d{3})/.test(value)) return false;

    // Must match the main regex
    return regex.test(value);
}

checking.addEventListener("click", function () {
    const value = entry.value.trim();
    if (!value) {
        alert("Please provide a phone number");
        return;
    }
    if (isValidUSPhoneNumber(value)) {
        display.innerHTML = `Valid US number: ${value}`;
    } else {
        display.innerHTML = `Invalid US number: ${value}`;
    }
});

clear.addEventListener("click", function () {
    display.innerHTML = "";
});
