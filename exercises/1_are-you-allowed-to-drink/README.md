# Exercise 1

In this exercise we will create a simple web application that requests the age of the user and then tells them if they
are allowed to drink alcoholic beverages or not. We will follow the law of The Netherlands, so the minimum drinking age
is **18**.

## Requirements

The application should have the following requirements:

-   The application should be a web application
-   The application should have a form with a single input field
-   The `input` field should be a `number` field
-   The `input` field should have a `label`
-   The application should some text that shows the result
-   The application should exist of at least 2 files: `index.html` and `index.js`
    -   Optionally you can add an `index.css` for styling.
    -   The application **should not** embed the JavaScript and CSS inside the HTML file.

## Hints

1. Ideally you will do this exercise by running the application locally. However, if you face issues doing this you can
   follow this URL to do it online: https://codesandbox.io/s/1-are-you-allowed-to-drink-2mqypm

2. If you already have NodeJS installed then you can start a server with live reloading by running the following command
   in the root directory of this repository:

    ```bash
    npm run ex1
    ```

3. It is recommended to download/clone this repository as a starting point for this exercise, the `index.html` and
   `index.js` files in this folder are already set up for you.

4. By default HTML values are always strings, if you make the input field a number field then you can use
   `valueAsNumber` to get a number value of the input event, this makes it easier to do calculation with your input.

5. Make sure to account for non number values
    - You can use `isNaN` (<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN>) to
      check if a value is not a number.
