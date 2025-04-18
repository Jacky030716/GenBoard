# 🧪 Coding Challenge: Validate Sign-Up Form

📋 **Objective**

You are provided with a basic sign-up form. Your task is to add input validation to improve user experience.

✅ **Validation Requirements**

Ensure the following conditions are met:

First name must not be empty

❌ Show error: "First name cannot be empty"

Last name must not be empty

❌ Show error: "Last name cannot be empty"

Email must be valid

❌ Show error: "Invalid email address"

📌 Use regex:

/^[\w-]+(\.[\w-]+)\*@([\w-]+\.)+[a-zA-Z]{2,7}$/

Password must be at least 8 characters

❌ Show error: "Password must be greater than 7 characters"

Confirm password must match the password

❌ Show error: "Passwords do not match"

🧠 **Behavior Requirements**

Errors should only appear after the user presses the Sign Up button

If all inputs are valid, output:

console.log('Form submitted successfully');

Show only the relevant error messages below each input field

💡 **Hints & Notes**

Use two states:

- Input values

- Validation errors

Create a validate function and use it in handleSubmit

Do not edit any data-testid attributes

Styling is already done for you. Optionally, you may use:

- styled-components

- inline styles

- tailwindcss

🎯 **Goal**

Improve UX with responsive validation

Match the behavior shown in the demo GIF

Keep your code modular and clean
