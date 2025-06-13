# US-Phone-Number-Validator

A simple web application to validate US telephone numbers in various common formats. Enter a phone number, click **Check**, and instantly see if it’s valid or not.

## Features

- Supports multiple valid US phone number formats:
  - `555-555-5555`
  - `(555)555-5555`
  - `5555555555`
  - `1 555-555-5555`
  - `1 (555) 555-5555`
  - `1 555 555 5555`
  - `1(555)555-5555`
- Clearly displays whether the number is valid or invalid.
- **Clear** button to reset the result.
- Responsive, mobile-inspired UI.

## Usage

1. Clone or download this repository.
2. Open `index.html` in your web browser.
3. Enter a US phone number in the input field.
4. Click **Check** to validate.
5. Click **Clear** to reset the result.

## Project Structure

```
.
├── index.html      # Main HTML file
├── style.css       # Styling for the app
└── script.js       # Phone number validation logic
```


## Validation Logic

The validator accepts only valid US phone numbers with or without the country code (`1`). It supports dashes, spaces, and parentheses
